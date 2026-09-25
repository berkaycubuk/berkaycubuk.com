// Homepage copy in every supported language.
//
// English lives at "/", Turkish at "/tr/". Adding a language means adding a key
// here, a page under src/pages/<lang>/index.astro, and an entry in LOCALES.
//
// Voice: one person talking, not a company. First person, plain words, written
// for an operations manager, not an engineer. Client quotes stay in the
// language they were given in.

export const LOCALES = [
  { code: 'en', label: 'EN', htmlLang: 'en', ogLocale: 'en_US', path: '/' },
  { code: 'tr', label: 'TR', htmlLang: 'tr', ogLocale: 'tr_TR', path: '/tr/' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

// Client reviews, shown as given (English) on every language version.
export const QUOTES = [
  {
    text: 'Delivered what I asked for perfectly again!! Would highly recommend.',
    by: 'A.R.T.',
    href: 'https://artresearch.tech',
  },
  {
    text: "Love the website, it's exactly what I wanted. Delivered everything I asked and understood the style and flow of the site really well.",
    by: 'Star Holden',
    href: 'https://starholden.com',
  },
  {
    text: "I would highly recommend Berkay. He is very intelligent and good in his job… Don't think a second if he says yes I can take this project.",
    by: 'Molde Biljardklubb',
    href: 'https://moldebiljardklubb.no/',
  },
];

export const HOME = {
  en: {
    // <head>
    title: 'Berkay Çubuk — Custom Devices & Automation for Factories and Workshops',
    description:
      'I build custom devices, sensors and the software behind them for factories and workshops. Designed, built and installed by one person.',
    jsonLdDescription:
      'Berkay Çubuk builds custom devices, sensors and automation software for factories and workshops, from the first idea to installation on site.',
    jobTitle: 'Hardware & Software Engineer',
    srIntro:
      "Hi, I'm Berkay Çubuk. I build the small machines and software that make factory and workshop floors simpler: custom devices, sensors and the software behind them. Email me about your problem.",

    // Masthead
    role: ['Hardware & software', 'for factories & workshops'],
    place: 'Istanbul · working worldwide',
    heroTitle: 'I build the small machines and software that make your shop floor simpler.',
    heroCta: 'Email me about your problem',
    status: 'Open for new projects',
    figA: 'Fig. A — Available',
    figB: 'Fig. B — Inside',
    bleedAlt: 'A custom status light glowing red, mounted by a factory staircase',
    bleedCaption: 'A status light I built for a factory — red means the manager is busy.',

    services: [
      { name: 'Custom devices', desc: 'Indicators, controllers and small machines built for your floor — not bought off a shelf.' },
      { name: 'Sensors & monitoring', desc: 'Temperature, air, power, status. See what your machines are doing without walking over.' },
      { name: 'Automation software', desc: 'The glue between your equipment, your screens and your people.' },
    ],

    // Case studies
    labels: { problem: 'The problem', built: 'What I built', result: 'The result' },
    isbusy: {
      client: 'A factory in Türkiye',
      tags: ['Custom hardware', 'Wireless remote', 'Installed on site'],
      title: 'A light that saves the stairs',
      problem: "The manager's office sat upstairs, out of sight. Engineers and workers climbed up just to find the door closed.",
      built: 'A custom status light by the stairs, with a handheld remote for the manager. Green means come up, red means busy.',
      result: 'Nobody climbs the stairs for nothing anymore.',
      marks: ['hand-wired prototype', 'LED ring added', 'custom board, screw terminals'],
      evolutionAlt: "Three generations of the device's insides, from messy wiring to a clean circuit board",
      evolutionCaption: 'Fig. 01 — Three versions of the same device. Each one easier to repair than the last.',
      strip: ['i. Printed shells', 'ii. Testing the remote', 'iii. Finished', 'iv. Updated remotely'],
      stripAlts: ['Empty 3D-printed shells on the workbench', 'Testing the remote', 'Finished device glowing green', 'Over-the-air update in progress'],
      stripLabel: 'How the device was built, step by step',
    },
    art: {
      client: 'A.R.T. — Art Research Tech',
      tags: ['MQTT', 'Remote config', 'Live installation'],
      title: 'Managing an artwork from another city',
      problem: "A.R.T.'s Symbiosis installation ran at Contemporary Istanbul. Every config change meant sending someone to the venue.",
      built: 'Remote configuration over the internet using MQTT, so the studio could adjust the artwork from wherever they were.',
      result: 'Fewer trips to the venue, and changes made in minutes instead of days.',
      link: 'See Symbiosis',
    },

    processLabel: "How we'd work together",
    steps: [
      { name: 'You email me', desc: 'Describe the problem in plain words. No specs needed.' },
      { name: 'I visit or we talk', desc: 'I look at your floor and work out what to build.' },
      { name: 'I build & install', desc: 'Hardware and software, tested before it reaches you.' },
      { name: 'It keeps working', desc: "Updated remotely. You don't need me on site." },
    ],

    wordsLabel: 'In their words',

    alsoLabel: 'Also made — apps & tools',
    allProjects: 'All projects',
    products: {
      'MQTT Studio': 'Live dashboards for sensors and devices.',
      Fabrika: 'A software factory that runs on your computer.',
      'tarif.ist': 'Transit directions for Istanbul.',
    },

    endAsk: 'Something on your floor wasting time?',
    endWrite: 'Write to me.',
    endNote: 'No forms, no calls unless you want one. I reply within a day.',
  },

  tr: {
    // <head>
    title: 'Berkay Çubuk — Fabrika ve Atölyeler için Özel Cihaz ve Otomasyon',
    description:
      'Fabrikalar ve atölyeler için özel cihazlar, sensörler ve bunların yazılımını geliştiriyorum. Tek kişi tasarlar, üretir ve kurar.',
    jsonLdDescription:
      'Berkay Çubuk, fabrikalar ve atölyeler için ilk fikirden yerinde kuruluma kadar özel cihazlar, sensörler ve otomasyon yazılımı geliştirir.',
    jobTitle: 'Donanım ve Yazılım Mühendisi',
    srIntro:
      'Merhaba, ben Berkay Çubuk. Fabrika ve atölyelerde işi kolaylaştıran küçük makineleri ve yazılımları yapıyorum: özel cihazlar, sensörler ve bunların yazılımı. Sorununuzu bana e-postayla anlatın.',

    // Masthead
    role: ['Donanım ve yazılım', 'fabrikalar ve atölyeler için'],
    place: 'İstanbul · her yerden çalışıyorum',
    heroTitle: 'Atölyenizde işleri kolaylaştıran küçük makineleri ve yazılımları yapıyorum.',
    heroCta: 'Sorununuzu e-postayla anlatın',
    status: 'Yeni projelere açığım',
    figA: 'Şekil A — Müsait',
    figB: 'Şekil B — İçi',
    bleedAlt: 'Bir fabrikada merdiven başına takılmış, kırmızı yanan özel durum lambası',
    bleedCaption: 'Bir fabrika için yaptığım durum lambası — kırmızı, yöneticinin meşgul olduğunu gösteriyor.',

    services: [
      { name: 'Özel cihazlar', desc: 'Raftan alınmamış; sizin atölyeniz için yapılmış göstergeler, kontrol üniteleri ve küçük makineler.' },
      { name: 'Sensörler ve izleme', desc: 'Sıcaklık, hava, enerji, durum. Makinelerinizin ne yaptığını yanına gitmeden görün.' },
      { name: 'Otomasyon yazılımı', desc: 'Ekipmanlarınız, ekranlarınız ve ekibiniz arasındaki bağlantı.' },
    ],

    // Case studies
    labels: { problem: 'Sorun', built: 'Ne yaptım', result: 'Sonuç' },
    isbusy: {
      client: "Türkiye'de bir fabrika",
      tags: ['Özel donanım', 'Kablosuz kumanda', 'Yerinde kurulum'],
      title: 'Merdiveni boşuna çıkartmayan lamba',
      problem: 'Yöneticinin odası üst katta, gözden uzaktaydı. Mühendisler ve çalışanlar yukarı çıkıp kapıyı kapalı buluyordu.',
      built: 'Merdiven başına özel bir durum lambası, yöneticiye de elde taşınan bir kumanda. Yeşil “gelebilirsiniz”, kırmızı “meşgulüm” demek.',
      result: 'Artık kimse merdiveni boşuna çıkmıyor.',
      marks: ['elle kablolanmış prototip', 'LED halka eklendi', 'özel kart, vidalı klemens'],
      evolutionAlt: 'Cihazın içinin üç nesli: dağınık kablolardan düzenli bir devre kartına',
      evolutionCaption: 'Şekil 01 — Aynı cihazın üç versiyonu. Her biri bir öncekinden daha kolay tamir ediliyor.',
      strip: ['i. Basılmış kasalar', 'ii. Kumanda testi', 'iii. Bitmiş hali', 'iv. Uzaktan güncelleme'],
      stripAlts: ['Tezgâhta boş 3D baskı kasalar', 'Kumandanın test edilmesi', 'Yeşil yanan bitmiş cihaz', 'Uzaktan güncelleme sürüyor'],
      stripLabel: 'Cihazın adım adım yapılışı',
    },
    art: {
      client: 'A.R.T. — Art Research Tech',
      tags: ['MQTT', 'Uzaktan ayar', 'Canlı enstalasyon'],
      title: 'Başka bir şehirden bir sanat eserini yönetmek',
      problem: "A.R.T.'nin Symbiosis enstalasyonu Contemporary Istanbul'da sergilendi. Her ayar değişikliği için birinin mekâna gitmesi gerekiyordu.",
      built: 'MQTT ile internet üzerinden uzaktan ayar yönetimi. Stüdyo eseri bulunduğu yerden ayarlayabildi.',
      result: 'Mekâna daha az gidiş; değişiklikler günler yerine dakikalar içinde.',
      link: "Symbiosis'i inceleyin",
    },

    processLabel: 'Birlikte nasıl çalışırız',
    steps: [
      { name: 'Bana yazın', desc: 'Sorunu sade bir dille anlatın. Teknik şartname gerekmez.' },
      { name: 'Yerinde bakalım', desc: 'Atölyenize bakıp neyin yapılacağına karar veriyorum.' },
      { name: 'Üretip kuruyorum', desc: 'Donanım ve yazılım, size ulaşmadan önce test edilmiş olarak.' },
      { name: 'Çalışmaya devam eder', desc: 'Uzaktan güncellenir. Benim yerinde olmam gerekmez.' },
    ],

    wordsLabel: 'Müşterilerimin sözleriyle',

    alsoLabel: 'Ayrıca yaptıklarım — uygulamalar ve araçlar',
    allProjects: 'Tüm projeler',
    products: {
      'MQTT Studio': 'Sensörler ve cihazlar için canlı paneller.',
      Fabrika: 'Bilgisayarınızda çalışan bir yazılım fabrikası.',
      'tarif.ist': 'İstanbul için toplu taşıma yol tarifi.',
    },

    endAsk: 'Atölyenizde vakit kaybettiren bir şey mi var?',
    endWrite: 'Bana yazın.',
    endNote: 'Form yok, istemezseniz telefon da yok. Bir gün içinde dönerim.',
  },
} as const;
