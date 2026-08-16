# Huzaifa Umer — Portfolio

A premium, static personal portfolio for **Huzaifa Umer**, Senior iOS Developer.
Built with **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step,
fully compatible with **GitHub Pages**.

---

## Project structure

```text
/
├── index.html            # Single-page site (all sections)
├── css/
│   └── styles.css         # All styling · dark + light themes · responsive
├── js/
│   ├── main.js            # Nav, theme toggle, scroll reveal, mobile menu
│   └── projects.js        # Project detail modal + per-project case-study content
├── assets/
│   ├── images/            # Replace project screenshot placeholders here
│   ├── icons/             # (Reserved) custom icons
│   └── resume.pdf         # Downloadable resume
├── .nojekyll              # Serve files as-is on GitHub Pages
└── README.md
```

---

## Run locally

No dependencies, no Node.js, no build commands. Either:

**Option A — open directly**

Open `index.html` in a browser. (Some browsers restrict `file://` for a few
features; if anything looks off, use Option B.)

**Option B — tiny local server** (recommended)

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## How to customize

### Replace the project screenshots
Each featured project and card currently shows a **"Screenshot placeholder"**.
To use real images:

1. Add your image files to `assets/images/` (e.g. `arm-authenticator.png`).
2. In `index.html`, find the matching project's `<div class="project__media" ...>`.
3. Replace the placeholder block with an `<img>`, for example:

   ```html
   <div class="project__media">
     <img src="assets/images/arm-authenticator.png"
          alt="Arm Transaction Authenticator screenshot" loading="lazy" />
   </div>
   ```

   (You can remove the `<span class="project__media-label">…</span>` line.)
   The container keeps its aspect ratio; add `style="object-fit:cover;width:100%;height:100%"`
   to the image if you want it to fill the frame.

### Update GitHub & LinkedIn URLs
Both are intentionally **placeholders**. Search `index.html` for
`data-placeholder` — there are links in the **hero** and the **contact** section.
Replace each:

```html
<!-- Before -->
<a href="#" data-placeholder="GitHub URL" ...>GitHub</a>

<!-- After -->
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
```

Remove the `data-placeholder` attribute once a real URL is set (that attribute
drives the "not added yet" reminder in `js/main.js`).

### Replace the resume
Drop your latest PDF in at `assets/resume.pdf` (keep the same filename and the
"Download Resume" buttons in the nav, hero and contact section keep working).

### Social preview image (optional)
`index.html` references `assets/images/og-image.png` for Open Graph / Twitter
cards. Add a 1200×630 PNG there for rich link previews, or remove the
`og:image` / `twitter:image` meta tags if not needed.

### Theme
The site is **dark by default**, respects the visitor's system preference, and
includes a manual light/dark toggle (persisted in `localStorage`). No action
needed — it just works.

---

## Deploy to GitHub Pages

This repo is named for a **user site** (`<username>.github.io`) and deploys from
the repository **root** — no configuration or build tooling required.

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` · **Folder:** `/ (root)`
4. Save. Your site publishes at `https://<username>.github.io/` within a minute
   or two.

The included `.nojekyll` file tells GitHub Pages to serve the files exactly as
they are.

---

## Accessibility & performance notes

- Semantic HTML, correct heading hierarchy, skip-link, visible focus states.
- Alt text / ARIA labels on interactive and image elements.
- Keyboard-operable navigation and mobile menu (Esc closes the menu).
- Respects `prefers-reduced-motion` — all reveal/hover animations are disabled
  for users who request reduced motion.
- No external fonts, scripts, or CDNs — everything is local and fast.

---

© 2026 Huzaifa Umer · Senior iOS Developer
