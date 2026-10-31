# E-portfolio

Astro + Tailwind, static output, CSS-only animations (no client framework).

## Run
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Edit content
All copy lives in `src/content/en.json`. To add French later, create `fr.json` with the same keys.
- Projects: push objects into `courses.projects` (fields: title, description, context, status, stack[], problem, contribution, outcome, links{source,demo,docs}). Links render only if non-null.
- Links/CVs: set `href` in `social` and `resume.files`; put PDFs in `public/cv/`.
- Elevator pitch: set `career.pitchEmbed` to an embed URL.
- Civic roles: push `{org, role, text}` into `civic.entries`.

## Deploy
- GitHub Pages: set `site` and `base` in `astro.config.mjs`, enable Pages (source: GitHub Actions), push to `main`.
- Vercel: import the repo; no config needed (remove `site`/`base`).
