// Homepage copy in every supported language.
//
// English lives at "/", Turkish at "/tr/". Adding a language means adding a key
// here, a page under src/pages/<lang>/index.astro, and an entry in LOCALES.
//
// Voice: one person talking, not a company. First person, plain words. Written
// for someone who needs AI to do real work (an agency founder, a team lead, an
// operations owner), not for an AI researcher. Lead with what runs in
// production, then how it stays safe. Client quotes stay in the language they
// were given in.

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

// Companies and clients for the logo strip under the masthead. Logos are each
// company's own mark, flattened to one ink colour that follows the theme; `h` is the
// display height in px so marks of different shapes look the same size.
// Without a logo, the name renders as a serif wordmark.
export const COMPANIES: { name: string; href?: string; logo?: string; h?: number }[] = [
  { name: 'Paribu', href: 'https://www.paribu.com', logo: '/images/logos/paribu.svg', h: 24 },
  { name: 'A.R.T.', href: 'https://artresearch.tech', logo: '/images/logos/art.svg', h: 40 },
  { name: 'Molde Biljardklubb', href: 'https://moldebiljardklubb.no/', logo: '/images/logos/molde-biljardklubb.png', h: 20 },
  { name: 'ICRON', href: 'https://www.icrontech.com', logo: '/images/logos/icron.svg', h: 30 },
  { name: 'Bizmovo' },
  { name: 'Star Holden', href: 'https://starholden.com' },
  { name: 'Remmsoft', href: 'https://www.remmsoft.com', logo: '/images/logos/remmsoft.png', h: 28 },
];

