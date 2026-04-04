export const profile = {
  image: '/msvdev.jpg',
  fullName: 'Sercan Var',
  role: 'Full Stack Developer',
  bio: {
    tr: [
      'Full Stack Developer ve Bug Bounty Hunter olarak, kullanıcı odaklı ve güvenli dijital deneyimler geliştirmeye odaklanıyorum. Modern web ve mobil uygulamaları, estetik bir tasarım anlayışını sağlam bir mimariyle birleştirerek hayata geçirmeyi hedefliyorum.',
      'Projelerimde <u>AI-Driven Development</u> gibi modern yaklaşımları benimseyerek verimli çözümler üretiyorum. Yazdığım her kod satırında, <u>Clean Code</u>, <u>DRY</u> ve <u>KISS</u> gibi temel yazılım prensiplerini rehber alarak, test edilebilir ve sürdürülebilir bir yapı oluşturmaya özen gösteriyorum.',
      'Geliştirme sürecine bütüncül bir yaklaşımla, algoritmaları ve yazılımın temelini oluşturan mimari desenleri ve güvenlik prensiplerini derinlemesine inceliyorum. <u>DDD</u>, <u>TDD</u>, <u>SOA</u>, <u>Monolithic Arch</u>, <u>Microservices</u> gibi mimari yaklaşımlardan <u>OWASP Top 10</u> zafiyetlerine kadar geniş bir yelpazede kendimi sürekli geliştirerek, daha dayanıklı ve performanslı sistemler yaratmayı hedefliyorum.'
    ],
    en: [
      'As a Full Stack Developer and Bug Bounty Hunter, I focus on developing user-centric and secure digital experiences. I aim to bring modern web and mobile applications to life by combining an aesthetic design sense with a robust architecture.',
      'In my projects, I build efficient solutions by adopting modern approaches like <u>AI-Driven Development</u>. In every line of code I write, I take care to build a testable and sustainable structure, guided by fundamental software principles such as <u>Clean Code</u>, <u>DRY</u>, and <u>KISS</u>.',
      'With a holistic approach to the development process, I delve deep into algorithms, along with the architectural patterns and security principles that form the foundation of software. By continuously improving myself across a wide spectrum—from architectural approaches like <u>DDD</u>, <u>TDD</u>, <u>SOA</u>, <u>Monolithic Arch</u>, and <u>Microservices</u> to the <u>OWASP Top 10</u> vulnerabilities—I aim to create more resilient and high-performing systems.'
    ],
    de: [
      'Als Full Stack Developer und Bug Bounty Hunter konzentriere ich mich auf die Entwicklung von nutzerzentrierten und sicheren digitalen Erlebnissen. Mein Ziel ist es, moderne Web- und Mobilanwendungen zum Leben zu erwecken, indem ich ästhetisches Designverständnis mit einer robusten Architektur verbinde.',
      'In meinen Projekten schaffe ich effiziente Lösungen durch die Anwendung moderner Ansätze wie <u>AI-Driven Development</u>. Bei jeder Codezeile, die ich schreibe, achte ich darauf, eine testbare und wartbare Struktur aufzubauen, geleitet von grundlegenden Softwareprinzipien wie <u>Clean Code</u>, <u>DRY</u> und <u>KISS</u>.',
      'Mit einem ganzheitlichen Ansatz für den Entwicklungsprozess befasse ich mich intensiv mit Algorithmen sowie den Architekturmustern und Sicherheitsprinzipien, die das Fundament von Software bilden. Indem ich mich in einem breiten Spektrum – von Architekturen wie <u>DDD</u>, <u>TDD</u>, <u>SOA</u>, <u>Monolithic Arch</u> und <u>Microservices</u> bis hin zu den <u>OWASP Top 10</u>-Schwachstellen – kontinuierlich weiterentwickle, strebe ich danach, widerstandsfähigere und leistungsfähigere Systeme zu schaffen.'
    ]
  }
}

