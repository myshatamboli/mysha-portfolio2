# Mysha Tamboli — Portfolio

A premium, fully responsive personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom design tokens: graphite background, gold + violet accent duotone)
- **Framer Motion** for scroll reveals, hero parallax and micro-interactions
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

Every piece of real content (name, bio, experience, projects, leadership, awards, certifications, contact info) lives in a single file:

```
src/data/portfolio.js
```

Edit that file and the entire site updates — no need to touch component code.

Two things to update before you publish:

1. **Social links** — `profile.socials.linkedin` and `profile.socials.github` are placeholders. Replace with your real profile URLs.
2. **CV file** — your CV is already included at `public/Mysha-Tamboli-CV.pdf` and wired up to every "Download CV" button via `profile.cvFile`. Swap the PDF file (keep the same filename, or update `cvFile` in the data file) whenever you refresh your CV.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects the Vite framework (config is also pinned in `vercel.json`). Click **Deploy**.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
├── public/
│   ├── favicon.svg
│   └── Mysha-Tamboli-CV.pdf
├── src/
│   ├── components/        # Navbar, Hero, About, Experience, Projects, Leadership, Awards, Contact, Footer
│   ├── data/portfolio.js  # ← all editable content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Accessibility & performance notes

- Keyboard focus states are visible on all interactive elements.
- `prefers-reduced-motion` is respected — animations shorten automatically.
- Fonts are loaded via `<link>` with `preconnect` for fast first paint.
- All sections are responsive from 360px mobile up to large desktop.
