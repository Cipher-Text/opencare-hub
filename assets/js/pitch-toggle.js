document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".toggle-btn");
  const views = document.querySelectorAll(".pitch-view");
  const downloadLink = document.getElementById("download-link");

  const pdfMap = {
    investor: "/assets/pdf/opencare-investor-deck.pdf",
    doctor: "/assets/pdf/opencare-doctor-overview.pdf",
    hospital: "/assets/pdf/opencare-hospital-overview.pdf"
  };

  const setActive = (key, updateHash = true) => {
    views.forEach((view) => {
      const match = view.getAttribute("data-view") === key;
      if (match) {
        view.removeAttribute("hidden");
      } else {
        view.setAttribute("hidden", "");
      }
    });

    tabs.forEach((tab) => {
      const match = tab.getAttribute("data-target") === key;
      tab.classList.toggle("active", match);
      tab.setAttribute("aria-selected", match ? "true" : "false");
    });

    if (downloadLink && pdfMap[key]) {
      downloadLink.setAttribute("href", pdfMap[key]);
    }

    if (updateHash) {
      window.location.hash = key;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-target");
      setActive(key, true);
    });
  });

  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash && pdfMap[hash]) {
    setActive(hash, false);
  } else {
    setActive("investor", false);
  }
});
