// Single source of truth for site-wide names, titles and SEO copy.
// Edit here and every page, meta tag, JSON-LD block and the RSS feed follow.

export const SITE = {
  // Person / brand
  name: 'Berkay Çubuk',
  // ASCII variant for meta tags, JSON-LD and feeds
  nameAscii: 'Berkay Cubuk',
  url: 'https://berkaycubuk.com',

  // Public profiles, used as JSON-LD sameAs so search/AI engines can
  // connect this site to the same person elsewhere
  socials: [
    'https://github.com/berkaycubuk',
    'https://x.com/brkycubuk',
    'https://linkedin.com/in/berkaycubuk',
  ],

  // Site identity: RSS feed, og:site_name and the fallback <title>/description
  title: "Berkay Çubuk — Internal Tools, Dashboards & Automations",
  description:
    "I build internal tools, dashboards and automations. You work directly with me, and what I hand off keeps running without me.",

  // Homepage SEO
  home: {
    title: 'Berkay Çubuk — Internal Tools, Dashboards & Automations',
    description:
      'I build internal tools, dashboards and automations. You work directly with me, and what I hand off keeps running without me.',
    // Third-person variant for the WebSite JSON-LD block
    jsonLdDescription:
      'I build internal tools, dashboards and automations. You work directly with me, and what I hand off keeps running without me.',
  },
} as const;

// "About — Berkay Çubuk"-style titles for inner pages
export function pageTitle(title: string): string {
  return `${title} — ${SITE.name}`;
}
