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

  /* ----- Inline SVG icons come from icons.js (window.SVG_ICONS / window.renderIcon) ----- */
  const renderIcon = window.renderIcon || (() => "");

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
  setText("[data-cs='subheading']", cs.subheading);

  // Heading: wrap headingAccent (if present) in <em class="hero-accent"> for serif italic gold styling
  const headingEl = document.querySelector("[data-cs='heading']");
  if (headingEl) {
    const safeHeading = escape(cs.heading);
    if (cs.headingAccent) {
      const safeAccent = escape(cs.headingAccent);
      headingEl.innerHTML = safeHeading.replace(safeAccent, `<em class="hero-accent">${safeAccent}</em>`);
    } else {
      headingEl.innerHTML = safeHeading;
    }
  }

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

  /* ----- Studies section head ----- */
  setText("[data-cs='studiesEyebrow']",    cs.studiesEyebrow || "Selected work");
  setText("[data-cs='studiesHeading']",    cs.studiesHeading || "Case studies");
  setText("[data-cs='studiesSubheading']", cs.studiesSubheading || "");

  /* ----- Studies — compact preview cards that expand in-place on click ----- */
  const studiesEl = document.querySelector("[data-cs='studies']");
  if (studiesEl) {
    studiesEl.classList.add("cs-studies-grid");
    studiesEl.innerHTML = cs.studies.map((s, i) => {
      const topResults = (s.results || []).slice(0, 3);
      return `
        <article class="cs-card-compact reveal" data-expanded="false">
          <header class="cs-card-compact__head">
            <span class="cs-card-compact__num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            <h3 class="cs-card-compact__title">${fmt(escape(s.title))}</h3>
          </header>
          <p class="cs-card-compact__meta">${escape(s.client)} · ${escape(s.period)}</p>
          <p class="cs-card-compact__challenge">${fmt(escape(s.challenge))}</p>

          <div class="cs-card-compact__expanded">
            <h4 class="cs-card-compact__h4">The Approach</h4>
            <ul class="cs-card-compact__approach">
              ${s.approach.map(a => `<li>${fmt(escape(a))}</li>`).join("")}
            </ul>
            <h4 class="cs-card-compact__h4">The Results</h4>
            <div class="cs-card-compact__metrics cs-card-compact__metrics--full">
              ${s.results.map(r => `
                <div class="cs-card-compact__metric">
                  <span class="value">${escape(r.value)}</span>
                  <span class="label">${escape(r.label)}</span>
                </div>`).join("")}
            </div>
          </div>

          <div class="cs-card-compact__metrics cs-card-compact__metrics--preview">
            ${topResults.map(r => `
              <div class="cs-card-compact__metric">
                <span class="value">${escape(r.value)}</span>
                <span class="label">${escape(r.label)}</span>
              </div>`).join("")}
          </div>

          <button type="button" class="cs-card-compact__toggle" aria-expanded="false">
            <span class="cs-card-compact__toggle-label">Read more</span>
            <span class="cs-card-compact__toggle-icon" aria-hidden="true">↓</span>
          </button>
        </article>
      `;
    }).join("");

    // Click handler — toggles a single card's expanded state without touching siblings
    studiesEl.querySelectorAll(".cs-card-compact__toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".cs-card-compact");
        if (!card) return;
        const expanded = card.getAttribute("data-expanded") === "true";
        const next = !expanded;
        card.setAttribute("data-expanded", String(next));
        btn.setAttribute("aria-expanded", String(next));
        btn.querySelector(".cs-card-compact__toggle-label").textContent = next ? "Show less" : "Read more";
        btn.querySelector(".cs-card-compact__toggle-icon").textContent = next ? "↑" : "↓";
      });
    });
  }

  /* ----- Why Hire Me (shared content from SITE_CONTENT.whyHireMe) ----- */
  if (C.whyHireMe) {
    setText("[data-cs='whyEyebrow']",    C.whyHireMe.eyebrow);
    setText("[data-cs='whyHeading']",    C.whyHireMe.heading);
    setText("[data-cs='whySubheading']", C.whyHireMe.subheading);

    const whyEl = document.querySelector("[data-cs='whyItems']");
    if (whyEl) {
      whyEl.innerHTML = C.whyHireMe.items.map(it => `
        <article class="why-card">
          <span class="why-card__icon">${renderIcon(it.icon)}</span>
          <h3>${fmt(escape(it.title))}</h3>
          <p>${fmt(escape(it.body))}</p>
        </article>
      `).join("");
    }
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
