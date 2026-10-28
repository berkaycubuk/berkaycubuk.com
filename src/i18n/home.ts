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
    title: 'Berkay Çubuk — I automate your team’s repetitive work with AI',
    description:
      'I turn one repetitive task your team does every week into an AI agent that runs in your tools and asks before anything important. Fixed price, live in 3 weeks.',
    jsonLdDescription:
      'Berkay Çubuk is an AI engineer with 5+ years of software experience. He turns repetitive team tasks into AI agents that run in your existing tools, with approval before anything important. Fixed scope, fixed price, live in 3 weeks.',
    jobTitle: 'AI Engineer',
    srIntro:
      "Hi, I'm Berkay Çubuk, an AI engineer. I automate one repetitive task your team does every week with an AI agent that works in your tools and asks before anything important. Fixed price, live in 3 weeks. Book a free 20-minute call.",
    mailSubject: 'Intro call',

    // Hero
    eyebrow: 'Berkay Çubuk · AI Engineer',
    heroTitle: 'I automate your team’s repetitive work with AI.',
    heroPoints: ['One task', 'Fixed price', 'Live in 3 weeks'],
    heroSub: 'I build an AI agent that does the work in the tools you already use. It asks you before anything important.',
    heroCta: 'Book a free 20-min call',
    heroNote: 'No commitment. If it’s not a fit, I’ll tell you.',
    status: '2 launch spots left this quarter',
    companiesLabel: 'Worked with',

    examplesLabel: 'What I can automate',
    examples: [
      { title: 'Portal data entry', desc: 'Copying data from supplier or government portals into your spreadsheet or ERP.' },
      { title: 'Inbox and tickets', desc: 'Sorting incoming emails or tickets and drafting replies for you to approve.' },
      { title: 'Double typing', desc: 'Entering the same information into several systems.' },
      { title: 'Weekly reports', desc: 'Pulling numbers from 3–4 tools into one report.' },
    ],
    examplesNote: 'If it happens every week and follows the same steps, it can probably be automated.',

    processLabel: 'How it works',
    steps: [
      { name: 'Free call', meta: '20 minutes', desc: 'Tell me which task eats your team’s time. I’ll tell you if it’s a fit.' },
      { name: 'Free Discovery Day', meta: '1 day', desc: 'I spend a day with your team, then send a one-page plan with a fixed price.' },
      { name: 'Build and launch', meta: '3 weeks', desc: 'I build it, test it on your real work and put it live. You spend about 3 hours.' },
    ],

    includedLabel: 'What you get',
    included: [
      'One task automated from start to finish',
      'Works with up to 3 of your tools',
      'Asks you before sending, paying or deleting',
      'Never sees your passwords',
      'Training for your team',
      '30 days of fixes after launch',
    ],
    guaranteeLabel: 'Guarantee',
    guarantee: 'We agree in writing what “done” means. If it doesn’t get there, I keep working for free until it does.',

    pricingLabel: 'Price',
    priceLead: 'Launch price',
    price: 'from €2,000',
    priceWas: 'normally €4,000',
    priceNote: 'For my first 2 clients this quarter.',
    payback: 'Most of these tasks cost a team €8,000+ a year in hours. The project usually pays for itself in 2–3 months.',
    careNote: 'Optional monthly support after launch.',

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
      { q: 'What if my task isn’t a good fit?', a: 'I’ll tell you on the call. It costs you nothing.' },
      { q: 'Is it safe?', a: 'It only uses the tools you approve, asks before anything important and logs every action. You log in yourself, so it never sees your passwords.' },
      { q: 'Are there running costs?', a: 'Yes, a small monthly AI and hosting bill, paid on your own account. I estimate it in the plan.' },
      { q: 'What happens after launch?', a: 'You own it. Optional monthly support keeps it working when your tools change.' },
      { q: 'Do you work with agencies?', a: 'Yes, white-label. Email me and I’ll send the details.' },
    ],

    endAsk: 'Which task should go first?',
    endNote: 'Book a free 20-minute call. I reply within a day.',
  },

  tr: {
    // <head>
    title: 'Berkay Çubuk — Ekibinizin tekrar eden işini yapay zekâyla otomatikleştiriyorum',
    description:
      'Ekibinizin her hafta yaptığı tekrar eden bir işi, araçlarınızda çalışan ve önemli her adımdan önce soran bir yapay zekâ ajanına dönüştürüyorum. Sabit fiyat, 3 haftada canlıda.',
    jsonLdDescription:
      'Berkay Çubuk, 5 yılı aşkın yazılım deneyimine sahip bir yapay zekâ mühendisi. Ekiplerin tekrar eden işlerini, mevcut araçlarda çalışan ve önemli adımlardan önce onay isteyen yapay zekâ ajanlarına dönüştürüyor. Sabit kapsam, sabit fiyat, 3 haftada canlıda.',
    jobTitle: 'Yapay Zekâ Mühendisi',
    srIntro:
      'Merhaba, ben Berkay Çubuk, yapay zekâ mühendisiyim. Ekibinizin her hafta yaptığı tekrar eden bir işi, araçlarınızda çalışan ve önemli her adımdan önce soran bir yapay zekâ ajanıyla otomatikleştiriyorum. Sabit fiyat, 3 haftada canlıda. Ücretsiz 20 dakikalık görüşme ayarlayın.',
    mailSubject: 'Tanışma görüşmesi',

    // Hero
    eyebrow: 'Berkay Çubuk · Yapay Zekâ Mühendisi',
    heroTitle: 'Ekibinizin tekrar eden işini yapay zekâyla otomatikleştiriyorum.',
    heroPoints: ['Tek iş', 'Sabit fiyat', '3 haftada canlıda'],
    heroSub: 'İşi zaten kullandığınız araçlarda yapan bir yapay zekâ ajanı geliştiriyorum. Önemli her adımdan önce size sorar.',
    heroCta: 'Ücretsiz 20 dk görüşme',
    heroNote: 'Taahhüt yok. Uygun değilse söylerim.',
    status: 'Bu çeyrek 2 lansman yeri kaldı',
    companiesLabel: 'Birlikte çalıştıklarım',

    examplesLabel: 'Neleri otomatikleştirebilirim',
    examples: [
      { title: 'Portaldan veri girişi', desc: 'Tedarikçi ya da devlet portallarındaki verileri tablonuza ya da ERP’nize aktarmak.' },
      { title: 'E-posta ve talepler', desc: 'Gelen e-postaları ya da talepleri ayıklamak, onayınıza sunulacak yanıtları hazırlamak.' },
      { title: 'Çift giriş', desc: 'Aynı bilgiyi birkaç farklı sisteme girmek.' },
      { title: 'Haftalık raporlar', desc: '3–4 araçtaki rakamları tek bir raporda toplamak.' },
    ],
    examplesNote: 'Her hafta tekrarlanıyor ve hep aynı adımları izliyorsa, büyük ihtimalle otomatikleştirilebilir.',

    processLabel: 'Nasıl çalışıyor',
    steps: [
      { name: 'Ücretsiz görüşme', meta: '20 dakika', desc: 'Ekibinizin vaktini yiyen işi anlatın. Uygun olup olmadığını söylerim.' },
      { name: 'Ücretsiz Keşif Günü', meta: '1 gün', desc: 'Bir günü ekibinizle geçiririm, ardından sabit fiyatlı tek sayfalık bir plan gönderirim.' },
      { name: 'Geliştirme ve yayın', meta: '3 hafta', desc: 'Geliştirir, gerçek işinizle test eder ve canlıya alırım. Size düşen yaklaşık 3 saat.' },
    ],

    includedLabel: 'Neler dahil',
    included: [
      'Bir işin baştan sona otomatikleşmesi',
      'Araçlarınızdan 3 tanesine kadar bağlantı',
      'Göndermeden, ödemeden ya da silmeden önce onay',
      'Şifrelerinizi asla görmez',
      'Ekibiniz için eğitim',
      'Yayından sonra 30 gün düzeltme',
    ],
    guaranteeLabel: 'Garanti',
    guarantee: '“Bitti”nin ne demek olduğunu yazılı olarak belirleriz. Oraya ulaşmazsa, ulaşana kadar ücretsiz çalışmaya devam ederim.',

    pricingLabel: 'Fiyat',
    priceLead: 'Lansman fiyatı',
    price: '€2.000’den başlayan',
    priceWas: 'normalde €4.000',
    priceNote: 'Bu çeyrekteki ilk 2 müşterim için.',
    payback: 'Bu işler bir ekibe genelde yılda €8.000’den fazla mesaiye mal oluyor. Proje çoğunlukla 2–3 ayda kendini çıkarıyor.',
    careNote: 'Yayından sonra isteğe bağlı aylık destek.',

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
      { q: 'Ya işim uygun değilse?', a: 'Görüşmede söylerim. Size hiçbir maliyeti olmaz.' },
      { q: 'Güvenli mi?', a: 'Yalnızca onayladığınız araçları kullanır, önemli her adımdan önce sorar ve her işlemi kaydeder. Girişi siz yaparsınız; şifrelerinizi hiç görmez.' },
      { q: 'İşletme maliyeti var mı?', a: 'Evet, kendi hesabınızdan ödenen küçük bir aylık yapay zekâ ve sunucu maliyeti. Planda tahminini veririm.' },
      { q: 'Yayından sonra ne oluyor?', a: 'Sistem sizin. İsteğe bağlı aylık destek, araçlarınız değiştiğinde çalışmaya devam etmesini sağlar.' },
      { q: 'Ajanslarla çalışıyor musunuz?', a: 'Evet, beyaz etiketle. Bana yazın, detayları göndereyim.' },
    ],

    endAsk: 'Hangi işle başlayalım?',
    endNote: 'Ücretsiz 20 dakikalık görüşme ayarlayın. Bir gün içinde dönüyorum.',
  },
} as const;
