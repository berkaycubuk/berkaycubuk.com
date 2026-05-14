export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "tarif.ist",
    description: "Open-source multi-modal transit directions for Istanbul — metro, Marmaray, tram, funicular and İETT buses on a single map, with live disruption info and shareable routes.",
    tags: ["TypeScript", "Vite", "Leaflet", "Tailwind CSS"],
    links: [
      { label: "Visit", href: "https://tarif.ist" },
      { label: "Source", href: "https://github.com/berkaycubuk/tarif.ist" },
    ],
  },
  {
    title: "Cellarium",
    description: "Artificial life simulator. Watch cells evolve in a bottle-shaped 2D environment.",
    tags: ["Go", "Ebiten", "WebAssembly"],
    links: [
      { label: "Demo", href: "/cellarium" },
      { label: "Source", href: "https://github.com/berkaycubuk/cellarium" },
    ],
  },
  {
    title: "CoachBot",
    description: "Conversational AI health coach on Telegram. Logs meals, workouts and weight through natural chat — no forms, no app to install. Shows how a focused LLM tool replaces a clunky tracking app. Built solo in ~2 weeks.",
    tags: ["Go", "SQLite", "Telegram", "LLM"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/coachbot" }],
  },
  {
    title: "berkaycubuk.com",
    description: "Website you currently see. I share my writings and projects here.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/berkaycubuk.com" }],
  },
];
