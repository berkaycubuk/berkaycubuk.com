// Client work shown on /work and /tr/work. The first cases reuse the homepage's
// case-study copy (src/i18n/home.ts) so the pages can't drift apart; add new
// clients to both languages below them.
import type { ImageMetadata } from 'astro';
import { HOME, type Locale } from '../i18n/home';
import isbusyPhoto from '../assets/work/isbusy_co_photo.jpg';
import { symbiosisPhotos } from './symbiosis';

export interface Case {
  client: string;
  tags: readonly string[];
  title: string;
  problem: string;
  built: string;
  result: string;
  link?: { label: string; href: string };
  // The first image is shown large, the rest in a grid below it.
  images?: { src: ImageMetadata; alt: string }[];
}

// Page copy around the cases, one entry per language.
export const WORK = {
  en: {
    path: '/work',
    eyebrow: 'CLIENT WORK',
    title: 'Work',
    lede: "Problems I've solved for clients, from the factory floor to a gallery.",
    description: 'Client work: custom devices, sensors and the software behind them, built for factories, workshops and studios.',
  },
  tr: {
    path: '/tr/work',
    eyebrow: 'MÜŞTERİ İŞLERİ',
    title: 'İşler',
    lede: 'Fabrika katından sanat galerisine, müşterilerim için çözdüğüm sorunlar.',
    description: 'Müşteri işleri: fabrikalar, atölyeler ve stüdyolar için yaptığım özel cihazlar, sensörler ve arkasındaki yazılım.',
  },
} satisfies Record<Locale, unknown>;

function casesFor(lang: Locale): Case[] {
  const { isbusy, art } = HOME[lang];
  return [
    { ...isbusy, images: [{ src: isbusyPhoto, alt: isbusy.stripAlts[2] }] },
    {
      ...art,
      link: { label: art.link, href: 'https://artresearch.tech/work/symbiosis/' },
      images: symbiosisPhotos.map((src, i) => ({ src, alt: art.stripAlts[i] })),
    },
  ];
}

export const CASES: Record<Locale, Case[]> = { en: casesFor('en'), tr: casesFor('tr') };
