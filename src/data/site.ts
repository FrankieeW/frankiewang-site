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

const productSlugs = {
  leanStudyKit: "lean-study-kit",
  researchHomebase: "research-homebase",
  dailyProof: "daily-proof",
};

const noteSlugs = {
  leanFormalisation: "lean-formalisation",
  classFieldTheory: "class-field-theory",
  studyTools: "study-tools",
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
        intro: "Drafts, working notes, and longer essays. Most are still in progress.",
        all: "All notes →",
        readMore: "Read note →",
        draftNotice: "This note is still in progress.",
      },
      projects: {
        title: "Projects",
        intro: "Small tools I build for my own study and research.",
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
    notes: [
      {
        slug: noteSlugs.leanFormalisation,
        title: "Notes on formalising algebraic number theory in Lean",
        meta: "Draft",
        text: "What changes when definitions and proofs are written for a proof assistant.",
      },
      {
        slug: noteSlugs.classFieldTheory,
        title: "A working notebook on class field theory",
        meta: "Notes",
        text: "Definitions, examples, and proof patterns I keep returning to.",
      },
      {
        slug: noteSlugs.studyTools,
        title: "Small tools for mathematical study",
        meta: "Essay",
        text: "Why I build my own study and research software, and what I have learned.",
      },
    ],
    productsPage: {
      title: "Projects",
      description: "Projects and experiments by Feng-Cheng Frankie Wang.",
      heading: "Projects and experiments",
      lead:
        "Small tools and project ideas around learning, research, and mathematical practice. Each one starts from a repeated friction in study or writing.",
    },
    productLabels: {
      status: "Status",
      audience: "Audience",
      shape: "Shape",
      problem: "Problem",
      solution: "Solution",
      features: "Feature set",
    },
    products: [
      {
        slug: productSlugs.leanStudyKit,
        name: "Lean Study Kit",
        eyebrow: "Learning tool",
        tagline: "A structured workspace for turning theorem-proving notes into repeatable practice.",
        status: "Prototype",
        audience: "Students and researchers learning Lean and mathlib.",
        problem:
          "Dense formalization notes are hard to revisit because examples, tactics, references, and mistakes live in different places.",
        solution:
          "A compact study workflow with concept pages, proof attempts, review queues, and links back to source files.",
        features: ["Concept cards", "Proof attempt journal", "Review queue", "Reference links"],
      },
      {
        slug: productSlugs.researchHomebase,
        name: "Research Homebase",
        eyebrow: "Knowledge system",
        tagline: "A personal research dashboard for papers, notes, tasks, and open questions.",
        status: "Design",
        audience: "Independent researchers managing many small threads of inquiry.",
        problem:
          "Research momentum gets lost when papers, partial notes, and next actions are scattered across tools.",
        solution:
          "A lightweight hub that turns reading notes into linked questions, follow-ups, and publishable artifacts.",
        features: ["Paper queue", "Question tracker", "Note graph", "Weekly review"],
      },
      {
        slug: productSlugs.dailyProof,
        name: "Daily Proof",
        eyebrow: "Habit product",
        tagline: "A calmer daily practice loop for math problem solving and proof writing.",
        status: "Exploration",
        audience: "People building durable mathematical taste and problem-solving discipline.",
        problem:
          "Mathematical practice is easiest to abandon when progress is invisible and exercises are not matched to energy.",
        solution:
          "A daily queue that balances warmups, deeper problems, reflection, and spaced repetition.",
        features: ["Daily queue", "Energy-aware sessions", "Reflection prompts", "Progress archive"],
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
        intro: "草稿、长期笔记与文章，多数仍在推进中。",
        all: "全部笔记 →",
        readMore: "阅读笔记 →",
        draftNotice: "这篇笔记仍在推进中。",
      },
      projects: {
        title: "项目",
        intro: "为自己的学习和研究写的小工具。",
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
    notes: [
      {
        slug: noteSlugs.leanFormalisation,
        title: "代数数论的形式化笔记",
        meta: "草稿",
        text: "为证明助手书写定义和证明时，数学实践会发生哪些变化。",
      },
      {
        slug: noteSlugs.classFieldTheory,
        title: "类域论工作笔记",
        meta: "笔记",
        text: "反复使用的定义、例子和证明模式。",
      },
      {
        slug: noteSlugs.studyTools,
        title: "为数学学习设计小工具",
        meta: "随笔",
        text: "为什么自己写学习和研究工具，以及从中学到的事。",
      },
    ],
    productsPage: {
      title: "项目",
      description: "Feng-Cheng Frankie Wang 的项目与实验。",
      heading: "项目与实验",
      lead: "围绕学习、研究和数学实践的小工具与项目想法。每个项目都来自学习或写作中反复出现的摩擦。",
    },
    productLabels: {
      status: "状态",
      audience: "对象",
      shape: "形式",
      problem: "问题",
      solution: "方案",
      features: "功能",
    },
    products: [
      {
        slug: productSlugs.leanStudyKit,
        name: "Lean Study Kit",
        eyebrow: "学习工具",
        tagline: "把定理证明笔记转化为可重复练习流程的结构化工作区。",
        status: "原型",
        audience: "正在学习 Lean 和 mathlib 的学生与研究者。",
        problem: "形式化笔记往往分散在例子、策略、参考资料和错误记录之间，复习成本很高。",
        solution: "用概念页、证明尝试、复习队列和源码链接组成一个紧凑的学习流程。",
        features: ["概念卡片", "证明尝试日志", "复习队列", "参考链接"],
      },
      {
        slug: productSlugs.researchHomebase,
        name: "Research Homebase",
        eyebrow: "知识系统",
        tagline: "用于整理论文、笔记、任务和开放问题的个人研究仪表盘。",
        status: "设计中",
        audience: "同时管理多条研究线索的独立研究者。",
        problem: "论文、半成品笔记和下一步行动分散在不同工具里时，研究动量很容易丢失。",
        solution: "把阅读笔记转化为相互链接的问题、后续任务和可发表材料。",
        features: ["论文队列", "问题追踪", "笔记图谱", "每周回顾"],
      },
      {
        slug: productSlugs.dailyProof,
        name: "Daily Proof",
        eyebrow: "习惯产品",
        tagline: "一个更安静的日常数学练习和证明写作循环。",
        status: "探索中",
        audience: "希望长期培养数学品味和解题习惯的人。",
        problem: "当进步不可见、题目又不匹配当天精力时，数学练习很容易中断。",
        solution: "用每日队列平衡热身题、深入问题、反思和间隔复习。",
        features: ["每日队列", "精力匹配练习", "反思提示", "进度归档"],
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
        intro: "Brouillons, notes de travail et essais. La plupart sont encore en cours.",
        all: "Toutes les notes →",
        readMore: "Lire la note →",
        draftNotice: "Cette note est encore en cours.",
      },
      projects: {
        title: "Projets",
        intro: "Petits outils que je construis pour mes propres études et recherches.",
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
    notes: [
      {
        slug: noteSlugs.leanFormalisation,
        title: "Notes sur la formalisation de la théorie algébrique des nombres",
        meta: "Brouillon",
        text: "Ce qui change lorsqu'on écrit définitions et preuves pour un assistant de preuve.",
      },
      {
        slug: noteSlugs.classFieldTheory,
        title: "Carnet de travail sur la théorie du corps de classes",
        meta: "Notes",
        text: "Définitions, exemples et schémas de preuve que je réutilise souvent.",
      },
      {
        slug: noteSlugs.studyTools,
        title: "Petits outils pour l'étude mathématique",
        meta: "Essai",
        text: "Pourquoi j'écris mes propres outils d'étude et de recherche, et ce que j'en apprends.",
      },
    ],
    productsPage: {
      title: "Projets",
      description: "Projets et expériences de Feng-Cheng Frankie Wang.",
      heading: "Projets et expériences",
      lead:
        "Petits outils et idées de projets autour de l'apprentissage, de la recherche et de la pratique mathématique.",
    },
    productLabels: {
      status: "Statut",
      audience: "Public",
      shape: "Forme",
      problem: "Problème",
      solution: "Solution",
      features: "Fonctions",
    },
    products: [
      {
        slug: productSlugs.leanStudyKit,
        name: "Lean Study Kit",
        eyebrow: "Outil d'apprentissage",
        tagline: "Un espace structuré pour transformer des notes de preuve en pratique répétable.",
        status: "Prototype",
        audience: "Étudiants et chercheurs qui apprennent Lean et mathlib.",
        problem:
          "Les notes de formalisation sont difficiles à revisiter quand exemples, tactiques, références et erreurs sont dispersés.",
        solution:
          "Un flux de travail compact avec pages de concepts, essais de preuve, révisions et liens vers les sources.",
        features: ["Cartes de concepts", "Journal de preuve", "File de révision", "Liens de référence"],
      },
      {
        slug: productSlugs.researchHomebase,
        name: "Research Homebase",
        eyebrow: "Système de connaissance",
        tagline: "Un tableau de bord personnel pour papiers, notes, tâches et questions ouvertes.",
        status: "Design",
        audience: "Chercheurs indépendants qui suivent plusieurs fils de recherche.",
        problem:
          "L'élan de recherche se perd quand papiers, notes partielles et prochaines actions sont dispersés.",
        solution:
          "Un hub léger qui transforme les notes de lecture en questions, suivis et textes publiables.",
        features: ["File de papiers", "Suivi des questions", "Graphe de notes", "Revue hebdomadaire"],
      },
      {
        slug: productSlugs.dailyProof,
        name: "Daily Proof",
        eyebrow: "Produit d'habitude",
        tagline: "Une boucle quotidienne plus calme pour les problèmes et l'écriture de preuves.",
        status: "Exploration",
        audience: "Personnes qui veulent construire une pratique mathématique durable.",
        problem:
          "La pratique mathématique s'interrompt facilement quand le progrès est invisible et les exercices mal calibrés.",
        solution:
          "Une file quotidienne qui équilibre échauffement, problèmes profonds, réflexion et répétition espacée.",
        features: ["File quotidienne", "Sessions adaptées à l'énergie", "Prompts de réflexion", "Archive des progrès"],
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
