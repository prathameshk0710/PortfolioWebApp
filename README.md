# Portfolio Web Application

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- 🌙 Dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with EmailJS
- 🔗 Social media integration

## Tech Stack

- React 18 — UI framework
- Vite — build tool & dev server
- Tailwind CSS — utility-first styling
- Framer Motion — animations
- React Router DOM — client-side routing
- React Icons — icon library

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) v16+ (includes npm).

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── components/          # React components (Hero, About, Projects, StudyMaterials, etc.)
│   └── common/          # Reusable components (Card, SectionTitle, SocialIcon)
├── constants/           # Static data
│   ├── notes/           # Subject-wise JSON notes (java, oops, os, dbms, spring, etc.)
│   ├── personalInfo.js
│   ├── socialLinks.js
│   ├── education.js
│   ├── experience.js
│   ├── projects.js
│   ├── techStack.js
│   └── studyMaterials.js
├── hooks/               # Custom hooks (useScrollAnimation)
├── utils/               # Animations, formatters, validators
├── config/              # Theme configuration
├── App.jsx              # Routes & main layout
├── main.jsx             # Entry point
└── index.css            # Global styles
public/
├── study-materials/     # Images for study notes
├── 404.html             # SPA fallback for GitHub Pages
└── favicon.ico
```

## Customization

All personal data lives in `src/constants/` — edit these files without touching components:

| File | Content |
|------|---------|
| `personalInfo.js` | Name, title, bio, contact, stats |
| `socialLinks.js` | Social media platforms & URLs |
| `education.js` | Degrees, institutions, years |
| `experience.js` | Job titles, companies, descriptions |
| `projects.js` | Portfolio projects, tech, links |
| `techStack.js` | Technologies organized by category |

## Design Reference

### Color Palette
- **Primary:** Blue scale (700 `#1d4ed8` → 400 `#60a5fa`)
- **Light mode:** white / gray-50 backgrounds, gray-900 text
- **Dark mode:** gray-950 backgrounds, gray-50 text
- All combinations meet WCAG AA contrast standards

### Typography
- **Headings:** Poppins (display font) — tight line-height, negative letter-spacing
- **Body:** Inter — relaxed line-height (1.75) for readability
- Responsive sizes using Tailwind breakpoints (base → md → lg)

## Deployment

Configured for **GitHub Pages** with SPA fallback (`public/404.html` handles client-side routing).

## License

MIT

