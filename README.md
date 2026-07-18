# Atharva Dhamal — Portfolio

A Next.js + Tailwind CSS portfolio, built in the sticky-note / hand-drawn
style of the provided reference design, populated with content from your
resume.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/layout.js` — fonts (Caveat for the hand-drawn accents, Space Grotesk
  for everything else) and global page shell
- `app/page.js` — assembles the sections
- `components/` — one file per section: Navbar, Hero, WhatIDo,
  FeaturedProjects, WorkExperience, Contact, Footer
- `tailwind.config.js` — the sticky-note color tokens (`note-yellow`,
  `note-blue`, `note-pink`) and the hard drop-shadow used on cards/buttons

## Customize

- Swap the emoji "art" in `FeaturedProjects.jsx` for real project
  screenshots (drop images in `/public` and use `next/image`).
- Update social links and email in `Footer.jsx` / `Contact.jsx`.
- Colors live in `tailwind.config.js` under `theme.extend.colors`.
