# Interactive 3‑D Bread – Vercel Edition 🍞

Deploy this repo straight to **Vercel** for a zero‑config static site.

## Quick deploy
1. [Fork](https://github.com) or upload the folder to a new GitHub repository.
2. In your Vercel dashboard, click **“Add New ⇒ Project”** and import that repo.
3. Framework preset: **Other** → Vercel will detect it as a Static Site.
4. Click **Deploy**.

That’s it!  
The site uses CDN‑hosted ES‑module imports from **unpkg** for Three.js, so no build step is necessary.

## Local preview
```bash
npm i -g vercel       # one‑time
vercel dev            # live‑reload preview at http://localhost:3000
```

## Files
- **index.html** – main document
- **style.css** – minimal styling
- **main.js** – Three.js scene, builds the loaf
- **vercel.json** – tells Vercel to serve as static

Enjoy your fresh loaf! 🥖
