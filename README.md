## Guanhua Ding — personal site

My portfolio and CV site, built with [Next.js](https://nextjs.org/) and exported as
static files, then published to Cloudflare Pages.

### Stack

- Next.js 13 (Pages Router) with React 18 and Tailwind-style utility classes
- `emailjs-com` for the contact form, with a `mailto:` fallback when no email
  service is configured at build time
- Static export (`next build && next export`) served from Cloudflare Pages

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

Production is a **Cloudflare Pages** project connected to this GitHub repository.
Every push to `main` runs `npm run build` (`next build && next export`) and
publishes the `out` directory; every pull request gets a preview deployment.
There is no GitHub Actions workflow in this repo — the pipeline lives entirely in
the Cloudflare dashboard, so the only values it needs are:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `out` |

The CV PDF lives in `public/assets/file/`; reference it from
`src/components/about/Intro.js`.
