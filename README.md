# shineops

Landing page for **Shineops Ads Monitor** — one read-only dashboard for every client's Meta ad spend.

Built with React 18 + Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

- `src/components/` — one component per page section (Header, Hero, TrustStrip, BeforeAfter, Features, HowItWorks, WhoItsFor, CtaBand, Testimonials, Faq, DemoForm, Footer)
- `src/data.js` — page copy: nav links, features, steps, audiences, testimonials, FAQs
- `src/*.css` — styles (`index.css` base + one file per redesigned section)
- `public/` — images and favicon

## Before launch

- `src/data.js` → `testimonials` are **sample placeholders**. Replace them with real Google reviews (and the real rating in `src/components/Testimonials.jsx`).
- `src/components/DemoForm.jsx` — the form only shows a thank-you message; connect the `TODO` to your backend/CRM.
- `/privacy` and `/data-deletion` pages linked in the footer don't exist yet.
