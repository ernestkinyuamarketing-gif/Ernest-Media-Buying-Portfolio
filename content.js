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
      },
      {
        icon: "📱",
        title: "Meta Ads Management",
        description: "Facebook & Instagram campaigns with creative testing and audience strategy.",
      },
      {
        icon: "🔎",
        title: "Bing Ads Management",
        description: "Multi-market Search campaign management on Microsoft Ads.",
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
    linkedin: "#", // TODO: replace with your LinkedIn profile URL
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
};

window.SITE_CONTENT = SITE_CONTENT;
