# OpenCare Hub

OpenCare Hub is the central public documentation and communication layer for the OpenCare healthcare platform in Bangladesh.

This hub explains what OpenCare is, why it exists, and how different stakeholders—doctors, patients, partners, investors, and contributors—can understand and engage with the platform.

**Live URL:** https://hub.opencarebd.com

---

## Purpose

OpenCare is a multi-module healthcare ecosystem. A single pitch deck or README cannot adequately explain its scope, progress, and vision.

The Hub provides:

- **Clear platform overview** — one landing page summarizing OpenCare
- **Audience-specific content** — tailored explanations for doctors, patients, investors, and partners
- **Transparent progress tracking** — what's live, what's planned, and what's next
- **Centralized resources** — decks, documentation, visuals, and updates in one place
- **Shareable URL** — easy to distribute via WhatsApp, email, or social media

**This hub is not the product itself.**  
It is the source of truth for understanding the product.

---

## Repository Contents

This repository contains a pure static website (HTML, CSS, minimal JavaScript).

### Core Sections

**Landing Page**

- Platform overview
- Mission and scope
- Current milestones
- Navigation to detailed sections

**Pitch Pages**

- Investor overview
- Doctor introduction
- Public explanation

**Product & Business**

- Product vision
- MVP scope
- Phased roadmap
- Monetization model (ads, premium, sponsorships)

**Technical Overview**

- High-level architecture
- User roles and feature matrix
- API documentation links
- Security principles (RBAC, audit trails)

**Marketing & Traction**

- Social media presence (Facebook, Instagram, LinkedIn)
- Growth metrics and screenshots
- Lessons learned and next steps

**Trust & Safety**

- Medical disclaimer
- Doctor verification process
- Content moderation policy
- Privacy principles
- Reporting and escalation procedures

**Partner Onboarding**

- Doctors
- Hospitals and diagnostic centers
- Social organizations
- Requirements and onboarding workflows

**Ecosystem Visualization**

- Interactive HTML diagram showing OpenCare and connected channels

**Media & Downloads**

- Brand assets
- Screenshots
- Pitch decks and one-pagers

---

## Project Structure

```
opencare-hub/
├── index.html
├── pitch/
├── business/
├── product/
├── tech/
├── marketing/
├── trust/
├── traction/
├── partners/
├── press/
├── download/
├── ecosystem/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── pdf/
└── README.md
```

---

## Design Principles

**Static HTML by design**

- No frameworks or build steps
- Mobile-first and fast loading
- Minimal JavaScript (only for metrics injection)
- Easy deployment via Nginx or any static hosting service

React/Next.js are intentionally not used here. Those technologies are reserved for the main OpenCare application.

---

## What This Repository Is Not

- Not the OpenCare backend
- Not the OpenCare frontend application
- Not a CMS or dynamic content platform
- Not a storage location for sensitive data

---

## Ecosystem Position

OpenCare follows a layered approach:

- **OpenCare App** — core healthcare functionality
- **OpenCare APIs** — data and business logic
- **OpenCare Hub** — public documentation, trust, and visibility
- **Social channels** — community engagement and awareness

The Hub connects people to the product.

---

## Deployment

Deployed as a static site.

**Recommended domain:** hub.opencarebd.com

Deploy using:

- Nginx
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

---

## Maintainer

**OpenCare Team**  
Founder: Sadman Sobhan

- Website: https://opencarebd.com
- GitHub: https://github.com/Cipher-Text

---

## License

This repository is intended for public documentation and communication purposes.

All content is © OpenCare unless otherwise noted.

---

## Contributing

Contributions to improve documentation clarity, fix typos, or enhance accessibility are welcome.

Please open an issue or submit a pull request.

---

## Contact

For inquiries, partnerships, or support:

- Email: contact@opencarebd.com
- Visit: https://hub.opencarebd.com
