# SolidW

Create a professional booking page in under two minutes. Customers book through WhatsApp or Telegram with a pre-filled message — no payments, no appointment system.

**Module 1 (this repo, so far): Landing Page only.** Auth, dashboard, public booking pages, QR generation and the database are intentionally not implemented yet.

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3
- Framer Motion (animations)
- next-themes (dark mode)
- lucide-react (icons)

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# http://localhost:3000
```

Requires Node.js 18.18 or newer.

## Push to GitHub

```bash
git init
git add .
git commit -m "Module 1: landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/solidw.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com/new and import the `solidw` GitHub repository.
2. Framework preset: Vercel auto-detects **Next.js** — leave build settings as default (`npm run build`, output handled automatically).
3. No environment variables are required yet for this module.
4. Click **Deploy**. Vercel will give you a live URL such as `solidw.vercel.app`.

Future modules (auth, dashboard, business pages, QR codes) will introduce Supabase environment variables at that point.
