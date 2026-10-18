// Work shown on /work and /tr/work. The AI cases reuse the homepage's
// case-study copy (src/i18n/home.ts) so the pages can't drift apart; the
// hardware and IoT client cases below live only here.
import type { ImageMetadata } from 'astro';
import { HOME, type Locale } from '../i18n/home';
import fabrikaShot from '../assets/work/fabrika_ai_screenshot.png';
import tamoShot from '../assets/work/tamo_screenshot.png';
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
    eyebrow: 'SELECTED WORK',
    title: 'Work',
    lede: 'AI agents and production systems, plus the hardware jobs that taught me to ship things that keep running.',
    description: 'Selected work: AI agents with guardrails, multi-agent tooling, production systems at a crypto exchange, and client hardware and IoT projects.',
  },
  tr: {
    path: '/tr/work',
    eyebrow: 'SEÇİLMİŞ İŞLER',
    title: 'İşler',
    lede: 'Yapay zekâ ajanları ve canlı sistemler; bir de bana çalışmaya devam eden işler teslim etmeyi öğreten donanım projeleri.',
    description: 'Seçilmiş işler: güvenlik kurallı yapay zekâ ajanları, çoklu ajan araçları, bir kripto borsasında canlı sistemler ve müşteriler için donanım ve IoT projeleri.',
  },
} satisfies Record<Locale, unknown>;

// Hardware and IoT client work.
const CLIENT_CASES = {
  en: {
    isbusy: {
      client: 'A factory in Türkiye',
      tags: ['Custom hardware', 'Wireless remote', 'Installed on site'],
      title: 'A light that saves the stairs',
      problem: "The manager's office sat upstairs, out of sight. Engineers and workers climbed up just to find the door closed.",
      built: 'A custom status light by the stairs, with a handheld remote for the manager. Green means come up, red means busy.',
      result: 'Nobody climbs the stairs for nothing anymore.',
      photoAlt: 'Finished status light glowing green',
    },
    art: {
      client: 'A.R.T. — Art Research Tech',
      tags: ['MQTT', 'Remote config', 'Live installation'],
      title: 'Managing an artwork from another city',
      problem: "A.R.T.'s Symbiosis installation ran at Contemporary Istanbul. Every config change meant sending someone to the venue.",
      built: 'Remote configuration over the internet using MQTT, so the studio could adjust the artwork from wherever they were.',
      result: 'Fewer trips to the venue, and changes made in minutes instead of days.',
      link: 'See Symbiosis',
      photoAlts: [
        'Close-up of the Symbiosis mechanism: a lit fluid reservoir and tubing on a steel frame beside the blue sculpture',
        'The Symbiosis sculpture lit blue in a dark exhibition room at Contemporary Istanbul',
        'The steel frame and tubing behind the sculpture, with a glowing bubble on its surface',
        'Bubbles and mist drifting across the sculpture under blue light',
      ],
    },
  },
  tr: {
    isbusy: {
      client: "Türkiye'de bir fabrika",
      tags: ['Özel donanım', 'Kablosuz kumanda', 'Yerinde kurulum'],
      title: 'Merdiveni boşuna çıkartmayan lamba',
      problem: 'Yöneticinin odası üst katta, gözden uzaktaydı. Mühendisler ve çalışanlar yukarı çıkıp kapıyı kapalı buluyordu.',
      built: 'Merdiven başına özel bir durum lambası, yöneticiye de elde taşınan bir kumanda. Yeşil “gelebilirsiniz”, kırmızı “meşgulüm” demek.',
      result: 'Artık kimse merdiveni boşuna çıkmıyor.',
      photoAlt: 'Yeşil yanan bitmiş cihaz',
    },
    art: {
      client: 'A.R.T. — Art Research Tech',
      tags: ['MQTT', 'Uzaktan ayar', 'Canlı enstalasyon'],
      title: 'Başka bir şehirden bir sanat eserini yönetmek',
      problem: "A.R.T.'nin Symbiosis enstalasyonu Contemporary Istanbul'da sergilendi. Her ayar değişikliği için birinin mekâna gitmesi gerekiyordu.",
      built: 'MQTT ile internet üzerinden uzaktan ayar yönetimi. Stüdyo eseri bulunduğu yerden ayarlayabildi.',
      result: 'Mekâna daha az gidiş; değişiklikler günler yerine dakikalar içinde.',
      link: "Symbiosis'i inceleyin",
      photoAlts: [
        'Symbiosis mekanizmasına yakından bakış: mavi heykelin yanında çelik bir çerçeve üzerinde ışıklı sıvı haznesi ve hortumlar',
        "Contemporary Istanbul'da karanlık bir sergi odasında mavi ışıkla aydınlatılmış Symbiosis heykeli",
        'Heykelin arkasındaki çelik çerçeve ve hortumlar; yüzeyinde parlayan bir baloncuk',
        'Mavi ışık altında heykelin üzerinde süzülen baloncuklar ve sis',
      ],
    },
  },
} satisfies Record<Locale, unknown>;

function casesFor(lang: Locale): Case[] {
  const { paribu, tamo, fabrika } = HOME[lang].cases;
  const { isbusy, art } = CLIENT_CASES[lang];
  return [
    paribu,
    { ...tamo, images: [{ src: tamoShot, alt: tamo.shotAlt }] },
    { ...fabrika, images: [{ src: fabrikaShot, alt: fabrika.shotAlt }] },
    { ...isbusy, images: [{ src: isbusyPhoto, alt: isbusy.photoAlt }] },
    {
      ...art,
      link: { label: art.link, href: 'https://artresearch.tech/work/symbiosis/' },
      images: symbiosisPhotos.map((src, i) => ({ src, alt: art.photoAlts[i] })),
    },
  ];
}

export const CASES: Record<Locale, Case[]> = { en: casesFor('en'), tr: casesFor('tr') };
