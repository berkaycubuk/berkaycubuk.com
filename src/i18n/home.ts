// Homepage copy in every supported language.
//
// English lives at "/", Turkish at "/tr/". Adding a language means adding a key
// here, a page under src/pages/<lang>/index.astro, and an entry in LOCALES.
//
// Voice: one person talking, not a company. First person, contractions, plain
// words. Never "we" unless it means the reader and me together on a call.

export const LOCALES = [
  { code: 'en', label: 'EN', htmlLang: 'en', ogLocale: 'en_US', path: '/' },
  { code: 'tr', label: 'TR', htmlLang: 'tr', ogLocale: 'tr_TR', path: '/tr/' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

export const HOME = {
  en: {
    // <head>
    title: 'Berkay Çubuk — Monitoring & Internal Software',
    description:
      'I build software that shows you what your machines are doing, wherever they are. Fixed price, two weeks, and it keeps running without me.',
    jsonLdDescription:
      'Berkay Çubuk is a solo software engineer who builds monitoring software and internal tools for companies with machines, vehicles and equipment out in the field. Fixed price, delivered in two weeks.',
    jobTitle: 'Software Engineer',
    srIntro:
      "Hi, I'm Berkay Çubuk. I build software that shows companies what their machines are doing when nobody's standing next to them. I work alone, so you deal with me from the first call to the handover, and what I build keeps running without me.",

    // Masthead
    availability: "I'M TAKING ON NEW WORK · Q3 2026",
    heroTitle: 'I build software that shows you what your machines are doing.',
    heroLede:
      "Factory floor, job site, someone else's yard. If your equipment is somewhere you aren't, you usually find out about problems too late. I fix that. Fixed price, two weeks, and then it's yours. No retainer, nothing tying you to me.",
    bookCta: 'Book a free 20-minute call',
    heroNote: "I'LL SEND YOU A FIXED QUOTE WITHIN 24 HOURS",

    // What clients say
    clientsLabel: 'WHAT CLIENTS SAY',
    clientsNote: 'THEIR WORDS, NOT MINE',
    starsAria: '5 out of 5 stars',
    quotes: [
      {
        by: 'STAR · WEBSITE',
        text: '“Love the website, it’s exactly what I wanted. Delivered everything I asked and understood the style and flow of the site really well.”',
      },
      {
        by: 'EREN · CUSTOM WEB APP',
        text: '“I would highly recommend Berkay. He is very intelligent and good in his job… It been better than I thought. Don’t think a second if he says yes I can take this project.”',
      },
      {
        by: 'STAR · CUSTOM WEB APP',
        text: '“Delivered what I asked for perfectly again!! Would highly recommend.”',
      },
    ],

    // Services
    servicesLabel: 'WHAT I BUILD',
    servicesNote: 'FIXED PRICE · TWO WEEKS',
    servicesTitle:
      'You shouldn’t have to drive out there to find out if it’s running.',
    servicesLede:
      'When your machines are somewhere you aren’t, you hear about problems late, and usually from the customer. I build the thing that tells you first. We work out what you need on a free 20-minute call, I send you one number within a day, and you have it two weeks later. That number is what you pay.',
    services: [
      {
        name: 'Monitoring and alerts',
        desc: 'A live view of your machines, sensors or vehicles, wherever they happen to be. Set a limit and you hear about it before your customer does. I’ve been doing MQTT and IoT work for years.',
      },
      {
        name: 'Internal tools',
        desc: 'Job tracking, maintenance logs, service scheduling. Usually the things your spreadsheet stopped coping with a while ago.',
      },
      {
        name: 'Automations',
        desc: 'Connecting up the systems you already have, so nobody on your team is retyping the same numbers into two of them.',
      },
    ],

    // How it works
    processLabel: 'HOW IT WORKS',
    processNote: 'WE TALK → I QUOTE → I BUILD → YOU KEEP IT',
    steps: [
      {
        name: 'We talk for 20 minutes',
        desc: 'You tell me what’s slowing you down. We work out what to build right there on the call. Free, and I won’t chase you afterwards.',
      },
      {
        name: 'I send you one number',
        desc: 'In writing, within a day. If you want something different later, I’ll price that separately. You won’t get a surprise bill from me.',
      },
      {
        name: 'I build it in two weeks',
        desc: 'You see it coming together as I go. What you get at the end is software that runs, not a demo or a slide deck.',
      },
      {
        name: 'You keep it',
        desc: 'Documented and running. It works without me, and you don’t have to pay me every month to keep it alive.',
      },
    ],

    // Who you're hiring
    whoLabel: 'WHO YOU’RE HIRING',
    whoNote: 'JUST ME',
    whoTitle: 'It’s just me.',
    whoLedeBefore:
      'I’m Berkay, a software engineer, and I work on my own. So the person you talk to on the call is the person who designs it, writes it, and answers the email when something breaks two months later. I also run ',
    whoLedeAfter:
      ', which companies use to watch their own device fleets. That means I’m running monitoring software in production every day, not just building it for other people.',

    // Start a project
    ctaLabel: 'GET IN TOUCH',
    ctaNote: 'I HAVE ROOM THIS QUARTER',
    ctaTitle: 'Tell me what’s going wrong.',
    ctaLede:
      'Twenty minutes on a call, one number within a day, working software two weeks later.',
    ctaFootnote: 'I WON’T PITCH YOU · I REPLY WITHIN A DAY',
  },

  tr: {
    // <head>
    title: 'Berkay Çubuk — Sahadaki Makineleriniz İçin Yazılım',
    description:
      'Makinelerinizin nerede olurlarsa olsunlar ne yaptığını gösteren yazılımlar yazıyorum. Sabit fiyat, iki hafta, ben olmadan da çalışmaya devam eder.',
    jsonLdDescription:
      'Berkay Çubuk, sahada makinesi, aracı ve ekipmanı olan şirketler için yazılım geliştiren bağımsız bir yazılım mühendisi. Makinelerin durumunu gösteren canlı panolar ve uyarılar, bir de bunların çevresindeki şirket içi araçlar. Sabit fiyat, iki haftada teslim.',
    jobTitle: 'Yazılım Mühendisi',
    srIntro:
      'Merhaba, ben Berkay Çubuk. Şirketlere, başında kimse yokken makinelerinin ne yaptığını gösteren yazılımlar yazıyorum. Tek başıma çalışıyorum, yani ilk görüşmeden teslime kadar muhatabınız benim ve yaptığım iş ben olmadan da çalışmaya devam ediyor.',

    // Masthead
    availability: 'YENİ İŞLERE AÇIĞIM · 2026 3. ÇEYREK',
    heroTitle: 'Makinelerinizin ne yaptığını size gösteren yazılımlar yazıyorum.',
    heroLede:
      'Fabrika, şantiye, başkasının deposu. Ekipmanınız sizin olmadığınız bir yerdeyse sorunları genelde çok geç duyuyorsunuz. Ben bunu çözüyorum. Sabit fiyat, iki hafta, sonrasında tamamen sizin. Aylık ödeme yok, sizi bana bağlayan bir şey yok.',
    bookCta: 'Ücretsiz 20 dakikalık görüşme ayarlayın',
    heroNote: '24 SAAT İÇİNDE SABİT TEKLİFİ GÖNDERİYORUM',

    // What clients say
    clientsLabel: 'MÜŞTERİLERİM NE DİYOR',
    clientsNote: 'KENDİ SÖZLERİ · İNGİLİZCE ORİJİNAL',
    starsAria: '5 üzerinden 5 yıldız',
    quotes: [
      {
        by: 'STAR · WEB SİTESİ',
        text: '“Love the website, it’s exactly what I wanted. Delivered everything I asked and understood the style and flow of the site really well.”',
      },
      {
        by: 'EREN · ÖZEL WEB UYGULAMASI',
        text: '“I would highly recommend Berkay. He is very intelligent and good in his job… It been better than I thought. Don’t think a second if he says yes I can take this project.”',
      },
      {
        by: 'STAR · ÖZEL WEB UYGULAMASI',
        text: '“Delivered what I asked for perfectly again!! Would highly recommend.”',
      },
    ],

    // Services
    servicesLabel: 'NELER YAPIYORUM',
    servicesNote: 'SABİT FİYAT · İKİ HAFTA',
    servicesTitle:
      'Çalışıp çalışmadığını anlamak için ta oraya kadar gitmeniz gerekmesin.',
    servicesLede:
      'Makineleriniz sizin olmadığınız bir yerdeyken sorunları geç duyuyorsunuz, çoğu zaman da müşteriden. Ben size önce haber veren şeyi yapıyorum. Neye ihtiyacınız olduğunu ücretsiz 20 dakikalık bir görüşmede çıkarıyoruz, bir gün içinde size tek bir rakam gönderiyorum, iki hafta sonra elinizde oluyor. O rakam ödeyeceğiniz rakamdır.',
    services: [
      {
        name: 'İzleme ve uyarılar',
        desc: 'Makinelerinizin, sensörlerinizin ya da araçlarınızın nerede olurlarsa olsunlar canlı görüntüsü. Bir sınır belirlersiniz, müşteriniz duymadan siz duyarsınız. Yıllardır MQTT ve IoT tarafında çalışıyorum.',
      },
      {
        name: 'Şirket içi araçlar',
        desc: 'İş takibi, bakım kayıtları, servis planlaması. Genelde Excel dosyanızın bir süredir altından kalkamadığı şeyler.',
      },
      {
        name: 'Otomasyonlar',
        desc: 'Zaten kullandığınız sistemleri birbirine bağlıyorum, böylece ekibinizden kimse aynı rakamları ikisine birden elle girmek zorunda kalmıyor.',
      },
    ],

    // How it works
    processLabel: 'NASIL İLERLİYOR',
    processNote: 'KONUŞURUZ → TEKLİF EDERİM → YAPARIM → SİZİN OLUR',
    steps: [
      {
        name: '20 dakika konuşuruz',
        desc: 'Sizi neyin yavaşlattığını anlatırsınız. Ne yapılacağını görüşme sırasında birlikte çıkarırız. Ücretsiz, sonrasında da peşinize düşmem.',
      },
      {
        name: 'Size tek bir rakam gönderirim',
        desc: 'Bir gün içinde, yazılı olarak. Sonradan başka bir şey isterseniz onu ayrıca fiyatlandırırım. Benden sürpriz fatura gelmez.',
      },
      {
        name: 'İki haftada yaparım',
        desc: 'İlerledikçe görürsünüz. Sonunda elinize çalışan bir yazılım geçer, demo ya da sunum değil.',
      },
      {
        name: 'Sizin olur',
        desc: 'Belgelenmiş ve çalışır halde. Ben olmadan da çalışır, ayakta kalsın diye bana her ay ödeme yapmanız gerekmez.',
      },
    ],

    // Who you're hiring
    whoLabel: 'KİMİNLE ÇALIŞIYORSUNUZ',
    whoNote: 'SADECE BEN',
    whoTitle: 'Sadece ben varım.',
    whoLedeBefore:
      'Ben Berkay, yazılım mühendisiyim ve tek başıma çalışıyorum. Yani görüşmede konuştuğunuz kişi, yazılımı tasarlayan, yazan ve iki ay sonra bir şey bozulduğunda e-postanıza cevap veren kişiyle aynı. Ayrıca şirketlerin kendi cihaz filolarını takip etmek için kullandığı ',
    whoLedeAfter:
      ' uygulamasını işletiyorum. Yani izleme yazılımını her gün canlıda çalıştırıyorum, sadece başkası için yazmıyorum.',

    // Start a project
    ctaLabel: 'BANA YAZIN',
    ctaNote: 'BU ÇEYREK YERİM VAR',
    ctaTitle: 'Neyin ters gittiğini anlatın.',
    ctaLede:
      'Yirmi dakikalık bir görüşme, bir gün içinde tek bir rakam, iki hafta sonra çalışan yazılım.',
    ctaFootnote: 'SATIŞ KONUŞMASI YAPMAM · BİR GÜN İÇİNDE DÖNERİM',
  },
} as const;
