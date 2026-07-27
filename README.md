# Walter Rodríguez — Developer Portfolio

Personal portfolio built to present my professional experience, selected projects
and technical background as a Full Stack Developer with a strong Frontend
specialization.

The website is focused on opportunities in Italy and is available in Italian and
English.

## Live website

- Portfolio: [marvin1604-portafolio.netlify.app](https://marvin1604-portafolio.netlify.app/)
- Italian version: `/it`
- English version: `/en`

## Tech stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Localized metadata and content
- Formspree contact form

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to
the Italian version.

## Quality checks

```bash
npm run lint
npm run build
```

## Structure

```text
src/
├── app/          # Routes, localized metadata and global styles
├── components/   # Shared UI and layout components
├── data/         # Italian and English portfolio content
├── sections/     # Page sections
└── types/        # Portfolio content types
```

The previous Create React App implementation is temporarily preserved in
`legacy-cra/` while the new version is validated and deployed.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the final production origin so canonical URLs,
robots and sitemap point to the correct domain.

## Author

**Walter Rodríguez**

- [LinkedIn](https://www.linkedin.com/in/walter-rodriguez-sanchez/)
- [GitHub](https://github.com/marvin1604)
- [Email](mailto:walter.rodriguez.dev@gmail.com)
