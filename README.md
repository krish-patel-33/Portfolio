# Portfolio

Personal React portfolio app built with Vite.

## Tech Stack

- React 18
- Vite
- Framer Motion
- Lucide React

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally

## Project Structure

```text
portfolio/
  docs/
    images/                  # README/reference screenshots
  public/                    # static files served as-is
  src/
    assets/                  # imported app assets
    components/
      effects/               # cursor and visual interaction helpers
      scene/                 # 3D/hero scene internals
      sections/              # page sections (hero, work, contact, etc.)
    App.jsx
    index.css
    main.jsx
  vite.config.js
```

## Notes

- This repository is standardized on **Vite**.
