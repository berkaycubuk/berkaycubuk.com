export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "MQTT Studio",
    description: "Hosted MQTT dashboards with a broker included. Build read-only monitoring dashboards and automation for IoT fleets — no infrastructure to run yourself. A commercial SaaS I design, build and operate solo.",
    tags: ["Go", "SaaS", "IoT", "MQTT"],
    links: [{ label: "Visit", href: "https://mqtt.studio" }],
  },
  {
    title: "Fabrika",
    description: "A software factory that runs on your computer. Orchestrates coding agents through a task board so work gets planned, built and reviewed on a loop — an operating system for shipping with AI.",
    tags: ["Go", "AI", "Agents"],
    links: [
      { label: "Visit", href: "https://fabrika-ai.com" },
      { label: "Source", href: "https://github.com/berkaycubuk/fabrika" },
    ],
  },
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
    title: "kitsune",
    description: "A single-binary CLI that audits any URL for SEO and GEO (generative-engine optimization) — the signals that decide whether search engines and AI assistants can read and rank your page.",
    tags: ["Go", "CLI", "SEO"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/kitsune" }],
  },
  {
    title: "polaris-agent",
    description: "An AI companion that lives inside a container. A self-contained agent you can hand a task and let run in its own sandbox.",
    tags: ["Go", "AI", "Agents"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/polaris-agent" }],
  },
  {
    title: "dotart",
    description: "Converts any image into retro dithered pixel art — the dotted, halftone look. Pure Go: median-cut palette plus Floyd–Steinberg and Bayer dithering. Runs in your browser too.",
    tags: ["Go", "WebAssembly", "Image"],
    links: [
      { label: "Try it", href: "https://dotart.berkay.tools" },
      { label: "Source", href: "https://github.com/berkaycubuk/dotart" },
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
];
