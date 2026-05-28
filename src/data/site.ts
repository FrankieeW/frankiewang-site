export const locales = ["en", "zh", "fr"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中",
  fr: "FR",
};

export const defaultLocale: Locale = "en";

const sharedProfile = {
  name: "Feng-Cheng Frankie Wang",
  location: "London",
  institution: "Imperial College London",
  departmentUrl: "https://www.imperial.ac.uk/mathematics/",
  groupUrl: "https://www.imperial.ac.uk/pure-mathematics/",
  email: "contact@frankie.wang",
  github: "https://github.com/FrankieeW",
  githubAcademic: "https://github.com/WangFrankie",
  avatar: "/avatar.png",
};

export const projectCategories = ["academic", "software"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

const projectLinks = {
  quadraticNumberFields: "https://github.com/FrankieeW/QuadraticNumberFields",
  lmfdbCli: "https://github.com/FrankieeW/lmfdb-cli",
  feader: "https://github.com/FrankieeW/Feader",
  agentSkills: "https://github.com/FrankieeW/agent-skills",
};

export const site = {
  en: {
    htmlLang: "en",
    nav: {
      academic: "Academic",
      notes: "Notes",
      projects: "Projects",
      contact: "Contact",
    },
    footer: "Last updated 2026",
    profile: {
      ...sharedProfile,
      department: "Department of Mathematics",
      title: "Graduate student in pure mathematics",
      summary:
        "I am a master's student in pure mathematics at Imperial College London. My interests are in algebra, algebraic number theory, formalised mathematics, and mathematical physics.",
      current:
        "I use this site as an index for my academic work, notes in progress, and small software projects. If you want to get in touch, my email is below.",
      avatarAlt: "Profile photo",
    },
    sections: {
      academic: {
        title: "Academic",
        intro: "Research interests and education.",
        interestsTitle: "Research interests",
        educationTitle: "Education",
        currentCoursesTitle: "Current coursework",
        all: "Academic page →",
      },
      notes: {
        title: "Notes and writing",
        intro: "Drafts, working notes, and longer essays.",
        placeholder: "TODO — notes and writing are coming soon.",
        all: "All notes →",
        readMore: "Read note →",
        draftNotice: "This note is still in progress.",
      },
      projects: {
        title: "Projects",
        intro: "Code I work on, split between academic formalisation and general software.",
        all: "All projects →",
      },
      contact: {
        title: "Contact",
        intro: "The best way to reach me is by email.",
        githubMain: "main",
        githubAcademic: "academic",
      },
    },
    academicPage: {
      title: "Academic",
      description: "Research interests, education, and academic activity.",
      heading: "Academic",
      lead:
        "Research interests, education, and ongoing academic work in algebra, number theory, and formalised mathematics.",
    },
    notesPage: {
      title: "Notes",
      description: "Notes and writing by Feng-Cheng Frankie Wang.",
      heading: "Notes and writing",
      lead:
        "Drafts, working notes, and longer essays. Most are still in progress and will keep changing.",
      placeholder: "TODO — notes and writing are coming soon.",
    },
    researchInterests: [
      {
        title: "Algebraic number theory",
        text: "Class field theory, p-adic methods, and the arithmetic of number fields.",
      },
      {
        title: "Formalised mathematics",
        text: "Reading and writing proofs in Lean 4 / mathlib, especially in algebra and number theory.",
      },
      {
        title: "Mathematical physics",
        text: "A developing interest in the algebraic and geometric structures behind physical theories.",
      },
    ],
    education: [
      {
        period: "2025 – 2026",
        degree: "MSc Pure Mathematics",
        institution: "Imperial College London",
        note: "Department of Mathematics.",
        courses: [
          "Algebraic Curves",
          "Galois Theory",
          "Commutative Algebra",
          "Lie Algebras",
          "Algebraic Number Theory",
          "Algebra 4 (in practice, Homological Algebra)",
          "Formalising Mathematics",
          "Algebraic Geometry",
        ],
      },
      {
        period: "2021 – 2025",
        degree: "BSc Mathematics, Dual Degree Programme",
        institution: "University of Leicester & Dalian University of Technology",
        note: "A mathematics core supplemented with specialist modules in physics and computer science.",
        tracks: [
          {
            school: "University of Leicester",
            programme: "BSc Mathematics",
            result: "First class, 85+",
          },
          {
            school: "Dalian University of Technology",
            programme: "Foundations of Mathematical Science (数理基础科学)",
            result: "90+",
          },
        ],
      },
    ],
    notes: [],
    projectsPage: {
      title: "Projects",
      description: "Code projects by Feng-Cheng Frankie Wang.",
      heading: "Projects",
      lead:
        "Code I work on, split between academic formalisation and general-purpose software. Each links out to its GitHub repository.",
    },
    projectCategoryLabels: {
      academic: "Academic",
      software: "Software",
    },
    projects: [
      {
        name: "QuadraticNumberFields",
        category: "academic",
        language: "Lean 4",
        url: projectLinks.quadraticNumberFields,
        description: "A formalisation of quadratic number fields in Lean 4.",
      },
      {
        name: "lmfdb-cli",
        category: "academic",
        language: "Rust",
        url: projectLinks.lmfdbCli,
        description:
          "A command-line tool for querying the LMFDB (L-functions and Modular Forms Database).",
      },
      {
        name: "Feader",
        category: "software",
        language: "Rust",
        url: projectLinks.feader,
        description:
          "An AI-native, Web3-friendly RSS reader for fast-moving information streams across the open web.",
      },
      {
        name: "agent-skills",
        category: "software",
        language: "Shell",
        url: projectLinks.agentSkills,
        description: "A collection of reusable agent skills for AI coding assistants.",
      },
    ],
  },
  zh: {
    htmlLang: "zh-CN",
    nav: {
      academic: "学术",
      notes: "笔记",
      projects: "项目",
      contact: "联系",
    },
    footer: "最近更新 2026",
    profile: {
      ...sharedProfile,
      department: "数学系",
      title: "纯数学方向研究生",
      summary:
        "我是 Imperial College London 纯数学硕士学生，目前的兴趣方向是代数、代数数论、形式化数学和数学物理。",
      current:
        "这里用作我学术工作、笔记和小工具项目的索引。如果想联系我，可以发邮件到下方地址。",
      avatarAlt: "头像",
    },
    sections: {
      academic: {
        title: "学术",
        intro: "研究兴趣与学习经历。",
        interestsTitle: "研究兴趣",
        educationTitle: "学习经历",
        currentCoursesTitle: "本学期课程",
        all: "学术页面 →",
      },
      notes: {
        title: "笔记与写作",
        intro: "草稿、长期笔记与文章。",
        placeholder: "TODO —— 笔记与写作即将上线。",
        all: "全部笔记 →",
        readMore: "阅读笔记 →",
        draftNotice: "这篇笔记仍在推进中。",
      },
      projects: {
        title: "项目",
        intro: "我在做的代码项目，分为学术形式化和通用软件两类。",
        all: "全部项目 →",
      },
      contact: {
        title: "联系",
        intro: "最方便的联系方式是邮件。",
        githubMain: "日常",
        githubAcademic: "学术",
      },
    },
    academicPage: {
      title: "学术",
      description: "研究兴趣、学习经历与学术活动。",
      heading: "学术",
      lead: "围绕代数、数论和形式化数学的研究兴趣与学习经历。",
    },
    notesPage: {
      title: "笔记",
      description: "Feng-Cheng Frankie Wang 的笔记与写作。",
      heading: "笔记与写作",
      lead: "草稿、长期笔记和文章。大多仍在推进中，会不断更新。",
      placeholder: "TODO —— 笔记与写作即将上线。",
    },
    researchInterests: [
      {
        title: "代数数论",
        text: "类域论、p-adic 方法，以及数域的算术。",
      },
      {
        title: "形式化数学",
        text: "用 Lean 4 / mathlib 阅读和书写代数与数论中的证明。",
      },
      {
        title: "数学物理",
        text: "对物理理论背后代数与几何结构的持续兴趣。",
      },
    ],
    education: [
      {
        period: "2025 – 2026",
        degree: "纯数学硕士 (MSc Pure Mathematics)",
        institution: "Imperial College London",
        note: "数学系。",
        courses: [
          "Algebraic Curves（代数曲线）",
          "Galois Theory（伽罗瓦理论）",
          "Commutative Algebra（交换代数）",
          "Lie Algebras（李代数）",
          "Algebraic Number Theory（代数数论）",
          "Algebra 4（实际上是同调代数）",
          "Formalising Mathematics（形式化数学）",
          "代数几何 (Algebraic Geometry)",
        ],
      },
      {
        period: "2021 – 2025",
        degree: "数学本科（中外联合培养双学位）",
        institution: "University of Leicester & 大连理工大学",
        note: "课程以数学为主干，并包含物理与计算机方向的专业课。",
        tracks: [
          {
            school: "University of Leicester",
            programme: "BSc Mathematics",
            result: "First class（一等学位），85+",
          },
          {
            school: "大连理工大学",
            programme: "数理基础科学 (Foundations of Mathematical Science)",
            result: "90+",
          },
        ],
      },
    ],
    notes: [],
    projectsPage: {
      title: "项目",
      description: "Feng-Cheng Frankie Wang 的代码项目。",
      heading: "项目",
      lead: "我在做的代码项目，分为学术形式化和通用软件两类。每个项目都链接到对应的 GitHub 仓库。",
    },
    projectCategoryLabels: {
      academic: "学术",
      software: "软件",
    },
    projects: [
      {
        name: "QuadraticNumberFields",
        category: "academic",
        language: "Lean 4",
        url: projectLinks.quadraticNumberFields,
        description: "用 Lean 4 对二次数域进行形式化。",
      },
      {
        name: "lmfdb-cli",
        category: "academic",
        language: "Rust",
        url: projectLinks.lmfdbCli,
        description: "查询 LMFDB（L-函数与模形式数据库）的命令行工具。",
      },
      {
        name: "Feader",
        category: "software",
        language: "Rust",
        url: projectLinks.feader,
        description: "面向开放网络快速信息流的 AI 原生、Web3 友好的 RSS 阅读器。",
      },
      {
        name: "agent-skills",
        category: "software",
        language: "Shell",
        url: projectLinks.agentSkills,
        description: "面向 AI 编程助手的一组可复用 agent skills。",
      },
    ],
  },
  fr: {
    htmlLang: "fr",
    nav: {
      academic: "Académique",
      notes: "Notes",
      projects: "Projets",
      contact: "Contact",
    },
    footer: "Dernière mise à jour 2026",
    profile: {
      ...sharedProfile,
      department: "Département de mathématiques",
      title: "Étudiant en mathématiques pures",
      summary:
        "Je suis étudiant en master de mathématiques pures à Imperial College London. Mes intérêts portent sur l'algèbre, la théorie algébrique des nombres, les mathématiques formalisées et la physique mathématique.",
      current:
        "Ce site sert d'index pour mon travail académique, mes notes en cours et quelques petits projets logiciels. Pour me contacter, mon adresse e-mail est ci-dessous.",
      avatarAlt: "Photo de profil",
    },
    sections: {
      academic: {
        title: "Académique",
        intro: "Intérêts de recherche et parcours universitaire.",
        interestsTitle: "Intérêts de recherche",
        educationTitle: "Parcours universitaire",
        currentCoursesTitle: "Cours suivis cette année",
        all: "Page académique →",
      },
      notes: {
        title: "Notes et écrits",
        intro: "Brouillons, notes de travail et essais.",
        placeholder: "TODO — notes et écrits à venir.",
        all: "Toutes les notes →",
        readMore: "Lire la note →",
        draftNotice: "Cette note est encore en cours.",
      },
      projects: {
        title: "Projets",
        intro: "Le code sur lequel je travaille, entre formalisation académique et logiciels généraux.",
        all: "Tous les projets →",
      },
      contact: {
        title: "Contact",
        intro: "Le mieux est de m'écrire par e-mail.",
        githubMain: "principal",
        githubAcademic: "académique",
      },
    },
    academicPage: {
      title: "Académique",
      description: "Intérêts de recherche, parcours universitaire et travaux académiques.",
      heading: "Académique",
      lead:
        "Intérêts de recherche et parcours universitaire en algèbre, théorie des nombres et mathématiques formalisées.",
    },
    notesPage: {
      title: "Notes",
      description: "Notes et écrits de Feng-Cheng Frankie Wang.",
      heading: "Notes et écrits",
      lead:
        "Brouillons, notes de travail et essais. La plupart sont en cours et continueront d'évoluer.",
      placeholder: "TODO — notes et écrits à venir.",
    },
    researchInterests: [
      {
        title: "Théorie algébrique des nombres",
        text: "Théorie du corps de classes, méthodes p-adiques et arithmétique des corps de nombres.",
      },
      {
        title: "Mathématiques formalisées",
        text: "Lecture et écriture de preuves dans Lean 4 / mathlib, en algèbre et théorie des nombres.",
      },
      {
        title: "Physique mathématique",
        text: "Un intérêt naissant pour les structures algébriques et géométriques des théories physiques.",
      },
    ],
    education: [
      {
        period: "2025 – 2026",
        degree: "MSc Pure Mathematics",
        institution: "Imperial College London",
        note: "Département de mathématiques.",
        courses: [
          "Courbes algébriques",
          "Théorie de Galois",
          "Algèbre commutative",
          "Algèbres de Lie",
          "Théorie algébrique des nombres",
          "Algèbre 4 (en pratique, algèbre homologique)",
          "Mathématiques formalisées",
          "Géométrie algébrique",
        ],
      },
      {
        period: "2021 – 2025",
        degree: "BSc Mathematics (programme de double diplôme)",
        institution: "University of Leicester & Dalian University of Technology",
        note: "Programme centré sur les mathématiques, complété par des modules spécialisés en physique et en informatique.",
        tracks: [
          {
            school: "University of Leicester",
            programme: "BSc Mathematics",
            result: "First class (mention très bien), 85+",
          },
          {
            school: "Dalian University of Technology",
            programme: "Fondements des sciences mathématiques (数理基础科学)",
            result: "90+",
          },
        ],
      },
    ],
    notes: [],
    projectsPage: {
      title: "Projets",
      description: "Projets de code de Feng-Cheng Frankie Wang.",
      heading: "Projets",
      lead:
        "Le code sur lequel je travaille, entre formalisation académique et logiciels généraux. Chacun renvoie à son dépôt GitHub.",
    },
    projectCategoryLabels: {
      academic: "Académique",
      software: "Logiciel",
    },
    projects: [
      {
        name: "QuadraticNumberFields",
        category: "academic",
        language: "Lean 4",
        url: projectLinks.quadraticNumberFields,
        description: "Une formalisation des corps quadratiques en Lean 4.",
      },
      {
        name: "lmfdb-cli",
        category: "academic",
        language: "Rust",
        url: projectLinks.lmfdbCli,
        description:
          "Un outil en ligne de commande pour interroger la LMFDB (base de données des fonctions L et des formes modulaires).",
      },
      {
        name: "Feader",
        category: "software",
        language: "Rust",
        url: projectLinks.feader,
        description:
          "Un lecteur RSS IA-natif et compatible Web3 pour les flux d'information du web ouvert.",
      },
      {
        name: "agent-skills",
        category: "software",
        language: "Shell",
        url: projectLinks.agentSkills,
        description: "Un ensemble de compétences d'agent réutilisables pour les assistants de code IA.",
      },
    ],
  },
} as const;

export function getLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export function localePath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return normalized ? `/${locale}/${normalized}` : `/${locale}/`;
}
