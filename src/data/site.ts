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

const resourceLinks = {
  dutLetter: "https://github.com/FrankieeW/DUT-letter-latex",
};

export const socials = [
  { platform: "Instagram", handle: "@frankiefcw", url: "https://instagram.com/frankiefcw" },
  { platform: "X", handle: "@FrankieFCW", url: "https://x.com/FrankieFCW" },
  { platform: "Weibo", handle: "frankie-wang", url: "https://weibo.com/6454870343" },
] as const;

export const site = {
  en: {
    htmlLang: "en",
    nav: {
      academic: "Academic",
      blog: "Blog",
      resources: "Resources",
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
      resources: {
        title: "Resources",
        intro: "Notes, CV, reading, and templates — collected in one place.",
        all: "All resources →",
      },
      blog: {
        title: "Blog",
        intro: "Longer posts on mathematics, formalisation, and the tools I build.",
        placeholder: "TODO — the blog is coming soon.",
        all: "All posts →",
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
    blogPage: {
      title: "Blog",
      description: "Blog posts by Feng-Cheng Frankie Wang.",
      heading: "Blog",
      lead: "Longer posts on mathematics, formalisation, and the tools I build.",
      placeholder: "TODO — the blog is coming soon.",
    },
    resourcesPage: {
      title: "Resources",
      description: "Notes, CV, reading lists, and templates by Feng-Cheng Frankie Wang.",
      heading: "Resources",
      lead: "Notes, CV, reading, and templates — collected in one place. Most are still in progress.",
      todoLabel: "Coming soon",
    },
    contactPage: {
      title: "Contact",
      description: "How to reach Feng-Cheng Frankie Wang.",
      heading: "Contact",
      lead: "The best way to reach me is by email. You can also find me on the platforms below.",
      socialsTitle: "Elsewhere",
      socialPlaceholder: "TODO — more social links coming soon.",
    },
    resources: [
      {
        name: "Notes",
        description: "Working notes and writing on algebra, number theory, and formalisation.",
        todo: true,
        to: "notes/",
      },
      {
        name: "CV",
        description: "Academic CV and short biography.",
        todo: true,
      },
      {
        name: "Reading list",
        description: "Mathematics books and papers I am reading or recommend.",
        todo: true,
      },
      {
        name: "Lecture notes",
        description: "Typed notes from Imperial courses, in LaTeX.",
        todo: true,
      },
      {
        name: "DUT recommendation letter template",
        description: "A LaTeX template for Dalian University of Technology recommendation letters.",
        url: resourceLinks.dutLetter,
      },
    ],
    posts: [
      {
        slug: "quadratic-number-fields-core",
        meta: "2026 · Lean 4",
        title: "The core idea behind QuadraticNumberFields",
        text:
          "The project separates quadratic fields into three layers: an abstract property, a categorical packaging, and the concrete coordinate model Qsqrtd d.",
        sections: [
          {
            heading: "The problem is not just writing down ℚ(√d)",
            paragraphs: [
              "On paper, a quadratic field is often written as ℚ(√d), where d is squarefree. In Lean, the harder problem is not merely constructing that object. The harder problem is managing parameters, isomorphisms, rings of integers, discriminants, real and complex embeddings, and prime splitting in a way that remains computable.",
              "Starting from an equivalence class of all quadratic fields would be mathematically elegant, but it would make everyday calculations heavier. Trace, norm, integrality, and discriminant arguments need coordinates. They need an element representation Lean can unfold and compute with. That is why the project keeps a concrete standard model at the center.",
            ],
          },
          {
            heading: "Three layers",
            paragraphs: [
              "The first layer is `QuadraticField K`: an abstract property saying that a field K, equipped as a ℚ-algebra, is a quadratic extension. It is a semantic layer, not a coordinate model.",
              "The second layer is `QuadraticFieldCat`: a bundled category whose objects are such fields and whose morphisms are ℚ-algebra homomorphisms. This is the layer for equivalences, functors, naturality, and transporting results.",
              "The third layer is `Qsqrtd d`, the standard coordinate model for ℚ(√d). This is where the project should do concrete arithmetic: traces, norms, conjugation, integral bases, discriminants, and splitting criteria.",
            ],
          },
          {
            heading: "Why Qsqrtd d stays central",
            paragraphs: [
              "A coordinate model is not a low-level implementation detail. For quadratic fields, it is the place where Lean can see the arithmetic. The current ring-of-integers classification follows this shape: prove the result in the standard model, separating the cases d mod 4, and identify the ring of integers with either ℤ[√d] or ℤ[(1+√d)/2].",
              "The rescaling equivalences `Qsqrtd d ≃ₐ[ℚ] Qsqrtd (a² d)` and the classification of when `Qsqrtd d` and `Qsqrtd d'` are isomorphic are therefore not auxiliary conveniences. They are the bridge between coordinates and the abstract notion of a quadratic field.",
            ],
          },
          {
            heading: "Classification as a bridge",
            paragraphs: [
              "The intended workflow is to calculate in `Qsqrtd d`, classify squarefree parameters, and then transport theorems to any `Algebra.IsQuadraticExtension ℚ K`. This avoids reproving concrete arithmetic for every abstract field K, while also avoiding quotient definitions at the bottom of every computation.",
              "The same pattern should organize real versus imaginary behavior and prime splitting. Compute the sign, embeddings, and Legendre-symbol trichotomy in the standard model; then package the final statements as invariants of quadratic extensions.",
            ],
          },
          {
            heading: "The real object being designed",
            paragraphs: [
              "The heart of the project is the relationship among `QuadraticField`, `QuadraticFieldCat`, and `Qsqrtd`. `Qsqrtd` gives coordinates. `QuadraticField` gives the abstract mathematical meaning. `QuadraticFieldCat` gives a disciplined place for equivalences and transport.",
              "In that sense, QuadraticNumberFields is not only a formalization of examples of ℚ(√d). It is an attempt to build a reusable interface for quadratic fields in Lean: coordinates first, classification as the bridge, abstraction as the final language.",
            ],
          },
        ],
      },
    ],
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
      blog: "博客",
      resources: "资源",
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
      resources: {
        title: "资源",
        intro: "笔记、简历、阅读清单和模板，集中收录在一处。",
        all: "全部资源 →",
      },
      blog: {
        title: "博客",
        intro: "关于数学、形式化以及我所做工具的长文。",
        placeholder: "TODO —— 博客即将上线。",
        all: "全部文章 →",
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
    blogPage: {
      title: "博客",
      description: "Feng-Cheng Frankie Wang 的博客文章。",
      heading: "博客",
      lead: "关于数学、形式化以及我所做工具的长文。",
      placeholder: "TODO —— 博客即将上线。",
    },
    resourcesPage: {
      title: "资源",
      description: "Feng-Cheng Frankie Wang 的笔记、简历、阅读清单和模板。",
      heading: "资源",
      lead: "笔记、简历、阅读清单和模板，集中收录在一处。大多仍在推进中。",
      todoLabel: "即将上线",
    },
    contactPage: {
      title: "联系",
      description: "如何联系 Feng-Cheng Frankie Wang。",
      heading: "联系",
      lead: "最方便的联系方式是邮件。你也可以在下面的平台上找到我。",
      socialsTitle: "其他平台",
      socialPlaceholder: "TODO —— 更多社交链接即将补充。",
    },
    resources: [
      {
        name: "笔记",
        description: "关于代数、数论与形式化的工作笔记与写作。",
        todo: true,
        to: "notes/",
      },
      {
        name: "简历",
        description: "学术简历与简短介绍。",
        todo: true,
      },
      {
        name: "阅读清单",
        description: "我正在读或推荐的数学书籍与论文。",
        todo: true,
      },
      {
        name: "讲义",
        description: "Imperial 课程的 LaTeX 讲义。",
        todo: true,
      },
      {
        name: "大工推荐信模板",
        description: "大连理工大学推荐信的 LaTeX 模板。",
        url: resourceLinks.dutLetter,
      },
    ],
    posts: [
      {
        slug: "quadratic-number-fields-core",
        meta: "2026 · Lean 4",
        title: "把二次域当作坐标系来计算",
        text:
          "QuadraticNumberFields 的核心，是让 QuadraticField、QuadraticFieldCat 和 Qsqrtd d 各司其职：抽象表达、范畴组织、具体计算。",
        sections: [
          {
            heading: "问题不只是定义 ℚ(√d)",
            paragraphs: [
              "在纸上，二次域常常写成 ℚ(√d)，其中 d 是平方自由整数。但在 Lean 里，难点并不只是把这个对象写出来，而是让参数变化、域同构、整数环、判别式和素理想分裂都能被统一管理。",
              "如果一开始就把“二次域”定义成等价类，数学上也许优雅，但计算会被商结构拖慢。做 trace、norm、整性和判别式时，我们需要能展开元素、使用坐标、让 Lean 直接计算。因此这个项目的核心策略是：先保留标准坐标模型，再把抽象性作为外层结构加上去。",
            ],
          },
          {
            heading: "三层对象",
            paragraphs: [
              "第一层是 `QuadraticField K`：它应该表达 K 是 ℚ 上的二次扩张。这一层是性质，不是坐标模型。它回答的问题是：一个给定的域 K 是否具有二次域结构？",
              "第二层是 `QuadraticFieldCat`：它把满足这个性质的域打包成范畴对象，态射是 ℚ-代数同态。这一层负责组织对象、同构、函子和自然性。",
              "第三层是 `Qsqrtd d`：它是标准模型 ℚ(√d)，也是项目里最适合计算的地方。整数环分类、判别式公式、实/虚二次性和分裂行为都应当优先在这里证明。",
            ],
          },
          {
            heading: "为什么不是先做等价类",
            paragraphs: [
              "二次域当然应该按同构分类；例如 ℚ(√d) 与 ℚ(√d') 是否同构，取决于 d'/d 是否是有理平方。但这类分类定理更适合作为桥梁，而不是作为底层定义。",
              "底层定义如果是等价类，每次计算都要面对代表元选择和商上的下降问题。相反，在 `Qsqrtd d` 上可以直接计算，再用分类定理说明不同参数给出的对象什么时候相同。这保留了坐标模型的可计算性，也保留了抽象分类的正确语义。",
            ],
          },
          {
            heading: "Qsqrtd 和抽象二次域之间的桥",
            paragraphs: [
              "`Qsqrtd.rescale` 应该被提升成系统性的结构：对每个有理数单位 a，有一个从 `Qsqrtd d` 到 `Qsqrtd (a² d)` 的 ℚ-代数等价。进一步说，这些 rescale 等价应当组成自然的、可复用的接口，而不是散落在证明里的手工 RingEquiv。",
              "同样，任意 `Algebra.IsQuadraticExtension ℚ K` 都应当能通过某个标准参数 d 与 `Qsqrtd d` 联系起来。于是项目的证明路线就是：在标准模型上算清楚，再通过同构把结论搬运到抽象 K。",
            ],
          },
          {
            heading: "最终目标",
            paragraphs: [
              "这个项目真正要形式化的，不只是几个二次域的例子，而是一套二次域的工作语言。`Qsqrtd d` 是坐标，`QuadraticField K` 是抽象性质，`QuadraticFieldCat` 是管理和运输结果的范畴层。",
              "这样组织之后，整数环分类、判别式、实嵌入个数、以及素理想的 split/inert/ramified 三分，都可以先在可计算模型中完成，再提升成不依赖具体坐标的结论。这也是我认为 QuadraticNumberFields 的核心思想：坐标优先，分类作桥，抽象收尾。",
            ],
          },
        ],
      },
    ],
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
      blog: "Blog",
      resources: "Ressources",
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
      resources: {
        title: "Ressources",
        intro: "Notes, CV, lectures et modèles — rassemblés au même endroit.",
        all: "Toutes les ressources →",
      },
      blog: {
        title: "Blog",
        intro: "Articles plus longs sur les mathématiques, la formalisation et mes outils.",
        placeholder: "TODO — le blog arrive bientôt.",
        all: "Tous les articles →",
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
    blogPage: {
      title: "Blog",
      description: "Articles de blog de Feng-Cheng Frankie Wang.",
      heading: "Blog",
      lead: "Articles plus longs sur les mathématiques, la formalisation et mes outils.",
      placeholder: "TODO — le blog arrive bientôt.",
    },
    resourcesPage: {
      title: "Ressources",
      description: "Notes, CV, listes de lecture et modèles de Feng-Cheng Frankie Wang.",
      heading: "Ressources",
      lead:
        "Notes, CV, lectures et modèles — rassemblés au même endroit. La plupart sont encore en cours.",
      todoLabel: "Bientôt disponible",
    },
    contactPage: {
      title: "Contact",
      description: "Comment joindre Feng-Cheng Frankie Wang.",
      heading: "Contact",
      lead:
        "Le mieux est de m'écrire par e-mail. Vous pouvez aussi me trouver sur les plateformes ci-dessous.",
      socialsTitle: "Ailleurs",
      socialPlaceholder: "TODO — d'autres liens sociaux à venir.",
    },
    resources: [
      {
        name: "Notes",
        description: "Notes de travail et écrits sur l'algèbre, la théorie des nombres et la formalisation.",
        todo: true,
        to: "notes/",
      },
      {
        name: "CV",
        description: "CV académique et courte biographie.",
        todo: true,
      },
      {
        name: "Liste de lecture",
        description: "Livres et articles de mathématiques que je lis ou recommande.",
        todo: true,
      },
      {
        name: "Notes de cours",
        description: "Notes des cours d'Imperial, en LaTeX.",
        todo: true,
      },
      {
        name: "Modèle de lettre de recommandation DUT",
        description: "Un modèle LaTeX pour les lettres de recommandation de Dalian University of Technology.",
        url: resourceLinks.dutLetter,
      },
    ],
    posts: [
      {
        slug: "quadratic-number-fields-core",
        meta: "2026 · Lean 4",
        title: "Calculer les corps quadratiques avec des coordonnées",
        text:
          "L'idée centrale de QuadraticNumberFields est de séparer la propriété abstraite, la catégorie des objets quadratiques et le modèle calculable Qsqrtd d.",
        sections: [
          {
            heading: "Le problème n'est pas seulement d'écrire ℚ(√d)",
            paragraphs: [
              "Sur le papier, un corps quadratique s'écrit souvent ℚ(√d), avec d sans facteur carré. Dans Lean, le problème est plus structurel : il faut aussi contrôler les changements de paramètre, les isomorphismes, les anneaux d'entiers, les discriminants et la décomposition des idéaux premiers.",
              "Définir tout de suite les corps quadratiques comme une classe d'équivalence donnerait une belle classification, mais rendrait les calculs plus lourds. Pour les traces, les normes, l'intégralité et les discriminants, on veut un modèle où les éléments ont des coordonnées visibles. C'est le rôle de `Qsqrtd d`.",
            ],
          },
          {
            heading: "Trois niveaux",
            paragraphs: [
              "Le premier niveau est `QuadraticField K` : une propriété disant que K est une extension quadratique de ℚ. Le deuxième est `QuadraticFieldCat` : une catégorie dont les objets sont ces corps et dont les morphismes sont les morphismes de ℚ-algèbres. Le troisième est `Qsqrtd d`, le modèle standard ℚ(√d).",
              "Ces niveaux ne se remplacent pas. `Qsqrtd d` sert à calculer, `QuadraticField K` sert à formuler les théorèmes abstraits, et `QuadraticFieldCat` sert à organiser les isomorphismes, les foncteurs et le transport des résultats.",
            ],
          },
          {
            heading: "La classification sert de pont",
            paragraphs: [
              "Deux modèles `Qsqrtd d` et `Qsqrtd d'` sont isomorphes lorsque le rapport d'/d est un carré rationnel. Ce fait doit être un théorème de classification et un outil de transport, pas nécessairement la définition de base.",
              "La stratégie du projet est donc de prouver les résultats dans le modèle standard, puis de les transporter le long des isomorphismes vers une extension quadratique abstraite. On garde ainsi les coordonnées quand elles sont utiles, sans perdre la formulation invariantielle finale.",
            ],
          },
          {
            heading: "Ce que le projet organise vraiment",
            paragraphs: [
              "Les théorèmes sur les anneaux d'entiers, les discriminants, les plongements réels ou complexes et la décomposition des idéaux premiers suivent tous ce même schéma. On calcule dans `Qsqrtd d`, on contrôle les changements de paramètres par rescaling, puis on exprime le résultat dans le langage abstrait des extensions quadratiques.",
              "C'est pourquoi la relation entre `QuadraticField`, `QuadraticFieldCat` et `Qsqrtd` est le cœur du projet. Le modèle standard donne les coordonnées, la classification donne le pont, et la couche catégorique donne une manière propre de transporter les mathématiques déjà prouvées.",
            ],
          },
        ],
      },
    ],
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
