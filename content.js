/* ----------------------------------------------------------------------------
   content.js  —  All site copy and data live here.
   Edit this file to update text, metrics, roles, certifications, etc.
   No need to touch index.html or styles.css for content changes.
   Wrap any text in **double asterisks** to make it bold (works in bullets).
   ---------------------------------------------------------------------------- */

const SITE_CONTENT = {

  /* ---- SEO / META --------------------------------------------------------- */
  meta: {
    title: "Ernest Mutwiri — Performance Media Buyer | Google, Meta & Bing Ads",
    description:
      "Performance Media Buyer with 3+ years scaling e-commerce and lead-generation brands across Google, Meta, and Bing Ads. $2M+ in tracked revenue and qualified leads delivered.",
    ogImage: "assets/og-image.jpg",
    siteUrl: "https://ernest-media-buying.netlify.app",
    author: "Ernest Mutwiri",
  },

  /* ---- NAV ---------------------------------------------------------------- */
  nav: {
    brand: "Ernest Mutwiri",
    links: [
      { label: "About",    href: "#about" },
      { label: "Results",  href: "#results" },
      { label: "Services", href: "#services" },
      { label: "Products", href: "#apps" },
      { label: "Contact",  href: "#contact" },
    ],
  },

  /* ---- HERO --------------------------------------------------------------- */
  hero: {
    eyebrow: "Performance Media Buyer · Nairobi, Kenya",
    heading: "Profitable Paid Media for E-commerce & Lead-Gen Brands",
    subheading:
      "3+ years scaling Google, Meta & Bing Ads past **$100K/month** — **$2M+ in tracked revenue** and qualified leads delivered.",
    ctaPrimary:   { label: "View My Results", href: "#results" },
    ctaSecondary: { label: "Get In Touch",    href: "#contact" },
    profileImage: { src: "assets/profile.jpg", alt: "Ernest Mutwiri, Performance Media Buyer" },
  },

  /* ---- METRICS BAR -------------------------------------------------------- */
  metrics: [
    { value: "$2M+",   label: "Revenue Generated" },
    { value: "$100K+", label: "Monthly Ad Spend Managed" },
    { value: "40–70%", label: "Average ROAS Improvement" },
    { value: "3+ Yrs", label: "Paid Media Experience" },
  ],

  /* ---- ABOUT -------------------------------------------------------------- */
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a results-driven Media Buyer based in Nairobi, Kenya, with **3+ years** of hands-on experience scaling **6 to 8-figure Shopify e-commerce and lead-generation brands** across the US, UK, AU, and NZ markets. My specialty is making paid advertising profitable across **Google, Meta, and Bing Ads** — combining data, consumer psychology, and disciplined testing to turn ad spend into predictable revenue and qualified pipeline.",
      "I've managed monthly budgets exceeding **$100K** across **Google Ads** (Search, Shopping, Performance Max, YouTube, Display), **Meta Ads** (Facebook & Instagram prospecting, retargeting, retention), and **Bing Ads** — scaling one account from **$40K to $200K per month** while generating over **$2M in attributable revenue**. I work natively across the modern e-commerce stack — **Shopify, GA4, Triple Whale, Meta Pixel + CAPI, and Looker Studio** — and stay direct-response trained: every test runs against **ROAS, CPA, MER, and AOV**, never vanity metrics.",
    ],
  },

  /* ---- RESULTS / EXPERIENCE ---------------------------------------------- */
  results: {
    heading: "Results & Experience",
    subheading: "Real numbers from real campaigns across Google, Meta, and Bing Ads.",
    cards: [
      {
        company: "Red Rag Marketing",
        role: "Performance Media Buyer (Meta & Google Ads)",
        dates: "Jan 2024 – Dec 2025",
        achievements: [
          "Managed paid acquisition across **Meta and Google Ads** for a portfolio of **Shopify e-commerce clients** — coordinating prospecting on Meta with lower-funnel demand capture on Google.",
          "Ran **Meta campaigns on Facebook and Instagram** covering prospecting, retargeting, and retention — using lookalike, interest, and first-party audience strategies; diagnosed creative fatigue from CTR / frequency / hook-rate trends.",
          "Managed **$100K+ in monthly cross-channel ad spend** and generated **$2M+ in attributable revenue**; scaled Google accounts from **$40K to $200K+/month** while preserving ROAS efficiency.",
          "Owned the measurement layer across both channels: **GA4, GTM, Meta Pixel, Conversions API**, and **Triple Whale** for cross-channel MER reporting.",
          "Built structured **creative testing frameworks** — testing hooks, offers, formats (static / video / carousel), and landing pages — documented against **ROAS and CPA** primary metrics.",
        ],
      },
      {
        company: "AdScale Marketing Agency",
        role: "Performance Media Buyer (Part-Time)",
        dates: "Sep 2024 – Dec 2025",
        achievements: [
          "Ran **paid social and paid search campaigns** for **e-commerce and lead-gen clients** — including Meta prospecting and retargeting structures alongside Google Search and Shopping.",
          "Directed **$100K+** in ad spend at an average **ROAS of 3.6**, with weekly bid and budget adjustments based on conversion-rate signals and **MER trends**, not vanity metrics.",
          "Implemented full conversion tracking — **GA4, GTM, Meta Pixel, and Conversions API** — validating event accuracy against Shopify backend data before scaling spend.",
          "Built **Looker Studio reporting dashboards** for weekly cross-channel performance read-outs surfacing ROAS, CPA, CTR, and revenue trends with actionable narrative.",
          "Lifted impressions **30%** via A/B-tested creative variants and refined targeting.",
        ],
      },
      {
        company: "Up Media",
        role: "Media Buyer",
        dates: "Feb 2024 – Dec 2024",
        achievements: [
          "Managed **multi-country Shopping and Search campaigns** across **US, UK, AU, and NZ** markets — coordinating Merchant Center feeds, ad creative, and landing-page variants by market and currency.",
          "Reduced average **CPC by 25%+** through keyword restructuring, match-type discipline, and aggressive negative-keyword strategies.",
          "Used **Google Ads Editor** for bulk campaign builds and account restructures at scale while maintaining naming-convention and tracking accuracy.",
          "Recovered disapproved **Merchant Center products** through feed remediation and policy compliance — restoring Shopping eligibility and recovering lost revenue.",
          "Ran seasonal promotional and gifting campaigns with offer-aligned ad copy and dedicated landing pages, delivering measurable conversion and **AOV lifts**.",
        ],
      },
      {
        company: "Rocket Digital Marketing",
        role: "Media Buyer · promoted from Junior Digital Marketer",
        dates: "Feb 2023 – Jan 2024",
        achievements: [
          "Managed **Search and Display campaigns** for SMB **e-commerce and lead-generation clients**, exceeding KPIs through page-level and creative optimisation.",
          "Implemented **A/B tests on ad copy and landing pages**, driving consistent conversion lift for both service and product clients.",
          "Conducted keyword research and competitor audits to inform bidding strategy and on-page recommendations.",
          "Translated campaign data into client-ready reports with plain-English narratives and next-step priorities.",
          "Built foundations in account structuring, conversion tracking, and analytics (**GA4, GTM**) during junior role before being promoted.",
        ],
      },
    ],
  },

  /* ---- SERVICES ----------------------------------------------------------- */
  services: {
    heading: "What I Do",
    subheading: "Full-funnel paid media management across Google, Meta & Bing — built around your margins, ROAS targets, and lead-quality goals.",
    items: [
      {
        icon: "🎯",
        title: "Google Ads Management",
        description: "Search, Shopping, Performance Max, YouTube, Display — built for profitable scale.",
        link: "google-ads.html", // <- clickable; opens dedicated case-study page
      },
      {
        icon: "📱",
        title: "Meta Ads Management",
        description: "Full-funnel Facebook & Instagram campaigns — prospecting, retargeting, retention — with creative testing and Pixel + CAPI tracking.",
        link: "meta-ads.html",
      },
      {
        icon: "🔎",
        title: "Bing Ads Management",
        description: "Multi-market Search campaign management on Microsoft Ads.",
        link: "bing-ads.html",
      },
      {
        icon: "📊",
        title: "Conversion Tracking Setup",
        description: "GA4, Google Tag Manager, and Meta Pixel implementation for clean attribution.",
      },
      {
        icon: "🛒",
        title: "Merchant Center & Feed Optimization",
        description: "DataFeedWatch, custom labels, and feed segmentation to win Shopping.",
      },
      {
        icon: "🧭",
        title: "Account Audits & Strategy",
        description: "Deep account audits with actionable, prioritized scaling recommendations.",
      },
    ],
  },

  /* ---- METHODOLOGY -------------------------------------------------------- */
  methodology: {
    heading: "How I Work",
    subheading: "My approach to scaling paid media profitably — whether the goal is e-commerce revenue or qualified leads.",
    steps: [
      {
        number: "01",
        title: "Audit & Diagnose",
        description: "Deep account audit, conversion tracking validation, identifying leaks.",
      },
      {
        number: "02",
        title: "Strategize",
        description: "Build a scaling roadmap based on data, margins, and business goals.",
      },
      {
        number: "03",
        title: "Test & Optimize",
        description: "Structured A/B testing on creative, audiences, bidding, and landing pages.",
      },
      {
        number: "04",
        title: "Scale & Report",
        description: "Disciplined budget scaling with transparent weekly reporting.",
      },
    ],
  },

  /* ---- APPS / PRODUCTS I'VE BUILT ---------------------------------------- */
  apps: {
    heading: "Products I've Built",
    subheading: "Tools I built to streamline my own media buying workflow — both are live and clickable.",
    items: [
      {
        name:        "AdPilot OS",
        tagline:     "Media Buyer Suite",
        screenshot:  "assets/apps/adpilot.jpg",
        url:         "https://ad-pilot-os.vercel.app/dashboard",
        description: "A media buyer's command center that unifies Meta and Google Ads campaign planning, AI copy generation, audio transcription, and campaign monitoring in one workspace.",
        audience:    "Solo media buyers and small agency teams running both Meta and Google Ads.",
        features: [
          "**Multi-platform campaign planning** — Meta Generator, Google Campaign Planner (Search / PMAX / Demand Gen with CSV export), and Audience Pack builder.",
          "**AI-powered creative tools** — audio-to-ad-copy via Whisper, A/B variant rewrites, persona builder, and policy checker for Meta and Google violations.",
          "**Live campaign monitoring** — Meta and Google monitors with AI insights, budget pacing alerts, and Slack webhook notifications.",
        ],
        ctaLabel: "Try live demo →",
      },
      {
        name:        "The Meridian",
        tagline:     "Multi-Platform Media Hub",
        screenshot:  "assets/apps/meridian.png",
        url:         "https://ads-dashboard-rho.vercel.app/login",
        description: "A multi-account Google Ads and Meta Ads reporting dashboard that gives agencies a live MCC-wide view of spend, conversions, and campaign performance across every client account.",
        audience:    "Agencies and media buyers managing a portfolio of client accounts (MCC setup).",
        features: [
          "**Per-client spend cards + aggregated MCC totals** — total spend, impressions, clicks, conversions, average CPC, and budget pacing across all accounts in one view.",
          "**Performance trend chart** with toggleable metrics (Spend, Clicks, Impressions, Conversions, CTR, CPC) over selectable date ranges.",
          "**Campaign-level table** with sort/filter (active vs paused), 12 configurable columns, and search across all campaigns in the portfolio.",
        ],
        ctaLabel: "Try live demo →",
      },
    ],
  },

  /* ---- TOOLS -------------------------------------------------------------- */
  tools: {
    heading: "Tools I Use Daily",
    subheading: "The stack behind the work.",
    items: [
      "Google Ads",
      "Meta Ads Manager",
      "Microsoft Ads",
      "Shopify",
      "GA4",
      "Google Tag Manager",
      "Meta Pixel + CAPI",
      "Triple Whale",
      "Google Merchant Center",
      "DataFeedWatch",
      "Google Ads Editor",
      "Looker Studio",
      "Slack",
      "Zoom",
    ],
  },

  /* ---- CONTACT ------------------------------------------------------------ */
  contact: {
    heading: "Let's Work Together",
    subheading: "Available for full-time media buying roles and freelance projects across Google, Meta & Bing Ads — both e-commerce and lead generation.",
    email:    "ernestkinyua.marketing@gmail.com",
    phone:    "+254 720 262 499",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/ernest-mutwiri-5393003a9",
  },

  /* ---- FOOTER ------------------------------------------------------------- */
  footer: {
    copyright: "© 2026 Ernest Mutwiri. All rights reserved.",
    note:      "Built with care in Nairobi, Kenya.",
  },

  /* ==========================================================================
     CASE STUDIES — content for the dedicated channel pages
     (google-ads.html, meta-ads.html, bing-ads.html)
     ========================================================================== */
  caseStudies: {

    /* ------------------------------------------------------------------ */
    /*  GOOGLE ADS                                                        */
    /* ------------------------------------------------------------------ */
    googleAds: {
      slug:    "google-ads",
      channel: "Google Ads",
      meta: {
        title:       "Google Ads Case Studies — Ernest Mutwiri",
        description: "Real Google Ads case studies: scaling e-commerce accounts from $40K to $200K/month, 40–70% ROAS lifts, Performance Max, Shopping, and Search.",
      },
      eyebrow:    "Case Studies · Google Ads",
      heading:    "Profitable Google Ads at Scale",
      subheading: "Search, Shopping, Performance Max, YouTube & Display campaigns that turn ad budgets into predictable revenue.",
      headlineMetrics: [
        { value: "$2M+",   label: "Revenue Generated" },
        { value: "$100K+", label: "Monthly Spend Managed" },
        { value: "40–70%", label: "Avg. ROAS Improvement" },
      ],
      studies: [
        {
          title:  "Scaling an E-commerce Account from $40K to $200K/Month",
          client: "Confidential e-commerce brand · via Red Rag Marketing",
          period: "Jan 2024 – Dec 2025",
          challenge:
            "The account had plateaued at ~$40K/month with inconsistent ROAS. Performance Max was burning spend on low-intent traffic, the Shopping feed had structural gaps limiting reach, and conversion tracking had attribution holes that masked which campaigns actually drove sales.",
          approach: [
            "Rebuilt conversion tracking through **GA4 + Google Tag Manager** to capture every revenue event reliably.",
            "Restructured **Performance Max** asset groups by product margin tier and layered in audience signals (customer match, in-market, lookalikes).",
            "Segmented the Shopping feed with **custom labels** (margin, bestseller, seasonality) and routed budget toward the highest-margin SKUs.",
            "Ran disciplined **weekly A/B tests** on creative, audiences, and landing pages — keeping winners, killing losers, never both at once.",
            "Scaled budget in **20–30% weekly increments** tied to ROAS thresholds, with daily anomaly checks to catch performance drift early.",
          ],
          results: [
            { value: "$2M+", label: "Attributable revenue" },
            { value: "5×",    label: "Spend scaled ($40K → $200K)" },
            { value: "40–70%", label: "ROAS improvement" },
          ],
          // screenshot: "assets/case-studies/google-1.jpg", // optional — drop image in and uncomment
        },
        {
          title:  "Hitting 3.6 ROAS Across Shopping & Search at Scale",
          client: "AdScale Marketing Agency partner account",
          period: "Sep 2024 – Dec 2025",
          challenge:
            "Partner account needed to scale Shopping and Search spend past **$100K/month** without sacrificing ROAS. Existing campaigns had wasted impressions, weak Quality Scores, and inconsistent conversion tracking.",
          approach: [
            "Implemented full-funnel **GA4 + GTM** conversion tracking and validated every event end-to-end.",
            "Restructured Search campaigns by intent (brand, generic, competitor, long-tail) to control bids more precisely.",
            "Expanded keyword coverage and improved ad relevance to lift **Quality Score** and Impression Share.",
            "A/B tested ad creative weekly — RSAs with pinned headlines vs. unpinned, asset variations, and extension combinations.",
          ],
          results: [
            { value: "3.6",  label: "Average ROAS" },
            { value: "$100K+", label: "Monthly spend directed" },
            { value: "+30%", label: "Impressions vs. baseline" },
          ],
        },
        {
          title:  "Cutting Average CPC 25%+ Across US, UK, AU & NZ Markets",
          client: "Multi-market e-commerce client · via Up Media",
          period: "Feb 2024 – Dec 2024",
          challenge:
            "Multi-country Google Ads account was bleeding budget on irrelevant clicks. Average CPCs were rising, Merchant Center had product disapprovals choking Shopping reach, and there was no consistent negative keyword strategy across markets.",
          approach: [
            "Built a **shared negative keyword library** synced across all 4 markets via Google Ads Editor.",
            "Restructured campaigns by **country + match type** to enforce cleaner bid logic.",
            "Resolved Merchant Center product disapprovals and improved feed quality scores via **DataFeedWatch** rules.",
            "Used **Google Ads Editor** for bulk restructures and large-scale account changes without disrupting live performance.",
          ],
          results: [
            { value: "-25%", label: "Avg. CPC reduction" },
            { value: "4",    label: "Markets managed (US, UK, AU, NZ)" },
            { value: "100%", label: "Merchant Center recovery" },
          ],
        },
      ],
      tools: [
        "Google Ads", "Google Ads Editor", "Performance Max", "GA4",
        "Google Tag Manager", "Google Merchant Center", "DataFeedWatch", "Looker Studio",
      ],
      closingPitch: {
        heading: "Need this kind of result for your account?",
        subheading: "Whether you're scaling past $100K/month or just need an account that actually pays for itself — let's talk.",
        ctaLabel: "Start a conversation",
      },
      howIFix: {
        eyebrow: "Approach",
        heading: "How I Fix Google Ads — For Good.",
        subheading: "Whether the account is bleeding money or stuck at a plateau, the fix isn't more testing. It's building the right foundation from Day One.",
        items: [
          { icon: "foundation", title: "Conversion Tracking First",
            body: "GA4, GTM and server-side events validated end-to-end before a dollar moves. No tracking, no scaling." },
          { icon: "shield",     title: "Brand vs Non-Brand Discipline",
            body: "Branded and prospecting campaigns kept on separate tracks with negative keyword libraries. Clean data, accurate ROAS per intent." },
          { icon: "layers",     title: "Feed Engineering, Not Just Bidding",
            body: "Most Shopping accounts lose money in the feed, not the campaign. Title structure, custom labels, hero-product duplication, DataFeedWatch rules." },
          { icon: "target",     title: "Performance Max Without the Black Box",
            body: "Asset groups segmented by margin, audience signals layered in, sensitive placements excluded. PMax stops torching budget on noise." },
          { icon: "compass",    title: "Intent-Aligned Search Architecture",
            body: "Match types map to funnel stage. Phrase and Exact at the bottom funnel. Weekly search-term and negative-keyword discipline." },
          { icon: "chart",      title: "Scaling on Disciplined Cycles",
            body: "20–40% bi-weekly budget moves tied to ROAS thresholds. Optimization → push → stabilize → repeat. Never spray-and-pray." },
        ],
      },
      process: {
        eyebrow: "Methodology",
        heading: "From Onboarding to Scale — In 4 Phases",
        subheading: "A repeatable framework I run on every account I take on. Adjusted in execution, never in principle.",
        phases: [
          { number: "01", name: "Audit & Foundation", weeks: "Weeks 0–2", bullets: [
            "Conversion tracking validated end-to-end (GA4 + GTM + server-side where needed)",
            "Account audit: structure, negatives, audiences, exclusions",
            "ICP refresh and Customer Match list automation",
            "Asset inventory: sitelinks, callouts, snippets, images, promotions",
          ]},
          { number: "02", name: "Restructure & Launch", weeks: "Weeks 1–4", bullets: [
            "Campaign architecture: branded vs prospecting, intent-aligned ad groups",
            "Shopping feed engineering: titles, custom labels, hero duplication",
            "Negative keyword + PMax exclusion libraries deployed",
            "Baseline metrics locked: Spend, CPA, CPC, CTR per campaign",
          ]},
          { number: "03", name: "Optimize & Validate", weeks: "Weeks 4–8", bullets: [
            "Search-term cleaning and match-type discipline",
            "PMax asset groups and audience signals refined weekly",
            "Competitor research via SEMRUSH and auction insights",
            "Bidding strategy experiments and TOFU expansion tests",
          ]},
          { number: "04", name: "Scale Profitably", weeks: "Week 8+", bullets: [
            "20–40% bi-weekly budget cycles tied to ROAS thresholds",
            "New campaign and category launches based on data",
            "Landing page and offer-angle testing",
            "Reporting cadence and recurring review locked in",
          ]},
        ],
      },
    },

    /* ------------------------------------------------------------------ */
    /*  META ADS                                                          */
    /* ------------------------------------------------------------------ */
    metaAds: {
      slug:    "meta-ads",
      channel: "Meta Ads",
      meta: {
        title:       "Meta Ads Case Studies — Ernest Mutwiri",
        description: "Meta Ads case studies covering Facebook & Instagram campaigns, creative testing systems, audience strategy, and full-funnel scaling for e-commerce brands.",
      },
      eyebrow:    "Case Studies · Meta Ads",
      heading:    "Meta Ads Built for E-commerce Margins",
      subheading: "Full-funnel Facebook & Instagram campaigns — prospecting, retargeting, retention — with disciplined creative testing and a clean iOS-resilient signal stack.",
      headlineMetrics: [
        { value: "Shopify-Native", label: "E-commerce focus" },
        { value: "Pixel + CAPI",   label: "iOS-resilient tracking" },
        { value: "Full-Funnel",    label: "Prospecting · Retargeting · Retention" },
      ],
      studies: [
        {
          title:  "Improving Performance for a Struggling E-commerce Brand",
          client: "Shopify e-commerce brand · via Red Rag Marketing",
          period: "2024 – 2025",
          challenge:
            "The account was experiencing **inconsistent performance, weak tracking accuracy, and poor campaign structure**. Previous scaling attempts resulted in unstable results, and there was **no clear creative testing process** in place — making it impossible to identify what was actually working.",
          approach: [
            "Rebuilt the campaign structure to **separate testing, scaling, and retargeting** efforts — each layer with its own purpose and budget logic.",
            "Improved tracking setup through **Meta Pixel + Conversions API** integration, recovering signal lost to iOS 14.5+ and ad blockers.",
            "Introduced a **consistent creative testing workflow** with fresh creatives launched weekly against ROAS and CPA primary metrics.",
            "Shifted targeting strategy toward **broader audiences** while relying more on **creative messaging as the targeting lever** — not narrow interest stacking.",
            "Built **segmented retargeting campaigns** for website visitors, engaged users, and abandoned carts — with messaging tailored to funnel stage.",
            "Optimized placements and budget allocation based on campaign performance trends, not equal-weight defaults.",
          ],
          results: [
            { value: "Restructured", label: "Test · Scale · Retarget architecture" },
            { value: "Pixel + CAPI", label: "Tracking accuracy rebuilt" },
            { value: "Weekly",       label: "Creative testing cadence" },
            { value: "Reduced",      label: "Wasted spend from audience overlap" },
            { value: "Scalable",     label: "Foundation for long-term growth" },
          ],
        },
        {
          title:  "Scaling a Beauty Brand While Managing Creative Fatigue",
          client: "Beauty brand · via Red Rag Marketing",
          period: "2024 – 2025",
          challenge:
            "The brand faced **declining ad performance** driven by **creative fatigue and audience saturation**. Engagement rates had started dropping, and existing ads were no longer maintaining consistent results — classic late-stage scaling pain.",
          approach: [
            "Tested multiple **creative formats in parallel** — video ads, carousels, static creatives, and UGC-style content — to find what the audience would re-engage with.",
            "Focused on **stronger hooks and clearer messaging** within the first 3 seconds of every creative to combat thumb-stopping fatigue.",
            "Rotated creatives frequently and built a **structured refresh cadence** to maintain audience engagement.",
            "Tested multiple **messaging angles** — testimonials, benefits, transformations, and educational content — and let data, not opinion, pick winners.",
            "Used **broad targeting for prospecting** combined with **layered retargeting audiences** based on website engagement and customer behavior.",
            "**Excluded existing customers** from acquisition campaigns and tested interest-based audiences alongside broader strategies.",
            "Gradually **scaled budgets** once campaigns demonstrated stable performance; **paused underperformers** after sufficient data; shifted budget to high-performing ads and placements.",
          ],
          results: [
            { value: "4 formats",   label: "Tested (video / carousel / static / UGC)" },
            { value: "Stable",      label: "Engagement at higher spend" },
            { value: "Repeatable",  label: "Creative testing framework built" },
            { value: "Stronger",    label: "Retargeting performance and audience quality" },
            { value: "Long-term",   label: "Growth strategy established" },
          ],
        },
      ],
      tools: ["Meta Ads Manager", "Meta Pixel", "Conversions API (CAPI)", "Meta Events Manager", "Advantage+ Shopping", "Triple Whale", "Shopify", "Looker Studio"],
      closingPitch: {
        heading: "Looking to scale Meta profitably?",
        subheading: "From creative testing systems to full-funnel restructures — let's get your Meta account compounding.",
        ctaLabel: "Start a conversation",
      },
      howIFix: {
        eyebrow: "Approach",
        heading: "How I Fix Meta Ads — For Good.",
        subheading: "On Meta, the playbook isn't narrow targeting anymore. It's creative, signal quality, and scaling the things that actually work.",
        items: [
          { icon: "spark",      title: "Creative as the Lever",
            body: "On Meta, creative drives 80% of performance. 3–5 angles tested weekly, fatigued ads retired, winners scaled hard." },
          { icon: "layers",     title: "Audience Layering Without the Overlap",
            body: "Cold, lookalike, retargeting and broad — each in its own role. No cannibalization, clean attribution per audience." },
          { icon: "foundation", title: "CAPI + Pixel Redundancy",
            body: "Server-side conversions through Conversions API alongside the Pixel. iOS 14+ signal loss recovered through redundancy." },
          { icon: "compass",    title: "Funnel-Stage Bidding Logic",
            body: "Cost cap on cold, lowest cost on retargeting, manual bids on retention. Each stage gets the right control surface." },
          { icon: "users",      title: "UGC + Whitelisting Over Studio Polish",
            body: "Real customer creative beats studio shoots on Meta. Whitelisted through creator handles for trust and CPM relief." },
          { icon: "chart",      title: "Account-Wide Scaling Tests",
            body: "CBO with budget waterfalling, geo splits and offer-angle rotations. Scaling by testing — not by hope." },
        ],
      },
      process: {
        eyebrow: "Methodology",
        heading: "From Onboarding to Scale — In 4 Phases",
        subheading: "A repeatable framework I run on every Meta account I take on. Adjusted in execution, never in principle.",
        phases: [
          { number: "01", name: "Audit & Foundation", weeks: "Weeks 0–2", bullets: [
            "Pixel + CAPI tracking validated, server events confirmed",
            "Account audit: structure, audiences, creative inventory",
            "ICP and creative-angle library mapped",
            "Custom conversions and exclusion audiences set",
          ]},
          { number: "02", name: "Restructure & Launch", weeks: "Weeks 1–4", bullets: [
            "Test / Scale / Retarget architecture rebuilt",
            "Initial creative batch shipped: 3–5 angles, multiple formats",
            "Broad targeting with creative as the targeting lever",
            "Baseline metrics locked: Spend, CPA, ROAS, CTR per ad set",
          ]},
          { number: "03", name: "Optimize & Validate", weeks: "Weeks 4–8", bullets: [
            "Weekly creative refresh: kill losers, double winners",
            "Audience signal tests across broad, LAL, custom and retargeting",
            "Placement and budget rebalance on actual delivery data",
            "Funnel-stage bid strategy experiments",
          ]},
          { number: "04", name: "Scale Profitably", weeks: "Week 8+", bullets: [
            "CBO budget waterfalling tied to ROAS thresholds",
            "Geo splits and offer-angle rotations for incremental lift",
            "UGC and whitelisting tests for CPM relief at scale",
            "Reporting cadence and recurring creative briefs locked in",
          ]},
        ],
      },
    },

    /* ------------------------------------------------------------------ */
    /*  BING ADS / MICROSOFT ADS                                          */
    /* ------------------------------------------------------------------ */
    bingAds: {
      slug:    "bing-ads",
      channel: "Bing Ads",
      meta: {
        title:       "Bing Ads Case Studies — Ernest Mutwiri",
        description: "Microsoft Advertising (Bing Ads) case studies: multi-country Search campaigns, lower CPCs than Google, and profitable secondary-channel scaling.",
      },
      eyebrow:    "Case Studies · Bing Ads",
      heading:    "Bing Ads as a Profitable Secondary Channel",
      subheading: "Multi-market Search campaign management on Microsoft Ads — lower CPCs, less competition, real incremental revenue.",
      headlineMetrics: [
        { value: "4",     label: "Markets (US/UK/AU/NZ)" },
        { value: "-25%",  label: "Avg. CPC vs. Google" },
        { value: "Daily", label: "Account-level monitoring" },
      ],
      studies: [
        {
          title:  "Multi-Country Bing Search at Up Media",
          client: "Multi-market e-commerce client · via Up Media",
          period: "Feb 2024 – Dec 2024",
          challenge:
            "Client was running Google Ads across 4 markets but ignoring Microsoft Ads — leaving roughly **30% of search demand** untouched on a lower-CPC platform. Existing Bing imports from Google had duplicate keywords, no negatives, and broken tracking.",
          approach: [
            "Imported and **cleaned up** all 4 market campaigns — removed duplicate keywords, applied a unified negative keyword library, and rebuilt ad copy to match Bing user intent.",
            "Used **Microsoft Ads Editor** for bulk campaign builds, restructures, and cross-market changes without breaking live performance.",
            "Set up conversion tracking through **UET tags** and validated revenue attribution end-to-end.",
            "Tuned bids per market separately — what works in the US doesn't always work in AU/NZ.",
          ],
          results: [
            { value: "-25%",   label: "Avg. CPC vs. equivalent Google campaigns" },
            { value: "4",      label: "Markets managed (US, UK, AU, NZ)" },
            { value: "Cleaner", label: "Account hygiene: dedup keywords + negatives" },
          ],
        },
        {
          title:  "Building a Scalable Bing Ads Strategy for an E-commerce Brand",
          client: "Shopify e-commerce brand · Shopping & Search expansion",
          period: "2024 – 2025",
          challenge:
            "The Bing Ads account had very little strategic focus and was mainly treated as a **secondary platform behind Google Ads**. Campaigns had limited optimization, low testing volume, and weak audience segmentation. Shopping campaigns were **underutilized**, and reporting accuracy was inconsistent due to incomplete conversion tracking.",
          approach: [
            "Rebuilt the account structure to **separate branded, non-branded, and Shopping campaigns** for clearer optimization control.",
            "Optimized keyword targeting specifically for **Bing search behavior and demographic trends**.",
            "Adapted ad copy to match the **older, higher-intent Bing audience** using more direct, value-based messaging.",
            "Improved **product feed quality** for Shopping — refined titles, descriptions, and product categorization.",
            "Implemented **accurate conversion tracking** and attribution setup to improve reporting reliability.",
            "Introduced **audience layering and remarketing campaigns** to improve efficiency across returning users.",
            "Gradually **scaled budgets** toward campaigns showing the strongest conversion consistency and search-intent quality.",
            "Regularly reviewed **search term reports** to expand high-performing keywords and reduce wasted spend.",
          ],
          results: [
            { value: "Restructured", label: "Branded · Non-branded · Shopping separation" },
            { value: "Stronger",     label: "Shopping performance via feed optimization" },
            { value: "Improved",     label: "Lead quality and conversion consistency" },
            { value: "Higher",       label: "High-intent search visibility" },
            { value: "Scalable",     label: "Complement to existing Google Ads strategy" },
          ],
        },
      ],
      tools: ["Microsoft Ads", "Microsoft Ads Editor", "UET Tag", "Microsoft Merchant Center", "GA4", "Looker Studio"],
      closingPitch: {
        heading: "Stop leaving Bing money on the table.",
        subheading: "If you're scaling on Google, Microsoft Ads is the cheapest incremental channel you're probably ignoring. Let's fix that.",
        ctaLabel: "Start a conversation",
      },
      howIFix: {
        eyebrow: "Approach",
        heading: "How I Fix Bing Ads — For Good.",
        subheading: "Microsoft Ads isn't a 'just import from Google' channel. Done right, it's the cheapest incremental revenue most e-commerce brands are ignoring.",
        items: [
          { icon: "dollar",     title: "Capturing Underpriced Inventory",
            body: "Microsoft Ads averages 30–40% lower CPCs than Google for the same intent. Most brands aren't even testing it." },
          { icon: "shield",     title: "Search vs Audience Network Isolation",
            body: "Audience Network burns budget if left on default. Isolated into its own campaign with strict targeting and exclusions." },
          { icon: "target",     title: "LinkedIn Profile Targeting Edge",
            body: "Bing's exclusive lever. Target by job title, company and industry — unbeatable for B2B and high-AOV consumer brands." },
          { icon: "layers",     title: "Google Import + Bing-Native Optimization",
            body: "Import structure from Google, then optimize on Bing's logic: different match-type behavior, different audiences, different bids." },
          { icon: "spark",      title: "Shopping Campaigns at Lower Cost-Per-Sale",
            body: "Same product feed, cheaper traffic. Often the fastest first win for e-commerce on Microsoft Ads." },
          { icon: "compass",    title: "Demographic & Device Bid Modifiers",
            body: "Bing surfaces more demographic data than Google. Bid up where conversion rates are demonstrably 2–3× higher." },
        ],
      },
      process: {
        eyebrow: "Methodology",
        heading: "From Onboarding to Scale — In 4 Phases",
        subheading: "A repeatable framework I run on every Microsoft Ads account I take on. Adjusted in execution, never in principle.",
        phases: [
          { number: "01", name: "Audit & Foundation", weeks: "Weeks 0–2", bullets: [
            "UET tag and conversion tracking validated end-to-end",
            "Existing import from Google audited: dupes, negatives, structure",
            "Audience inventory: LinkedIn profile, in-market, custom",
            "Search vs Audience Network split confirmed",
          ]},
          { number: "02", name: "Restructure & Launch", weeks: "Weeks 1–4", bullets: [
            "Branded / Non-branded / Shopping separation enforced",
            "Microsoft Merchant Center feed cleaned and re-categorized",
            "Negative keyword library unified across markets",
            "Bing-tuned ad copy reflecting older, higher-intent audience",
          ]},
          { number: "03", name: "Optimize & Validate", weeks: "Weeks 4–8", bullets: [
            "Search-term reports reviewed weekly; new negatives added",
            "Per-market bid tuning (US/UK/AU/NZ behave differently)",
            "LinkedIn profile and audience overlays tested",
            "Demographic and device bid modifiers calibrated",
          ]},
          { number: "04", name: "Scale Profitably", weeks: "Week 8+", bullets: [
            "Budget scaling tied to CPA / ROAS stability per market",
            "Shopping expansion using best-performing search themes",
            "Remarketing layers introduced for returning visitors",
            "Reporting cadence and recurring review locked in",
          ]},
        ],
      },
    },
  },
};

window.SITE_CONTENT = SITE_CONTENT;
