export const profile = {
  name: "Frankie Wang",
  title: "Mathematics, software, and product experiments",
  location: "London / Remote",
  email: "hello@frankiewang.dev",
  github: "https://github.com/FrankieeW",
  summary:
    "I work across mathematics, formal methods, and thoughtful software products. This site collects research notes, personal writing, and small products in one place.",
};

export const academicHighlights = [
  {
    label: "Research",
    title: "Algebra and formalization",
    text: "Notes and experiments around algebraic number theory, Lean, and rigorous mathematical tooling.",
  },
  {
    label: "Writing",
    title: "Readable technical notes",
    text: "Long-form explanations that make hard ideas easier to revisit, share, and improve.",
  },
  {
    label: "Teaching",
    title: "Study systems",
    text: "Reusable summaries, problem workflows, and reference material for focused learning.",
  },
];

export const lifeHighlights = [
  "Cafe work sessions, city walks, and quiet routines.",
  "Reading lists that mix mathematics, systems, design, and biography.",
  "Small travel notes and photos from places worth remembering.",
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
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
  },
];
