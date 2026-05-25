/* ----------------------------------------------------------------------------
   icons.js  —  Shared inline-SVG icon library.
   Used by index.html (Why Hire Me) and case-study.js (How I Fix, Why Hire Me).
   Each icon uses currentColor stroke so it inherits its parent's color.
   ---------------------------------------------------------------------------- */
window.SVG_ICONS = {
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
window.renderIcon = (key) => (window.SVG_ICONS && window.SVG_ICONS[key]) || (window.SVG_ICONS && window.SVG_ICONS.spark) || "";
