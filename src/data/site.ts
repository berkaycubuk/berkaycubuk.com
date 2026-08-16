// Single source of truth for site-wide names, titles and SEO copy.
// Edit here and every page, meta tag, JSON-LD block and the RSS feed follow.

import moment from 'moment';

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
  title: "Berkay Çubuk — Monitoring & Internal Software",
  description:
    "Monitoring and internal software for companies with machines in the field. Fixed price, delivered in two weeks, and it keeps running without me.",

  // Homepage copy and metadata live in src/i18n/home.ts, one entry per language.
} as const;

// "About — Berkay Çubuk"-style titles for inner pages
export function pageTitle(title: string): string {
  return `${title} — ${SITE.name}`;
}

// Notes live at /notes/YYYY/MM/DD/<slug>. The date is pinned to +03:00 so the
// URL doesn't shift when the build runs on a machine in another timezone.
export function notePath(date: Date, slug: string): string {
  return `/notes/${moment(date).utcOffset('+03:00').format('YYYY/MM/DD')}/${slug}`;
}

// Notes may omit a title; feeds, meta tags and JSON-LD still need one.
export function noteFallbackTitle(date: Date): string {
  return `Note — ${moment(date).utcOffset('+03:00').format('MMM DD, YYYY')}`;
}