export const projectGroups = [
  {
    id: 'freelance',
    titleKey: 'sections.freelance',
    projects: [
      {
        name: 'The Cup Coffee - QR Menu',
        subtitle: {
          tr: 'The Cup Coffee için özel olarak geliştirilmiş modern ve temassız bir dijital QR menü çözümü. Bu uygulama, müşterilerin basit bir QR kod taramasıyla menüye anında erişimini sağlayarak servis hızını ve kullanıcı deneyimini iyileştirir. Her cihaza uyumlu (responsive) tasarımıyla kusursuz bir gezinme deneyimi sunar.',
          en: 'A modern and contactless digital QR menu solution developed exclusively for The Cup Coffee. This application enhances service speed and user experience by allowing customers to instantly access the menu with a simple QR code scan. Its fully responsive design ensures a seamless browsing experience on any device.',
          de: 'Eine moderne und kontaktlose digitale QR-Menülösung, die exklusiv für The Cup Coffee entwickelt wurde. Diese Anwendung verbessert die Servicegeschwindigkeit und das Benutzererlebnis, indem sie den Kunden durch einen einfachen QR-Code-Scan sofortigen Zugriff auf die Speisekarte ermöglicht. Das vollständig responsive Design gewährleistet ein nahtloses Surferlebnis auf jedem Gerät.'
        },
        url: 'https://cupcoffee.shop',
        icon: '/tcc.png',
      }
    ],
  },
  {
    id: 'opensource',
    titleKey: 'sections.opensource',
    projects: [
      {
        name: 'Take Action Todo',
        subtitle: {
          tr: 'Next.js ile geliştirilmiş, minimalist ve modern bir yapılacaklar listesi (todo) uygulaması. Kullanıcıların görevlerini verimli bir şekilde yönetmesine olanak tanır ve verileri doğrudan tarayıcıda saklayarak (local storage) anında erişim sunar. Bu proje, temiz bir arayüzle performansı birleştiren bir görev yönetimi çözümü sunmaktadır.',
          en: 'A minimalist and modern to-do list application built with Next.js. It enables users to manage their tasks efficiently, offering instant access by storing data directly in the browser (local storage). This project provides a task management solution that combines a clean interface with high performance.',
          de: 'Eine minimalistische und moderne To-Do-Listen-Anwendung, die mit Next.js erstellt wurde. Sie ermöglicht es Benutzern, ihre Aufgaben effizient zu verwalten, und bietet durch die direkte Speicherung der Daten im Browser (Local Storage) sofortigen Zugriff. Dieses Projekt bietet eine Aufgabenverwaltungslösung, die eine saubere Benutzeroberfläche mit hoher Leistung kombiniert.'
        },
        url: 'https://take-action-todo.vercel.app',
        icon: '/ta-logo.png',
      },
      {
        name: 'Binance Live Chart',
        subtitle: {
          tr: 'Binance WebSocket API\'sini kullanarak anlık kripto para verilerini görselleştiren açık kaynaklı bir proje. Bu araç, seçilen kripto paraların fiyat hareketlerini gerçek zamanlı grafikler üzerinde takip etme imkanı sunar. Yatırımcılar için hızlı ve güvenilir bir veri akışı sağlamak amacıyla tasarlanmıştır.',
          en: 'An open-source project that visualizes live cryptocurrency data using the Binance WebSocket API. This tool allows users to track the price movements of selected cryptocurrencies on real-time charts. It is designed to provide a fast and reliable data stream for traders and investors.',
          de: 'Ein Open-Source-Projekt, das Live-Kryptowährungsdaten mithilfe der Binance WebSocket API visualisiert. Dieses Tool ermöglicht es Benutzern, die Preisbewegungen ausgewählter Kryptowährungen auf Echtzeit-Charts zu verfolgen. Es wurde entwickelt, um einen schnellen und zuverlässigen Datenstrom für Händler und Investoren bereitzustellen.'
        },
        url: 'https://binance-live-chart.vercel.app',
        icon: '/blc-logo.png',
      },
    ],
  },
]

export const finalLinks = [
    {
      labelKey: 'links.mail',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=msercanvar@gmail.com',
      id: 'mail'
    },
    {
      labelKey: 'links.linkedin',
      url: 'https://www.linkedin.com/in/sercan-var',
      id: 'linkedin'
    },
    {
      labelKey: 'links.github',
      url: 'https://github.com/sercanvr',
      id: 'github'
    },
    {
      labelKey: 'links.leetcode',
      url: 'https://leetcode.com/msvdev',
      id: 'leetcode'
    },
    {
      labelKey: 'links.bugcrowd',
      url: 'https://bugcrowd.com/h/msvdev',
      id: 'bugcrowd'
    }
]
