# Ernest Mutwiri — Media Buying Portfolio

A clean, single-page portfolio site for a paid media specialist. Built with plain
HTML, CSS, and vanilla JavaScript — **no build tools, no frameworks**.

**Live site:** _to be added after Netlify deployment_

---

## Project structure

```
portfolio/
├── index.html         # Main one-page portfolio (share this URL by default).
├── google-ads.html    # Google Ads case studies (share for Google Ads roles).
├── meta-ads.html      # Meta Ads case studies (share for Meta roles).
├── bing-ads.html      # Bing Ads case studies (share for Bing roles).
├── styles.css         # All styling (shared across every page).
├── content.js         # ALL site copy and data — including case studies. Edit this.
├── case-study.js      # Render script for the 3 channel pages (don't edit).
├── netlify.toml       # Netlify build/deploy settings.
├── assets/
│   ├── profile.jpg    # Your headshot (add this file).
│   ├── og-image.jpg   # Social-share image (1200×630, optional).
│   └── case-studies/  # Optional screenshots referenced from case studies.
├── .gitignore
└── README.md
```

## Page URLs (after deploy)

| URL                   | Use it when…                                          |
| --------------------- | ----------------------------------------------------- |
| `/`                   | General portfolio link — recruiters, anyone curious   |
| `/google-ads`         | Applying for Google Ads / PPC roles                   |
| `/meta-ads`           | Applying for Meta / Facebook Ads roles                |
| `/bing-ads`           | Applying for Microsoft Ads / multi-channel roles      |

On the main page, the **Google Ads**, **Meta Ads**, and **Bing Ads** service
cards are clickable — they take visitors into the matching case study page.

## Updating content

All site copy — headings, metrics, job history, services, contact info, and
case studies — lives in [`content.js`](content.js). To update anything visible
on the site, open that file, edit the relevant section, save, refresh the
browser.

You can wrap any phrase in `**double asterisks**` to make it bold (works inside
paragraph text and bullet points), e.g.:

```js
"Managed monthly Google Ads spend of **$100,000+** across multiple accounts."
```

Common edits:

| To change…                  | Edit in `content.js`…             |
| --------------------------- | --------------------------------- |
| Hero heading / subheading   | `hero.heading`, `hero.subheading` |
| The 4 big metric numbers    | `metrics`                         |
| About-me paragraphs         | `about.paragraphs`                |
| A job / agency role         | `results.cards`                   |
| Services offered            | `services.items`                  |
| Your process steps          | `methodology.steps`               |
| Tools / platforms list      | `tools.items`                     |
| Email / phone / location    | `contact.email`, `contact.phone`, `contact.location` |
| LinkedIn URL                | `contact.linkedin`                |
| Footer text                 | `footer.copyright`, `footer.note` |
| Google Ads case studies     | `caseStudies.googleAds`           |
| Meta Ads case studies       | `caseStudies.metaAds`             |
| Bing Ads case studies       | `caseStudies.bingAds`             |

### Filling in case studies

Open `content.js` and scroll to the `caseStudies` block. Each channel
(`googleAds`, `metaAds`, `bingAds`) has a `studies` array. For each case
study, fill in:

- `title` — short, punchy headline (e.g. _"Scaling from $40K to $200K/Month"_)
- `client` — brand name, or _"Confidential e-commerce brand"_ if under NDA
- `period` — date range (e.g. _"Jan 2024 – Dec 2025"_)
- `challenge` — the situation when you took over (2–3 sentences)
- `approach` — array of bullets describing what you did
- `results` — array of `{ value, label }` stat cards
- `screenshot` _(optional)_ — path to an image in `assets/case-studies/`

Anything wrapped in `**double asterisks**` becomes **bold** — use this to
highlight metrics in the challenge text and approach bullets.

## Running locally

This is a static site — no build step.

**Option 1 — Just open the file:**
Double-click `index.html`. Works fine for previewing.
(Note: the Netlify contact form won't submit until deployed.)

**Option 2 — Local server (better — JS modules and fonts behave correctly):**
If you have Python 3 installed:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Or use VS Code's **Live Server** extension.

## Deploying to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com) (use GitHub login).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, authorize, and select this repository.
4. Build settings:
   - **Build command:** _(leave empty)_
   - **Publish directory:** `.`
5. Click **Deploy site**.

Netlify gives you a URL like `https://ernest-media-buying.netlify.app`. You can
add a custom domain later under **Domain settings**.

Every time you push to `main`, Netlify auto-deploys. The contact form is
already wired up — Netlify will detect `data-netlify="true"` and start
collecting submissions in your dashboard under **Forms**.

## Adding the profile photo

Save your headshot as `assets/profile.jpg` (~800×800 px square, < 200 KB).
The site will pick it up automatically.

## Adding a social-share image (optional but recommended)

Save a 1200×630 image as `assets/og-image.jpg`. This is what shows up as the
preview when the site URL is pasted into LinkedIn, WhatsApp, Twitter, etc.

## Future updates that should be easy

- **Add a new case study** → append to `results.cards` in `content.js`.
- **Update a metric** → edit the `metrics` array.
- **Add testimonials section** → add a `testimonials` block to `content.js`
  and a matching section in `index.html` following the existing pattern.
- **Add a blog / Insights section** → similar pattern; can be added later.

## Credits

Designed and developed for Ernest Mutwiri, Nairobi, Kenya.
