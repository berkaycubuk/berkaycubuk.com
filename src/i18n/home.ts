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
    title: 'Berkay Çubuk — Get €20,000 a year of team time back with AI',
    description:
      'Your team is losing €20,000 a year to repetitive work. I find it and hand it to an AI employee in 3 weeks. My launch clients pay nothing until it delivers.',
    jsonLdDescription:
      'Berkay Çubuk is an AI engineer with 5+ years of software experience. He finds the repetitive work costing a team €20,000+ a year and hands it to an AI agent that runs in their existing tools. Fixed price, live in 3 weeks, paid only after it delivers.',
    jobTitle: 'AI Engineer',
    srIntro:
      "Hi, I'm Berkay Çubuk, an AI engineer. Your team is likely losing €20,000 a year to repetitive work. I find it and hand it to an AI employee in 3 weeks. Fixed price, and you pay only after it saves the hours we agreed. Book a free 20-minute call.",
    mailSubject: 'Intro call',

    // Hero: the outcome first, then the risk reversal.
    eyebrow: 'Berkay Çubuk · AI Engineer',
    heroTitle: 'Your team is losing €20,000 a year to repetitive work.',
    heroSub: 'I find it and hand it to an AI employee in 3 weeks. It works in your tools and asks before anything important. You pay only after it saves the hours we agree on.',
    heroPoints: ['€20k+ a year back', 'Live in 3 weeks', 'Pay only after it works'],
    heroCta: 'Book a free 20-min call',
    calcCta: 'What is it costing you?',
    heroNote: 'No commitment. If I can’t find €20k of work to automate, I’ll tell you.',
    status: '2 launch spots left',
    companiesLabel: 'Worked with',

    examplesLabel: 'Where the €20k usually hides',
    examples: [
      { title: 'Portal data entry', desc: 'Copying data from supplier or government portals into your spreadsheet or ERP.' },
      { title: 'Inbox and tickets', desc: 'Sorting incoming emails or tickets and drafting replies for you to approve.' },
      { title: 'Double typing', desc: 'Entering the same information into several systems.' },
      { title: 'Weekly reports', desc: 'Pulling numbers from 3–4 tools into one report.' },
    ],
    examplesNote: '8–10 hours a week on one of these is about €20,000 a year.',

    // Savings calculator: hours/week × hourly cost × 48 working weeks.
    calc: {
      label: 'What is it costing you?',
      intro: 'Pick one repetitive task your team does every week.',
      hours: 'Hours per week on it',
      rate: 'Hourly cost of the people doing it',
      result: 'This task costs you',
      perYear: 'a year',
      paybackBefore: 'At the launch price, it pays for itself in',
      paybackAfter: 'weeks.',
      currency: 'EUR',
      locale: 'en-IE',
      hoursDefault: 10,
      rateDefault: 45,
      rateMax: 150,
      price: 2000,
    },

    processLabel: 'How it works',
    steps: [
      { name: 'Free call', meta: '20 minutes', desc: 'Tell me which task eats your team’s time. I’ll tell you if it’s a fit.' },
      { name: 'Free Discovery Day', meta: '1 day', desc: 'I spend a day with your team and find the €20k. Then you get a one-page plan with the hours it saves and a fixed price.' },
      { name: 'Build and launch', meta: '3 weeks', desc: 'I build it, test it on your real work and put it live. You spend about 3 hours.' },
    ],

    offerLabel: 'Everything you get',
    stack: [
      { item: 'An AI employee that does one task end to end, built and live', value: '€4,000' },
      { item: 'Connected to up to 3 of your tools', value: 'Included' },
      { item: 'Asks before it sends, pays or deletes. Never sees your passwords.', value: 'Included' },
      { item: '2-hour training for your team', value: '€500' },
      { item: 'Handover doc and walkthrough video', value: '€300' },
      { item: '30 days of fixes after launch', value: '€400' },
    ],
    totalLabel: 'Total value',
    total: '€5,200',
    priceLead: 'Launch price',
    price: '€2,000',
    priceNote: 'For my 2 launch clients, in exchange for a testimonial.',
    payTerms: 'You pay nothing up front. You pay once it saves the hours we agreed.',

    guaranteeLabel: 'The guarantee',
    guarantee: 'We agree in the plan how many hours a week it saves. You pay only when it’s saving them. If it never does, you pay nothing.',

    proofLabel: 'Who builds it',
    proofIntro: 'I’m Berkay, an AI engineer in Istanbul with 5+ years of building software that runs in production.',
    proof: [
      'Built a ticketing platform and a compliance system at Paribu, a crypto exchange.',
      'Built Tamo, an AI assistant that asks before every payment or message.',
      'Built Fabrika, open-source tooling where AI agents review each other’s work.',
    ],
    allWork: 'See my work',

    // Case studies (also shown on /work)
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

    faqLabel: 'Questions',
    faq: [
      { q: 'How do you know it’s €20,000?', a: 'On the Discovery Day we count how many hours the task takes and multiply by your team’s hourly cost. That number goes in the plan, and the guarantee is tied to it.' },
      { q: 'What if you can’t find €20k?', a: 'I’ll tell you at the end of the Discovery Day. You’ve paid nothing.' },
      { q: 'Why work before getting paid?', a: 'You’d be one of my first two clients on this offer. I’d rather earn your trust and your testimonial with results than ask you to pay up front.' },
      { q: 'Is it safe?', a: 'It only uses the tools you approve, asks before anything important and logs every action. You log in yourself, so it never sees your passwords.' },
      { q: 'Are there running costs?', a: 'Yes, a small monthly AI and hosting bill, paid on your own account. I estimate it in the plan.' },
      { q: 'What happens after launch?', a: 'You own it. Optional monthly support keeps it working when your tools change.' },
      { q: 'Do you work with agencies?', a: 'Yes, white-label. Email me and I’ll send the details.' },
    ],

    endAsk: 'Where is your €20k hiding?',
    endNote: 'Book a free 20-minute call. I reply within a day.',
  },

  tr: {
    // <head>
    title: 'Berkay Çubuk — Ekibinizin tekrar eden işini yapay zekâya devredin',
    description:
      'Ekibiniz her hafta saatlerini tekrar eden işlere harcıyor. O işi bulup 3 haftada bir yapay zekâ çalışanına devrediyorum. Lansman müşterilerim, sonuç görene kadar hiçbir şey ödemez.',
    jsonLdDescription:
      'Berkay Çubuk, 5 yılı aşkın yazılım deneyimine sahip bir yapay zekâ mühendisi. Ekiplerin her hafta saatlerini alan tekrar eden işleri bulup mevcut araçlarda çalışan yapay zekâ ajanlarına devrediyor. Sabit fiyat, 3 haftada canlıda, ödeme ancak sonuç verdikten sonra.',
    jobTitle: 'Yapay Zekâ Mühendisi',
    srIntro:
      'Merhaba, ben Berkay Çubuk, yapay zekâ mühendisiyim. Ekibinizin her hafta saatlerini alan tekrar eden işi bulup 3 haftada bir yapay zekâ çalışanına devrediyorum. Sabit fiyat; ödemeyi ancak söz verdiğim saati kazandırdıktan sonra yaparsınız. Ücretsiz 20 dakikalık görüşme ayarlayın.',
    mailSubject: 'Tanışma görüşmesi',

    // Hero: hours instead of a euro figure; Turkish wages make €20k a much bigger task.
    eyebrow: 'Berkay Çubuk · Yapay Zekâ Mühendisi',
    heroTitle: 'Ekibiniz her hafta 10 saatini tekrar eden işlere harcıyor.',
    heroSub: 'O işi bulup 3 haftada bir yapay zekâ çalışanına devrediyorum. Araçlarınızda çalışır, önemli her adımdan önce sorar. Ödemeyi ancak söz verdiğimiz saati kazandırdıktan sonra yaparsınız.',
    heroPoints: ['Haftada 8+ saat geri', '3 haftada canlıda', 'Ödeme sonuçtan sonra'],
    heroCta: 'Ücretsiz 20 dk görüşme',
    calcCta: 'Size maliyeti ne?',
    heroNote: 'Taahhüt yok. Otomatikleştirmeye değer bir iş bulamazsam söylerim.',
    status: '2 lansman yeri kaldı',
    companiesLabel: 'Birlikte çalıştıklarım',

    examplesLabel: 'Kayıp saatler genelde nerede',
    examples: [
      { title: 'Portaldan veri girişi', desc: 'Tedarikçi ya da devlet portallarındaki verileri tablonuza ya da ERP’nize aktarmak.' },
      { title: 'E-posta ve talepler', desc: 'Gelen e-postaları ya da talepleri ayıklamak, onayınıza sunulacak yanıtları hazırlamak.' },
      { title: 'Çift giriş', desc: 'Aynı bilgiyi birkaç farklı sisteme girmek.' },
      { title: 'Haftalık raporlar', desc: '3–4 araçtaki rakamları tek bir raporda toplamak.' },
    ],
    examplesNote: 'Bunlardan birine haftada 8–10 saat, yılda 400 saatten fazla demek.',

    calc: {
      label: 'Size maliyeti ne?',
      intro: 'Ekibinizin her hafta yaptığı tekrar eden bir işi düşünün.',
      hours: 'Haftada bu işe giden saat',
      rate: 'Bu işi yapanların saatlik maliyeti',
      result: 'Bu iş size',
      perYear: 'yıllık maliyet',
      paybackBefore: '',
      paybackAfter: '',
      currency: 'TRY',
      locale: 'tr-TR',
      hoursDefault: 10,
      rateDefault: 400,
      rateMax: 2000,
      price: 0,
    },

    processLabel: 'Nasıl çalışıyor',
    steps: [
      { name: 'Ücretsiz görüşme', meta: '20 dakika', desc: 'Ekibinizin vaktini yiyen işi anlatın. Uygun olup olmadığını söylerim.' },
      { name: 'Ücretsiz Keşif Günü', meta: '1 gün', desc: 'Bir günü ekibinizle geçirip kayıp saatleri bulurum. Ardından kazandıracağı saati ve sabit fiyatı yazan tek sayfalık bir plan gönderirim.' },
      { name: 'Geliştirme ve yayın', meta: '3 hafta', desc: 'Geliştirir, gerçek işinizle test eder ve canlıya alırım. Size düşen yaklaşık 3 saat.' },
    ],

    offerLabel: 'Neler dahil',
    stack: [
      { item: 'Bir işi baştan sona yapan, kurulup canlıya alınmış bir yapay zekâ çalışanı', value: '€4.000' },
      { item: 'Araçlarınızdan 3 tanesine kadar bağlantı', value: 'Dahil' },
      { item: 'Göndermeden, ödemeden ya da silmeden önce sorar. Şifrelerinizi asla görmez.', value: 'Dahil' },
      { item: 'Ekibiniz için 2 saatlik eğitim', value: '€500' },
      { item: 'Devir teslim dokümanı ve anlatım videosu', value: '€300' },
      { item: 'Yayından sonra 30 gün düzeltme', value: '€400' },
    ],
    totalLabel: 'Toplam değer',
    total: '€5.200',
    priceLead: 'Lansman fiyatı',
    price: '€2.000',
    priceNote: '2 lansman müşterim için, bir referans yorumu karşılığında.',
    payTerms: 'Peşin hiçbir şey ödemezsiniz. Söz verdiğimiz saati kazandırdığında ödersiniz.',

    guaranteeLabel: 'Garanti',
    guarantee: 'Haftada kaç saat kazandıracağını planda birlikte belirleriz. Ancak bu saati kazandırdığında ödersiniz. Hiç kazandırmazsa hiçbir şey ödemezsiniz.',

    proofLabel: 'Kim geliştiriyor',
    proofIntro: 'Ben Berkay, İstanbul’da yapay zekâ mühendisiyim. 5 yılı aşkın süredir canlı ortamda çalışan yazılımlar geliştiriyorum.',
    proof: [
      'Kripto borsası Paribu’da bir biletleme platformu ve bir uyumluluk sistemi geliştirdim.',
      'Her ödeme ve mesajdan önce soran yapay zekâ asistanı Tamo’yu geliştirdim.',
      'Yapay zekâ ajanlarının birbirinin işini denetlediği açık kaynak araç Fabrika’yı geliştirdim.',
    ],
    allWork: 'İşlerimi görün',

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

    faqLabel: 'Sorular',
    faq: [
      { q: 'Kazancı nasıl ölçüyorsunuz?', a: 'Keşif Günü’nde işin haftada kaç saat aldığını sayar, ekibinizin saatlik maliyetiyle çarparız. Bu rakam plana girer ve garanti ona bağlıdır.' },
      { q: 'Ya değecek bir iş bulamazsanız?', a: 'Keşif Günü’nün sonunda söylerim. Hiçbir şey ödemezsiniz.' },
      { q: 'Neden ödeme almadan çalışıyorsunuz?', a: 'Bu teklifteki ilk iki müşterimden biri olacaksınız. Peşin ödeme istemek yerine güveninizi ve referansınızı sonuçla kazanmayı tercih ediyorum.' },
      { q: 'Güvenli mi?', a: 'Yalnızca onayladığınız araçları kullanır, önemli her adımdan önce sorar ve her işlemi kaydeder. Girişi siz yaparsınız; şifrelerinizi hiç görmez.' },
      { q: 'İşletme maliyeti var mı?', a: 'Evet, kendi hesabınızdan ödenen küçük bir aylık yapay zekâ ve sunucu maliyeti. Planda tahminini veririm.' },
      { q: 'Yayından sonra ne oluyor?', a: 'Sistem sizin. İsteğe bağlı aylık destek, araçlarınız değiştiğinde çalışmaya devam etmesini sağlar.' },
      { q: 'Ajanslarla çalışıyor musunuz?', a: 'Evet, beyaz etiketle. Bana yazın, detayları göndereyim.' },
    ],

    endAsk: 'Ekibinizin kayıp saatleri nerede?',
    endNote: 'Ücretsiz 20 dakikalık görüşme ayarlayın. Bir gün içinde dönüyorum.',
  },
} as const;
