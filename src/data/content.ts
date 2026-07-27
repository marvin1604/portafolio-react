import type { Locale, PortfolioContent } from "@/types/portfolio";

const sharedTechnologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Material UI",
  "Zustand",
  "Highcharts",
  "Recharts",
  "Node.js",
  "Express",
  "PostgreSQL",
  "GitHub",
  "Jira",
  "ClickUp",
];

export const portfolioContent: Record<Locale, PortfolioContent> = {
  it: {
    localeName: "Italiano",
    navigation: [
      { label: "Esperienza", href: "#esperienza" },
      { label: "Progetti", href: "#progetti" },
      { label: "Profilo", href: "#profilo" },
      { label: "Competenze", href: "#competenze" },
      { label: "Contatti", href: "#contatti" },
    ],
    actions: {
      downloadCv: "Scarica il CV",
      viewProjects: "Scopri i progetti",
      viewDemo: "Demo online",
      viewCode: "Codice sorgente",
      switchLanguage: "View in English",
    },
    hero: {
      eyebrow: "Full Stack Developer · Merate, Lombardia",
      title: "Sviluppatore Full Stack",
      highlight: "con una forte specializzazione Frontend",
      description:
        "Realizzo prodotti SaaS, dashboard interattive e applicazioni web data-driven con React, Next.js e TypeScript.",
      facts: [
        "3+ anni di esperienza professionale",
        "Disponibile in Italia",
        "In sede · Ibrido · Da remoto",
      ],
    },
    experience: {
      eyebrow: "Esperienza professionale",
      title: "Prodotti reali, impatto misurabile.",
      intro:
        "Lavoro su piattaforme customer experience multi-cliente, trasformando requisiti complessi in interfacce riutilizzabili e strumenti chiari per l'analisi dei dati.",
      items: [
        {
          role: "Full Stack Developer",
          company: "Scoops Xi",
          period: "Gennaio 2023 – Presente",
          location: "Da remoto · Cile",
          summary:
            "Sviluppatore Full Stack con focus principale sul frontend di una piattaforma SaaS dedicata alla customer experience.",
          achievements: [
            "Contributo a soluzioni di dashboard e survey utilizzate da circa 25 clienti in diversi settori.",
            "Sviluppo di widget per survey configurabili e integrabili tramite script JavaScript.",
            "Realizzazione di un sistema dinamico di landing page multi-cliente, configurato attraverso parametri URL.",
            "Creazione di una funzionalità per visualizzare e analizzare i risultati delle interazioni tra utenti e sistemi AI.",
            "Riduzione di circa il 50% del tempo necessario per configurare le dashboard.",
            "Implementazione di grafici, tabelle, indicatori e funzionalità avanzate di data visualization.",
            "Supporto all'onboarding degli sviluppatori frontend e guida tecnica a uno sviluppatore junior.",
          ],
          technologies: sharedTechnologies,
        },
      ],
    },
    projects: {
      eyebrow: "Progetti selezionati",
      title: "Costruire prodotti, non solo interfacce.",
      intro:
        "Una selezione concentrata su architettura frontend, visualizzazione dei dati e qualità dell'esperienza utente.",
      items: [
        {
          name: "Voce AI",
          eyebrow: "Customer Feedback Intelligence Platform",
          description:
            "Dashboard per esplorare recensioni, argomenti ricorrenti, segnali di sentiment e flussi di lavoro orientati agli insight.",
          status:
            "MVP frontend con dati demo. Backend, autenticazione e integrazioni AI live fanno parte della roadmap.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
          demoUrl: "https://voce-ai-one.vercel.app/",
          repositoryUrl: "https://github.com/marvin1604/voce-ai",
          image: "/images/voce-ai-overview.png",
          imageAlt: "Dashboard principale di Voce AI",
          featured: true,
        },
        {
          name: "Developer Portfolio",
          eyebrow: "Portfolio professionale bilingue",
          description:
            "Questo portfolio, ricostruito come prodotto moderno e accessibile, con contenuti tipizzati, SEO localizzato e architettura riutilizzabile.",
          status:
            "Progettato per presentare esperienza, impatto e progetti a aziende italiane e internazionali.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Accessibility"],
          repositoryUrl: "https://github.com/marvin1604/portafolio-react",
        },
      ],
    },
    about: {
      eyebrow: "Profilo",
      title: "Dal mondo dell'elettronica ai prodotti digitali.",
      paragraphs: [
        "Ho iniziato la mia carriera tecnica nell'elettronica industriale, lavorando con manutenzione elettronica, display LED, sensori, attuatori e sistemi di controllo.",
        "Successivamente sono passato allo sviluppo software e oggi lavoro principalmente su architetture frontend, dashboard interattive, componenti riutilizzabili e prodotti SaaS.",
        "Il mio background nell'elettronica mi ha dato un approccio pratico al troubleshooting, al pensiero sistemico e alla risoluzione dei problemi tecnici.",
      ],
      principles: ["Pensiero sistemico", "Qualità del prodotto", "Collaborazione tecnica"],
    },
    skills: {
      eyebrow: "Competenze",
      title: "Uno stack orientato al prodotto.",
      intro:
        "Tecnologie che utilizzo per realizzare interfacce scalabili, integrare servizi e trasformare dati complessi in esperienze comprensibili.",
      groups: [
        {
          title: "Frontend",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "HTML5",
            "CSS3",
            "Material UI",
            "Zustand",
            "Highcharts",
            "Recharts",
          ],
        },
        {
          title: "Backend e dati",
          items: ["Node.js", "Express", "REST API", "PostgreSQL", "pgAdmin"],
        },
        {
          title: "Strumenti e workflow",
          items: [
            "Git",
            "GitHub",
            "Jira",
            "ClickUp",
            "Vercel",
            "Netlify",
            "Sprint Agile",
            "Workflow basati su ticket",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      title: "Costruiamo qualcosa di utile.",
      description:
        "Sono disponibile per opportunità frontend, full stack e web development in Italia, in sede, in modalità ibrida o da remoto.",
      emailLabel: "Email",
      locationLabel: "Posizione",
      location: "Merate, Lombardia, Italia",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Oggetto",
        message: "Messaggio",
        submit: "Invia il messaggio",
      },
    },
    footer: {
      availability: "Disponibile per nuove opportunità in Italia.",
      rights: "Progettato e sviluppato da Walter Rodríguez.",
    },
    metadata: {
      title: "Walter Rodríguez | Sviluppatore Full Stack",
      description:
        "Sviluppatore Full Stack con forte specializzazione Frontend. Realizzo prodotti SaaS, dashboard e applicazioni data-driven con React, Next.js e TypeScript.",
    },
  },
  en: {
    localeName: "English",
    navigation: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    actions: {
      downloadCv: "Download Italian CV",
      viewProjects: "View projects",
      viewDemo: "Live demo",
      viewCode: "Source code",
      switchLanguage: "Vedi in italiano",
    },
    hero: {
      eyebrow: "Full Stack Developer · Merate, Lombardy",
      title: "Full Stack Developer",
      highlight: "with a strong Frontend specialization",
      description:
        "I build SaaS products, interactive dashboards and data-driven web applications using React, Next.js and TypeScript.",
      facts: [
        "3+ years of professional experience",
        "Based in Italy",
        "Onsite · Hybrid · Remote",
      ],
    },
    experience: {
      eyebrow: "Professional experience",
      title: "Real products, measurable impact.",
      intro:
        "I work on multi-client customer experience platforms, turning complex requirements into reusable interfaces and clear data analysis tools.",
      items: [
        {
          role: "Full Stack Developer",
          company: "Scoops Xi",
          period: "January 2023 – Present",
          location: "Remote · Chile",
          summary:
            "Full Stack Developer working mainly on frontend development for a SaaS customer experience platform.",
          achievements: [
            "Contributed to dashboard and survey solutions for approximately 25 clients across different industries.",
            "Built configurable survey widgets embeddable through JavaScript scripts.",
            "Developed a dynamic multi-client landing page system driven by URL-based configuration.",
            "Created a feature for visualizing and analyzing AI-user interaction results.",
            "Reduced dashboard configuration time by approximately 50%.",
            "Implemented charts, tables, indicators and data visualization features.",
            "Supported the onboarding of frontend developers and currently provide technical guidance to a junior frontend developer.",
          ],
          technologies: sharedTechnologies,
        },
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Building products, not just interfaces.",
      intro:
        "A focused selection highlighting frontend architecture, data visualization and thoughtful user experience.",
      items: [
        {
          name: "Voce AI",
          eyebrow: "Customer Feedback Intelligence Platform",
          description:
            "Customer feedback intelligence dashboard for exploring reviews, recurring topics, sentiment signals and actionable insight workflows.",
          status:
            "Frontend MVP with demo data. Backend, authentication and live AI integrations are part of the roadmap.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
          demoUrl: "https://voce-ai-one.vercel.app/",
          repositoryUrl: "https://github.com/marvin1604/voce-ai",
          image: "/images/voce-ai-overview.png",
          imageAlt: "Voce AI overview dashboard",
          featured: true,
        },
        {
          name: "Developer Portfolio",
          eyebrow: "Bilingual professional portfolio",
          description:
            "This portfolio, rebuilt as a modern and accessible product with typed content, localized SEO and reusable architecture.",
          status:
            "Designed to present experience, impact and selected work to Italian and international companies.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Accessibility"],
          repositoryUrl: "https://github.com/marvin1604/portafolio-react",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "From electronics to digital products.",
      paragraphs: [
        "I started my technical career in industrial electronics, working with electronic maintenance, LED displays, sensors, actuators and control systems.",
        "Later, I transitioned into software development and now work primarily on frontend architecture, interactive dashboards, reusable components and SaaS products.",
        "My background in electronics has given me a practical approach to troubleshooting, systems thinking and technical problem solving.",
      ],
      principles: ["Systems thinking", "Product quality", "Technical collaboration"],
    },
    skills: {
      eyebrow: "Skills",
      title: "A product-focused stack.",
      intro:
        "Technologies I use to build scalable interfaces, integrate services and turn complex data into understandable experiences.",
      groups: [
        {
          title: "Frontend",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "HTML5",
            "CSS3",
            "Material UI",
            "Zustand",
            "Highcharts",
            "Recharts",
          ],
        },
        {
          title: "Backend and data",
          items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "pgAdmin"],
        },
        {
          title: "Tools and workflow",
          items: [
            "Git",
            "GitHub",
            "Jira",
            "ClickUp",
            "Vercel",
            "Netlify",
            "Agile sprints",
            "Ticket-based workflows",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      description:
        "I am open to frontend, full stack and web development opportunities in Italy, including onsite, hybrid and remote roles.",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Merate, Lombardy, Italy",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send message",
      },
    },
    footer: {
      availability: "Open to new opportunities in Italy.",
      rights: "Designed and developed by Walter Rodríguez.",
    },
    metadata: {
      title: "Walter Rodríguez | Full Stack Developer",
      description:
        "Full Stack Developer with a strong Frontend specialization, building SaaS products, dashboards and data-driven applications with React, Next.js and TypeScript.",
    },
  },
};

export const supportedLocales: Locale[] = ["it", "en"];

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}
