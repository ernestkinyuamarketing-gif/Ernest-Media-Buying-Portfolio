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
