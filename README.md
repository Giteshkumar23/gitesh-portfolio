# Gitesh Kumar Patel — Portfolio

Premium personal portfolio for Gitesh Kumar Patel, Data & AI Developer.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icons

## Project Structure

```
src/
  components/
    Navbar.jsx         # Sticky nav with blur, mobile menu
    Hero.jsx           # Hero section with floating badges
    About.jsx          # About + info cards
    Skills.jsx         # Filterable skill groups
    Projects.jsx       # Cards + project detail modal
    Journey.jsx        # Timeline / education
    Certifications.jsx # Cert cards (dynamic)
    Resume.jsx         # Resume CTA
    Contact.jsx        # Contact form + info
    Footer.jsx         # Footer with back-to-top

  data/
    portfolio.js       # ← Edit ALL personal content here

  assets/
    images/            # Place profile photo here (see Hero.jsx)

public/
  resume/
    Gitesh_Kumar_Patel_Resume.pdf   # ← Drop resume PDF here
  favicon.svg
```

## Getting Started

```bash
npm install
npm run dev
```

## Updating Content

All personal information lives in `src/data/portfolio.js`.
Edit that file to update name, bio, projects, skills, certs, links etc.

## Replacing Profile Photo

1. Add your photo to `src/assets/images/profile.jpg`
2. In `src/components/Hero.jsx`, replace the placeholder avatar div with:
   ```jsx
   import profileImg from '../assets/images/profile.jpg';
   // ...
   <img src={profileImg} alt="Gitesh Kumar Patel" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
   ```

## Adding Resume

Drop the PDF at: `public/resume/Gitesh_Kumar_Patel_Resume.pdf`

## Adding Certifications

In `src/data/portfolio.js`, add items to the `certifications` array:
```js
{
  title: "Certificate Title",
  organization: "Issuing Organization",
  date: "Month Year",
  credentialUrl: "https://...",
}
```

## Deploy to Vercel

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

The `vercel.json` is already configured for SPA routing.

## Update LinkedIn / Domain

After deployment, update `src/data/portfolio.js`:
```js
linkedin: "https://linkedin.com/in/YOUR-ACTUAL-URL",
```

And update `index.html` canonical + OG URLs to your deployed domain.
