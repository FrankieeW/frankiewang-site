export const profile = {
  name: "Frankie Wang",
  title: "Mathematics, formal methods, and small software products",
  location: "London / Remote",
  email: "hello@frankiewang.dev",
  github: "https://github.com/FrankieeW",
  summary:
    "I work across mathematics, formal methods, and thoughtful software products. This site is a quiet index of research notes, writing, and experiments in progress.",
  current:
    "Currently focused on algebraic number theory, Lean formalization, and personal tools for durable study.",
};

export const academicHighlights = [
  {
    label: "01",
    title: "Algebra and formalization",
    text: "Experiments around algebraic number theory, Lean, and rigorous mathematical tooling.",
  },
  {
    label: "02",
    title: "Readable technical notes",
    text: "Long-form explanations that make hard ideas easier to revisit, share, and improve.",
  },
  {
    label: "03",
    title: "Study systems",
    text: "Reusable summaries, problem workflows, and reference material for focused learning.",
  },
];

export const writing = [
  {
    title: "Notes on formal mathematical practice",
    meta: "Essay draft",
    text: "How proof assistants change the shape of reading, revising, and trusting mathematics.",
  },
  {
    title: "A working notebook for algebraic number theory",
    meta: "Living notes",
    text: "Definitions, examples, and proof patterns collected for repeated use.",
  },
  {
    title: "Designing small tools for serious study",
    meta: "Product note",
    text: "A practical look at software that supports attention instead of replacing it.",
  },
];

export const lifeHighlights = [
  "Cafe work sessions, city walks, and quiet routines in London.",
  "Reading lists across mathematics, systems, design, biography, and literature.",
  "Small travel notes and observations from places worth remembering.",
];

export const products = [
  {
    slug: "lean-study-kit",
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
    slug: "research-homebase",
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
    slug: "daily-proof",
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
];
