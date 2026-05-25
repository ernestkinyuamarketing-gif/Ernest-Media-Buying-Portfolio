/* ----------------------------------------------------------------------------
   case-study.js  —  Renders content for the three channel pages:
   google-ads.html, meta-ads.html, bing-ads.html.

   Each page sets <body data-channel="googleAds | metaAds | bingAds">.
   This script reads SITE_CONTENT.caseStudies[channel] from content.js
   and renders the page. Content is owned by content.js — never edit here.
   ---------------------------------------------------------------------------- */
(function () {
  const C = window.SITE_CONTENT;
  if (!C) { console.error("SITE_CONTENT missing — check content.js"); return; }

  const channel = document.body.getAttribute("data-channel");
  const cs = C.caseStudies && C.caseStudies[channel];
  if (!cs) { console.error("No caseStudies entry for channel:", channel); return; }

  /* ----- Helpers ----- */
  const escape = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const fmt = (s) =>
    String(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  /* ----- Inline SVG icon library (used by the "How I Fix" section) ----- */
  const SVG_ICONS = {
    foundation: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="18" width="22" height="6" rx="1.5"/><rect x="6" y="11" width="16" height="5" rx="1.5"/><rect x="9" y="4" width="10" height="5" rx="1.5"/></svg>`,
    shield:     `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3 L24 6 V14 C24 19.5 19 24 14 25 C9 24 4 19.5 4 14 V6 L14 3 Z"/><path d="M10 14 L13 17 L18 11"/></svg>`,
    target:     `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="14" cy="14" r="10"/><circle cx="14" cy="14" r="6"/><circle cx="14" cy="14" r="2" fill="currentColor"/></svg>`,
    layers:     `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4 L24 10 L14 16 L4 10 Z"/><path d="M4 14 L14 20 L24 14"/><path d="M4 18 L14 24 L24 18"/></svg>`,
    compass:    `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="14" cy="14" r="10"/><path d="M18 10 L14 19 L10 18 L19 14 Z" fill="currentColor"/></svg>`,
    chart:      `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 24 H24"/><rect x="6" y="16" width="3.5" height="6" rx="0.5"/><rect x="12.25" y="11" width="3.5" height="11" rx="0.5"/><rect x="18.5" y="5" width="3.5" height="17" rx="0.5"/></svg>`,
    spark:      `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3 L16 11 L24 14 L16 17 L14 25 L12 17 L4 14 L12 11 Z" fill="currentColor" fill-opacity="0.18"/></svg>`,
    users:      `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="10" r="4"/><path d="M3 23 C3 18.5 7 16 11 16 C15 16 19 18.5 19 23"/><circle cx="20" cy="8" r="3"/><path d="M17 16 C19.5 15 25 16 25 21"/></svg>`,
    dollar:     `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="14" cy="14" r="10"/><path d="M17 10 C16 8.5 14.5 8 13 8 C11 8 10 9 10 10.5 C10 12 11 12.5 13.5 13.2 C16.5 14 17.5 14.5 17.5 16 C17.5 17.5 16.5 18.5 14 18.5 C12 18.5 10.5 17.5 9.5 16"/><path d="M14 6 V8"/><path d="M14 18.5 V20.5"/></svg>`,
  };
  const renderIcon = (key) => SVG_ICONS[key] || SVG_ICONS.spark;

  const setText = (sel, value) => {
    document.querySelectorAll(sel).forEach(el => { el.innerHTML = fmt(escape(value)); });
  };

  const setMeta = (name, value) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
    el.setAttribute("content", value);
  };
  const setMetaProp = (prop, value) => {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", value);
  };

  /* ----- Page meta ----- */
  document.title = cs.meta.title;
  setMeta("description", cs.meta.description);
  setMetaProp("og:title", cs.meta.title);
  setMetaProp("og:description", cs.meta.description);
  setMetaProp("og:image", C.meta.ogImage);

  /* ----- Hero ----- */
  setText("[data-cs='eyebrow']",    cs.eyebrow);
  setText("[data-cs='heading']",    cs.heading);
  setText("[data-cs='subheading']", cs.subheading);

  const metricsEl = document.querySelector("[data-cs='headlineMetrics']");
  if (metricsEl) {
    metricsEl.innerHTML = cs.headlineMetrics.map(m => `
      <div class="cs-headline-metric">
        <span class="value">${escape(m.value)}</span>
        <span class="label">${escape(m.label)}</span>
      </div>`).join("");
  }

  /* ----- "How I Fix" approach section ----- */
  if (cs.howIFix) {
    setText("[data-cs='fixEyebrow']",    cs.howIFix.eyebrow);
    setText("[data-cs='fixHeading']",    cs.howIFix.heading);
    setText("[data-cs='fixSubheading']", cs.howIFix.subheading);

    const fixEl = document.querySelector("[data-cs='fixItems']");
    if (fixEl) {
      fixEl.innerHTML = cs.howIFix.items.map(it => `
        <article class="cs-fix-card">
          <span class="cs-fix-card__icon">${renderIcon(it.icon)}</span>
          <h3>${fmt(escape(it.title))}</h3>
          <p>${fmt(escape(it.body))}</p>
        </article>
      `).join("");
    }
  }

  /* ----- "My Process" 4-phase track ----- */
  if (cs.process) {
    setText("[data-cs='processEyebrow']",    cs.process.eyebrow);
    setText("[data-cs='processHeading']",    cs.process.heading);
    setText("[data-cs='processSubheading']", cs.process.subheading);

    const processEl = document.querySelector("[data-cs='processPhases']");
    if (processEl) {
      processEl.innerHTML = cs.process.phases.map(p => `
        <div class="cs-process-phase">
          <span class="cs-process-phase__number" aria-hidden="true">${escape(p.number)}</span>
          <h3 class="cs-process-phase__name">${escape(p.name)}</h3>
          <span class="cs-process-phase__weeks">${escape(p.weeks)}</span>
          <ul class="cs-process-phase__bullets">
            ${p.bullets.map(b => `<li>${fmt(escape(b))}</li>`).join("")}
          </ul>
        </div>
      `).join("");
    }
  }

  /* ----- Studies (the main content) ----- */
  const studiesEl = document.querySelector("[data-cs='studies']");
  if (studiesEl) {
    studiesEl.innerHTML = cs.studies.map((s, i) => `
      <article class="cs-card reveal">
        <header class="cs-card-head">
          <span class="cs-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <h2>${fmt(escape(s.title))}</h2>
            <p class="cs-meta">${escape(s.client)} · ${escape(s.period)}</p>
          </div>
        </header>

        <div class="cs-body">
          <div class="cs-block">
            <h3>The Challenge</h3>
            <p>${fmt(escape(s.challenge))}</p>
          </div>
          <div class="cs-block">
            <h3>The Approach</h3>
            <ul>${s.approach.map(a => `<li>${fmt(escape(a))}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="cs-results">
          <h3>The Results</h3>
          <div class="cs-result-grid">
            ${s.results.map(r => `
              <div class="cs-result">
                <span class="value">${escape(r.value)}</span>
                <span class="label">${escape(r.label)}</span>
              </div>`).join("")}
          </div>
        </div>

        ${s.screenshot ? `
          <figure class="cs-screenshot">
            <img src="${escape(s.screenshot)}" alt="${escape(s.title)} screenshot" loading="lazy" />
          </figure>` : ""}
      </article>
    `).join("");
  }

  /* ----- Tools section ----- */
  const toolsEl = document.querySelector("[data-cs='tools']");
  if (toolsEl) {
    toolsEl.innerHTML = cs.tools.map(t => `<span class="tool-chip">${escape(t)}</span>`).join("");
  }

  /* ----- Closing pitch (CTA) ----- */
  setText("[data-cs='ctaHeading']",    cs.closingPitch.heading);
  setText("[data-cs='ctaSubheading']", cs.closingPitch.subheading);
  setText("[data-cs='ctaLabel']",      cs.closingPitch.ctaLabel);

  /* ----- Footer ----- */
  setText("[data-cs='footerCopy']", C.footer.copyright);
  setText("[data-cs='footerNote']", C.footer.note);

  /* ----- Brand / nav ----- */
  setText("[data-cs='brand']", C.nav.brand);

  /* ----- Scroll reveal ----- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
