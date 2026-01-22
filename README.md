# OpenCare Hub

OpenCare Hub is the central public documentation, presentation, and visibility layer for the OpenCare healthcare platform in Bangladesh.

This hub explains what OpenCare is building, why it exists, and how different stakeholders (doctors, patients, partners, investors, contributors) can understand and engage with the platform—without needing access to the core application.

Live URL:
https://hub.opencarebd.com

---

## Why OpenCare Hub Exists

OpenCare is a multi-module healthcare ecosystem. Explaining it through a single pitch deck or repository README is not enough.

The Hub provides:

- One clear landing page summarizing the platform
- Audience-specific explanations (doctor, public, investor)
- Transparent progress tracking (what’s live vs planned)
- A trusted place for decks, documentation, visuals, and updates
- A stable URL that can be shared easily (WhatsApp, email, social media)

This hub is not the product itself.  
It is the source of truth for understanding the product.

---

## What This Repository Contains

This repository is a pure static website (HTML, CSS, minimal JavaScript).

It includes:

### Landing Page

- Platform overview
- Mission and scope
- Current progress and milestones
- Navigation to deeper sections

### Pitch Pages

- Investor overview
- Doctor introduction
- Public explanation

### Product & Business Docs

- Product vision
- MVP scope
- Roadmap (phased)
- Monetization model (ads, premium, sponsorships)

### Technical Overview

- High-level architecture
- User roles and feature matrix
- API documentation links
- Security principles (RBAC, auditability)

### Marketing & Traction

- Facebook, Instagram, LinkedIn, Blog presence
- Growth placeholders and screenshots
- What worked, what didn’t, next steps

### Trust & Safety

- Medical disclaimer
- Doctor verification approach
- Content moderation policy
- Privacy principles
- Reporting and escalation

### Partner Onboarding

- Doctors
- Hospitals / Diagnostic centers
- Social organizations
- Requirements and onboarding flow

### Ecosystem Visualization

- Visual HTML-based ecosystem diagram showing OpenCare and connected channels

### Media & Downloads

- Brand assets
- Screenshots
- Decks and one-pagers

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
│ ├── css/
│ ├── js/
│ ├── images/
│ └── pdf/
└── README.md
```

---

## Design & Technology Choices

- Static HTML by design
- No frameworks or build steps
- Mobile-first and fast loading
- Minimal JavaScript for metrics injection
- Easy deployment via Nginx or static hosting

React/Next.js is intentionally not used here. Those are reserved for the main OpenCare application.

---

## What This Repo Is Not

- Not the OpenCare backend
- Not the OpenCare frontend app
- Not a CMS
- Not a place for sensitive data

---

## How This Fits the OpenCare Ecosystem

Layered approach:

- OpenCare App → Healthcare functionality
- OpenCare APIs → Data and logic
- OpenCare Hub → Explanation, trust, visibility
- Social channels → Community and awareness

The Hub connects people to the product.

---

## Deployment

Deployed as a static site.

Recommended domain:
hub.opencarebd.com

---

## Maintainer

OpenCare Team  
Founder: Sadman Sobhan

Website: https://opencarebd.com
GitHub: https://github.com/Cipher-Text

---

## License

This repository is intended for public documentation and communication purposes.