export const HOME = {
  en: {
    // <head>
    title: 'Berkay Çubuk — AI Engineer · AI agents that do real work, safely',
    description:
      'I build AI agents and LLM automations that run in production, with guardrails in code, not prompts. Independent AI engineer in Istanbul, working worldwide.',
    jsonLdDescription:
      'Berkay Çubuk is an AI engineer with 5+ years of software experience. He builds AI agents and LLM automations that run in production, with the guardrails that make them safe to use on real accounts and tools.',
    jobTitle: 'AI Engineer',
    srIntro:
      "Hi, I'm Berkay Çubuk, an AI engineer. I build AI agents that take repetitive work off your team and run safely on real accounts and tools. Email me about your project.",

    // Masthead
    role: ['AI Engineer', 'Agents & LLM automations in production'],
    place: 'Istanbul · working worldwide',
    heroTitle: 'I build AI agents that do real work, safely.',
    heroCta: 'Email me about your project',
    status: 'Open for new projects',
    companiesLabel: 'Worked with',

    // Fig. A: an illustrated chat with Tamo, stopping to ask before it pays.
    chat: {
      label: 'Illustration: an AI assistant asking for confirmation before it pays',
      ask: 'Book a table for four, Friday 8pm.',
      reply: 'Found one at 20:00. It needs a ₺500 card hold.',
      confirm: 'Confirm before I pay?',
      yes: 'Confirm',
      no: 'Cancel',
    },
    figA: 'Fig. A — Asks before it pays',
    figB: 'Fig. B — Agents, reviewed',

    principles: [
      { name: 'Agents in production', desc: 'Agents that work on real accounts and tools every day, not demos that break on the second try.' },
      { name: 'Guardrails in code, not prompts', desc: 'Payments, bookings and messages wait for a yes. Enforced in code, so no clever prompt can talk its way past them.' },
      { name: 'Fits the tools you already use', desc: 'It plugs into your APIs, inboxes, spreadsheets and internal systems. Nothing new for your team to learn.' },
    ],

    // Case studies
    labels: { problem: 'The situation', built: 'What I built', result: 'The result' },
    cases: {
      paribu: {
        client: 'Paribu — crypto exchange',
        tags: ['AI Engineer', 'AI enablement', 'Production'],
        title: 'Shipping where real money moves',
        problem: 'A crypto exchange: software handles real money, and compliance is not optional.',
        built: 'A ticketing platform from scratch, plus the admin tools the operations team runs it with. Dictation tooling for writing prompts, and hands-on help moving engineering teams onto AI tools and workflows. Before that, a Travel Rule compliance system.',
        result: 'Thousands of tickets sold in production. The compliance system runs at multiple exchanges.',
      },
      tamo: {
        client: 'Tamo — my own product',
        tags: ['Agents', 'Browser & terminal', 'Guardrails'],
        title: 'An assistant you can trust with your accounts',
        problem: 'A useful assistant needs real access: a browser, a terminal, your accounts. That same access is what makes it dangerous.',
        built: 'A personal assistant in Telegram with its own browser, Linux terminal and memory. It confirms before any payment, booking or message, only uses approved sites, treats web page text as data, and you type passwords and 2FA yourself.',
        result: 'An agent that acts for you, and never spends without asking.',
        link: { label: 'Join the Tamo waitlist', href: 'https://heytamo.com' },
        shotAlt: 'Tamo website: a Telegram chat where Tamo asks for permission before completing a restaurant reservation, and the user allows it',
        shotCaption: 'Fig. 01 — Tamo stops before the final click and waits for a yes.',
      },
      fabrika: {
        client: 'Fabrika — open source',
        tags: ['Multi-agent', 'Git worktrees', 'Review gates'],
        title: 'Coding agents that check each other’s work',
        problem: 'One coding agent is a helper. Several running at once turn into a mess without structure.',
        built: 'Planning agents split the task, execution agents each work in an isolated git worktree, and review agents gate every merge. A mobile app reaches the desktop over an end-to-end encrypted link.',
        result: 'Many agents in parallel, and nothing lands without review.',
        link: { label: 'See Fabrika', href: 'https://fabrika-ai.com' },
        shotAlt: 'Fabrika website: a task board with plan, build, verify and ship columns, and one high-risk task waiting for a human',
        shotCaption: 'Fig. 02 — Work flows through plan, build and verify. High-risk changes wait for a person.',
      },
    },

    processLabel: "How we'd work together",
    steps: [
      { name: 'You email me', desc: 'Describe the work that eats your team’s time. No spec needed.' },
      { name: 'We scope it', desc: 'The workflow, the tools it touches, and what the agent must never do on its own.' },
      { name: 'I build & ship', desc: 'A working agent on your real systems, in paid milestones, with logs you can read.' },
      { name: 'It keeps running', desc: 'I watch it after launch and fix what breaks, or hand it over to your team.' },
    ],

    wordsLabel: 'In their words',

    alsoLabel: 'Also made — tools & hardware',
    allProjects: 'All projects',
    products: {
      pouch: 'Run and steer Claude Code sessions from your phone.',
      'isbusy code': 'Desk lights that show what your coding agents are doing.',
      'MQTT Studio': 'Hosted IoT dashboards. A SaaS I run solo.',
      isbusy: 'A custom status light, built and installed at a factory.',
    },

    endAsk: 'Work your team keeps doing by hand?',
    endWrite: 'Write to me.',
    endNote: 'I take on a few projects at a time and reply within a day.',
  },

  tr: {
    // <head>
    title: 'Berkay Çubuk — Yapay Zekâ Mühendisi · Gerçek iş yapan yapay zekâ ajanları',
    description:
      'Canlı ortamda çalışan yapay zekâ ajanları ve LLM otomasyonları geliştiriyorum. Güvenlik kuralları prompt’ta değil, kodda. İstanbul’dan, her yere.',
    jsonLdDescription:
      'Berkay Çubuk, 5 yılı aşkın yazılım deneyimine sahip bir yapay zekâ mühendisi. Gerçek hesaplar ve araçlar üzerinde güvenle çalışan yapay zekâ ajanları ve LLM otomasyonları geliştiriyor.',
    jobTitle: 'Yapay Zekâ Mühendisi',
    srIntro:
      'Merhaba, ben Berkay Çubuk, yapay zekâ mühendisiyim. Ekibinizin tekrar eden işlerini üstlenen ve gerçek hesaplar ile araçlar üzerinde güvenle çalışan yapay zekâ ajanları geliştiriyorum. Projenizi bana e-postayla anlatın.',

    // Masthead
    role: ['Yapay Zekâ Mühendisi', 'Canlı ortamda ajanlar ve LLM otomasyonları'],
    place: 'İstanbul · her yerden çalışıyorum',
    heroTitle: 'Gerçek işi güvenle yapan yapay zekâ ajanları geliştiriyorum.',
    heroCta: 'Projenizi e-postayla anlatın',
    status: 'Yeni projelere açığım',
    companiesLabel: 'Birlikte çalıştıklarım',

    chat: {
      label: 'Çizim: ödeme yapmadan önce onay isteyen bir yapay zekâ asistanı',
      ask: 'Cuma 20:00 için dört kişilik masa ayırt.',
      reply: '20:00’de yer var. ₺500 kart provizyonu istiyor.',
      confirm: 'Ödemeden önce onaylıyor musun?',
      yes: 'Onayla',
      no: 'İptal',
    },
    figA: 'Şekil A — Ödemeden önce sorar',
    figB: 'Şekil B — Denetlenen ajanlar',

    principles: [
      { name: 'Canlı ortamda ajanlar', desc: 'Her gün gerçek hesaplar ve araçlar üzerinde çalışan ajanlar; ikinci denemede bozulan demolar değil.' },
      { name: 'Kurallar prompt’ta değil, kodda', desc: 'Ödeme, rezervasyon ve mesaj onayınızı bekler. Kuralı kod koyar; hiçbir akıllı prompt onu aşamaz.' },
      { name: 'Mevcut araçlarınızla çalışır', desc: 'API’lerinize, e-postanıza, tablolarınıza ve iç sistemlerinize bağlanır. Ekibinizin yeni bir şey öğrenmesi gerekmez.' },
    ],

    labels: { problem: 'Durum', built: 'Ne yaptım', result: 'Sonuç' },
    cases: {
      paribu: {
        client: 'Paribu — kripto para borsası',
        tags: ['Yapay Zekâ Mühendisi', 'Yapay zekâ dönüşümü', 'Canlı ortam'],
        title: 'Gerçek paranın döndüğü yerde üretmek',
        problem: 'Bir kripto para borsası: yazılım gerçek parayı yönetiyor, regülasyona uymak seçenek değil.',
        built: 'Sıfırdan bir biletleme platformu ve operasyon ekibinin onu yönettiği yönetim araçları. Prompt yazmak için dikte aracı; mühendislik ekiplerinin yapay zekâ araçlarına ve iş akışlarına geçişine birebir destek. Öncesinde, bir Travel Rule uyumluluk sistemi.',
        result: 'Canlı ortamda binlerce bilet satıldı. Uyumluluk sistemi birden fazla borsada çalışıyor.',
      },
      tamo: {
        client: 'Tamo — kendi ürünüm',
        tags: ['Ajanlar', 'Tarayıcı ve terminal', 'Güvenlik kuralları'],
        title: 'Hesaplarınızı emanet edebileceğiniz bir asistan',
        problem: 'İşe yarayan bir asistanın gerçek erişime ihtiyacı var: tarayıcı, terminal, hesaplarınız. Onu tehlikeli yapan da aynı erişim.',
        built: 'Telegram’da yaşayan; kendi tarayıcısı, Linux terminali ve hafızası olan kişisel bir asistan. Her ödeme, rezervasyon ve mesajdan önce onay ister, yalnızca izin verilen sitelere girer, web sayfasındaki metni talimat değil veri olarak görür; şifre ve 2FA’yı siz girersiniz.',
        result: 'Sizin yerinize iş yapan, ama sormadan tek kuruş harcamayan bir ajan.',
        link: { label: 'Tamo bekleme listesine katılın', href: 'https://heytamo.com' },
        shotAlt: 'Tamo web sitesi: Tamo’nun bir restoran rezervasyonunu tamamlamadan önce izin istediği ve kullanıcının izin verdiği bir Telegram sohbeti',
        shotCaption: 'Şekil 01 — Tamo son tıklamadan önce durur ve onayınızı bekler.',
      },
      fabrika: {
        client: 'Fabrika — açık kaynak',
        tags: ['Çoklu ajan', 'Git worktree', 'İnceleme kapıları'],
        title: 'Birbirinin işini kontrol eden kodlama ajanları',
        problem: 'Tek bir kodlama ajanı yardımcıdır. Aynı anda birkaç tanesi, düzen olmadan karmaşaya döner.',
        built: 'Planlama ajanları işi böler, uygulama ajanları her biri ayrı bir git worktree’de çalışır, inceleme ajanları her birleştirmeyi denetler. Mobil uygulama masaüstüne uçtan uca şifreli bir bağlantıyla ulaşır.',
        result: 'Paralel çalışan birçok ajan; incelenmeden hiçbir şey birleşmiyor.',
        link: { label: 'Fabrika’yı inceleyin', href: 'https://fabrika-ai.com' },
        shotAlt: 'Fabrika web sitesi: planlama, geliştirme, doğrulama ve yayın sütunları olan bir görev panosu ve insan onayı bekleyen yüksek riskli bir görev',
        shotCaption: 'Şekil 02 — İş planlama, geliştirme ve doğrulamadan geçer. Riskli değişiklikler bir insanı bekler.',
      },
    },

    processLabel: 'Birlikte nasıl çalışırız',
    steps: [
      { name: 'Bana yazın', desc: 'Ekibinizin vaktini yiyen işi anlatın. Teknik şartname gerekmez.' },
      { name: 'Kapsamı çıkaralım', desc: 'İş akışı, dokunacağı araçlar ve ajanın kendi başına asla yapmaması gerekenler.' },
      { name: 'Geliştirip yayına alıyorum', desc: 'Gerçek sistemlerinizde çalışan bir ajan; ödemeli aşamalarla, okunabilir kayıtlarla.' },
      { name: 'Çalışmaya devam eder', desc: 'Yayından sonra izliyor, bozulanı düzeltiyorum ya da ekibinize devrediyorum.' },
    ],

    wordsLabel: 'Müşterilerimin sözleriyle',

    alsoLabel: 'Ayrıca yaptıklarım — araçlar ve donanım',
    allProjects: 'Tüm projeler',
    products: {
      pouch: 'Claude Code oturumlarını telefonunuzdan yönetin.',
      'isbusy code': 'Kodlama ajanlarınızın ne yaptığını gösteren masa ışıkları.',
      'MQTT Studio': 'Barındırılan IoT panelleri. Tek başıma işlettiğim bir SaaS.',
      isbusy: 'Bir fabrika için yapıp kurduğum özel durum lambası.',
    },

    endAsk: 'Ekibiniz hâlâ elle mi yapıyor?',
    endWrite: 'Bana yazın.',
    endNote: 'Aynı anda az sayıda proje alıyorum ve bir gün içinde dönüyorum.',
  },
} as const;
