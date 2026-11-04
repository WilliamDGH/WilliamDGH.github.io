## Guanhua Ding — personal site

My portfolio and CV site, built with [Next.js](https://nextjs.org/) and exported as
static files, then published to GitHub Pages by the workflow in
`.github/workflows/publish.yml`.

### Stack

- Next.js 13 (Pages Router) with React 18 and Tailwind-style utility classes
- `emailjs-com` for the contact form, with a `mailto:` fallback when no email
  service is configured at build time
- Static export (`next build && next export`) served from GitHub Pages

### Local development

```bash
npm ci
npm run dev          # http://localhost:3000
```

### Static build

```bash
npm run build        # runs next build && next export, output in ./out
npx serve out        # serve the exported site locally
```

### Contact form (optional)

The form posts through [EmailJS](https://www.emailjs.com/). Without these
environment variables at build time the form falls back to opening the visitor's
mail client addressed to the address in the Contact section.

```
NEXT_PUBLIC_EMAIL_JS_SERVICE_ID=
NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID=
NEXT_PUBLIC_EMAIL_JS_PUBLIC_API=
```

### Deployment

Pushing to `main` triggers the Pages workflow: it builds the static export and
uploads `./out` as the Pages artifact. The CV PDF lives in
`public/assets/file/`; reference it from `src/components/about/Intro.js`.
