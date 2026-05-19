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
      "Performance Media Buyer with 3+ years scaling e-commerce brands across Google, Meta, and Bing Ads. $2M+ in tracked revenue generated.",
    ogImage: "assets/og-image.jpg",
    siteUrl: "https://ernest-media-buying.netlify.app",
    author: "Ernest Mutwiri",
  },

  /* ---- NAV ---------------------------------------------------------------- */
  nav: {
    brand: "Ernest Mutwiri",
    links: [
      { label: "About",          href: "#about" },
      { label: "Results",        href: "#results" },
      { label: "Services",       href: "#services" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact",        href: "#contact" },
    ],
  },

  /* ---- HERO --------------------------------------------------------------- */
  hero: {
    eyebrow: "Performance Media Buyer · Nairobi, Kenya",
    heading: "Scaling E-commerce Brands with Profitable Paid Ads",
    subheading:
      "3+ years driving $2M+ in tracked revenue across Google, Meta & Bing Ads.",
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
      "I'm a results-driven Media Buyer based in Nairobi, Kenya, with 3+ years of hands-on experience scaling 6 to 8-figure e-commerce and direct-response brands. My specialty is making paid advertising profitable — combining data, consumer psychology, and disciplined testing to turn ad spend into predictable revenue.",
      "I've managed monthly budgets exceeding **$100K** across Google Ads (Search, Shopping, Performance Max, YouTube, Display), Meta Ads (Facebook & Instagram), and Bing Ads — scaling one account from **$40K to $200K per month** while generating over **$2M in attributable sales**. I thrive in collaborative teams, take ownership of partner outcomes, and obsess over the metrics that move businesses forward.",
    ],
  },

  /* ---- RESULTS / EXPERIENCE ---------------------------------------------- */
  results: {
    heading: "Results & Experience",
    subheading: "Real numbers from real campaigns.",
    cards: [
      {
        company: "Red Rag Marketing",
        role: "Media Buyer",
        dates: "Jan 2024 – Dec 2025",
        achievements: [
          "Managed monthly Google Ads spend of **$100,000+** across multiple e-commerce partner accounts.",
          "Scaled one partner account from **$40K/month to $200K/month**, generating **$2M+** in attributable revenue.",
          "Improved average **ROAS by 40–70%** through structured A/B testing and audience signal refinement.",
          "Built and optimized **Performance Max** campaigns through asset group analysis and audience signal layering.",
        ],
      },
      {
        company: "AdScale Marketing Agency",
        role: "Media Buyer (Part-Time)",
        dates: "Sep 2024 – Dec 2025",
        achievements: [
          "Directed **$100K+** in ad spend across Shopping and Search at an average **3.6 ROAS**.",
          "A/B tested ad creative and refined targeting, driving a **30% increase in impressions**.",
          "Implemented **GA4** and **Google Tag Manager** conversion tracking for reliable attribution.",
          "Lifted Search Impression Share via strategic keyword expansion and Quality Score improvements.",
        ],
      },
      {
        company: "Up Media",
        role: "Media Buyer",
        dates: "Feb 2024 – Dec 2024",
        achievements: [
          "Managed multi-country Google & Bing Ads campaigns across **US, UK, AU, and NZ** markets.",
          "Reduced average **CPC by 25%+** through keyword restructuring and negative keyword strategies.",
          "Used **Google Ads Editor** for bulk campaign builds and large-scale account restructures.",
          "Recovered disapproved Merchant Center products and lifted overall feed quality scores.",
        ],
      },
      {
        company: "Rocket Digital Marketing",
        role: "Media Buyer",
        dates: "Jul 2023 – Jan 2024",
        achievements: [
          "Managed Search and Display campaigns for small-to-medium e-commerce and service businesses.",
          "Executed A/B tests on ad copy and landing pages, driving consistent lead-volume growth.",
          "Conducted keyword research and competitor audits to inform bid, ad copy, and landing page direction.",
        ],
      },
    ],
  },

  /* ---- SERVICES ----------------------------------------------------------- */
  services: {
    heading: "What I Do",
    subheading: "Full-funnel paid media management built around your margins.",
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
        description: "Facebook & Instagram campaigns with creative testing and audience strategy.",
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
    subheading: "My approach to scaling paid media profitably.",
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

  /* ---- CERTIFICATIONS ----------------------------------------------------- */
  certifications: {
    heading: "Certifications",
    subheading: "Continuously sharpening the craft.",
    items: [
      { name: "Google Ads Search Certification",            issuer: "Skillshop" },
      { name: "Google Ads Display Certification",           issuer: "Skillshop" },
      { name: "Google Ads Shopping Certification",          issuer: "Skillshop" },
      { name: "Google Ads Video (YouTube) Certification",   issuer: "Skillshop" },
      { name: "Advanced Google Ads & Direct Response",      issuer: "Udemy"     },
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
      "GA4",
      "Google Tag Manager",
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
    subheading: "Available for full-time media buying roles and freelance projects.",
    email:    "ernestkinyua.marketing@gmail.com",
    phone:    "+254 720 262 499",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/ernest-mutwiri-5393003a9",
    form: {
      nameLabel:    "Your name",
      emailLabel:   "Your email",
      messageLabel: "How can I help?",
      submitLabel:  "Send message",
    },
  },

  /* ---- FOOTER ------------------------------------------------------------- */
  footer: {
    copyright: "© 2026 Ernest Mutwiri. All rights reserved.",
    note:      "Built with care in Nairobi, Kenya.",
  },

  /* ==========================================================================
     CASE STUDIES — content for the dedicated channel pages
     (google-ads.html, meta-ads.html, bing-ads.html)
     Replace placeholders in [SQUARE BRACKETS] with your real numbers & stories.
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
      subheading: "Facebook & Instagram campaigns with disciplined creative testing, sharp audience strategy, and a clean signal stack.",
      headlineMetrics: [
        { value: "Full-Funnel", label: "Campaign Strategy" },
        { value: "Pixel + CAPI", label: "Tracking Stack" },
        { value: "Daily",       label: "Optimization Cadence" },
      ],
      studies: [
        {
          title:  "[FILL IN: Headline like “Lifting Purchase ROAS 2.1x on a Stagnant Apparel Account”]",
          client: "[FILL IN: Brand name or “Confidential apparel brand”]",
          period: "[FILL IN: e.g. Mar 2024 – Sep 2024]",
          challenge:
            "[FILL IN: Describe what the account looked like when you took it over — flat ROAS, weak creative, no testing structure, broken tracking, etc.]",
          approach: [
            "Rebuilt **Meta Pixel + Conversions API (CAPI)** tracking to recover signal lost to iOS 14.5+ and ad blockers.",
            "Set up a **weekly creative testing system** — 3–5 net-new concepts per week, isolated in dedicated test ad sets with strict budget caps.",
            "Restructured audiences around **broad targeting with creative as the targeting lever**, layering interest tests only for validation.",
            "[FILL IN: Any specific tactic that worked — UGC creative, advantage+ shopping, retargeting funnel, etc.]",
          ],
          results: [
            { value: "[X.X]",   label: "Purchase ROAS" },
            { value: "[+XX%]",  label: "CTR lift" },
            { value: "[-XX%]",  label: "CPA reduction" },
          ],
        },
        {
          title:  "[FILL IN: A creative-testing or scaling story]",
          client: "[FILL IN]",
          period: "[FILL IN]",
          challenge:
            "[FILL IN: The situation — e.g., creative fatigue at scale, audience saturation, CPMs climbing, etc.]",
          approach: [
            "[FILL IN: What you did — describe the creative testing process, hooks tested, formats used (Reels, Stories, Feed), etc.]",
            "[FILL IN: Audience strategy — broad vs. interest, retargeting funnel, exclusions, etc.]",
            "[FILL IN: Optimization decisions — budget scaling rules, killing rules, refresh cadence.]",
          ],
          results: [
            { value: "[#]",  label: "Winning creative concepts" },
            { value: "[$X]", label: "Final CPA" },
            { value: "[X×]", label: "Spend scaled" },
          ],
        },
      ],
      tools: ["Meta Ads Manager", "Meta Pixel", "Conversions API (CAPI)", "Meta Events Manager", "Advantage+ Shopping", "Looker Studio"],
      closingPitch: {
        heading: "Looking to scale Meta profitably?",
        subheading: "From creative testing systems to full-funnel restructures — let's get your Meta account compounding.",
        ctaLabel: "Start a conversation",
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
            { value: "-25%", label: "Avg. CPC vs. equivalent Google campaigns" },
            { value: "4",    label: "Markets managed" },
            { value: "[+XX%]", label: "Incremental revenue (fill in real %)" },
          ],
        },
        {
          title:  "[FILL IN: Second Bing case study — e.g., Shopping campaigns, a specific market win, or CPL reduction story]",
          client: "[FILL IN]",
          period: "[FILL IN]",
          challenge:
            "[FILL IN: The situation — e.g., Bing was treated as an afterthought, no real strategy, low spend, untested.]",
          approach: [
            "[FILL IN: What you did differently for Bing — keyword strategy, ad copy adapted for the Bing demographic, etc.]",
            "[FILL IN: Tracking and attribution work.]",
            "[FILL IN: Scaling decisions.]",
          ],
          results: [
            { value: "[X.X]",  label: "ROAS" },
            { value: "[$X]",   label: "CPL or CPA" },
            { value: "[+XX%]", label: "Revenue lift" },
          ],
        },
      ],
      tools: ["Microsoft Ads", "Microsoft Ads Editor", "UET Tag", "Microsoft Merchant Center", "GA4", "Looker Studio"],
      closingPitch: {
        heading: "Stop leaving Bing money on the table.",
        subheading: "If you're scaling on Google, Microsoft Ads is the cheapest incremental channel you're probably ignoring. Let's fix that.",
        ctaLabel: "Start a conversation",
      },
    },
  },
};

window.SITE_CONTENT = SITE_CONTENT;
