# Klaudia Fiksak — Psychotherapist Website

A modern, mobile-friendly Next.js landing page, ready to deploy on Vercel.

## 🚀 Deploy to Vercel (3 steps)

### Option A — GitHub (recommended)
1. Upload this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Click **Deploy** — done! ✅

### Option B — Vercel CLI
```bash
npm install -g vercel
cd klaudia-site
vercel
```

## 🖼️ Adding Your Photo
Replace the placeholder in `pages/index.js`:
1. Add your photo to `/public/photo.jpg`
2. In `index.js`, replace the `about-photo-inner` div with:
```jsx
<img src="/photo.jpg" alt="Klaudia Fiksak" style={{width:'100%',height:'100%',objectFit:'cover'}} />
```

## 📅 Adding Real Booking (Cal.com — free)
1. Sign up at [cal.com](https://cal.com) — free
2. Set your availability calendar
3. Get your Cal.com link (e.g. `https://cal.com/klaudia-fiksak`)
4. Replace the `#booking` href in the buttons with your Cal.com link

## ✉️ Making the Form Actually Send Emails
Add a free form backend — options:
- **Formspree** (free): Replace `<form>` action with your Formspree endpoint
- **Resend** (free tier): Add an API route in `/pages/api/contact.js`

## 🌐 Custom Domain on Vercel
In Vercel dashboard → Settings → Domains → Add your domain.

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```
