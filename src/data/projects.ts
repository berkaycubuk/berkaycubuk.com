export type ProjectGroup = 'products' | 'tools' | 'experiments';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  group: ProjectGroup;
  icon?: string;
}

export const groups: { id: ProjectGroup; label: string }[] = [
  { id: 'products', label: 'PRODUCTS' },
  { id: 'tools', label: 'TOOLS' },
  { id: 'experiments', label: 'EXPERIMENTS' },
];

export const projects: Project[] = [
  {
    title: "Tamo",
    description: "A personal assistant that lives in Telegram, with its own browser, its own computer and a memory of you. Text it a task — book the table, chase the refund, fix the build — and it messages you when it's done. In private beta.",
    tags: ["Go", "AI", "Agents", "Telegram"],
    links: [{ label: "Join the waitlist", href: "https://heytamo.com" }],
    group: 'products',
    icon: "/images/projects/tamo.svg",
  },
  {
    title: "isbusy",
    description: "A round status sign for meeting-room doors. It reads the room's Google Workspace or Microsoft 365 calendar and shows green for free, red for busy and yellow for booked but empty, readable from across the corridor. Hardware, firmware and cloud, designed and sold by me.",
    tags: ["Hardware", "Firmware", "Product"],
    links: [{ label: "Visit", href: "https://isbusy.co" }],
    group: 'products',
    icon: "/images/projects/isbusy.svg",
  },
  {
    title: "isbusy code",
    description: "A status light for Claude Code. Three lights on your desk follow every session you have open: green when it's ready for your next prompt, yellow while it works, red when it needs you.",
    tags: ["Hardware", "Claude Code", "Plugin"],
    links: [
      { label: "Visit", href: "https://code.isbusy.co" },
      { label: "Android app", href: "https://isbusy.co/en/code/" },
      { label: "Plugin source", href: "https://github.com/berkaycubuk/isbusy-code" },
    ],
    group: 'products',
    icon: "/images/projects/isbusy.svg",
  },
  {
    title: "Boardless",
    description: "Build your entire device digitally first, then build it once. Schematic, 3D-printed enclosure and firmware in one project, cross-checked for hardware bugs before anything is made. In development, with a waitlist open.",
    tags: ["Hardware", "Dev tools", "Waitlist"],
    links: [{ label: "Join the waitlist", href: "https://useboardless.com" }],
    group: 'products',
    icon: "/images/projects/boardless.svg",
  },
  {
    title: "MQTT Studio",
    description: "Hosted MQTT dashboards with a broker included. Build read-only monitoring dashboards and automation for IoT fleets — no infrastructure to run yourself. A commercial SaaS I design, build and operate solo.",
    tags: ["Go", "SaaS", "IoT", "MQTT"],
    links: [{ label: "Visit", href: "https://mqtt.studio" }],
    group: 'products',
    icon: "/images/projects/mqtt-studio.png",
  },
  {
    title: "Fabrika",
    description: "A software factory that runs on your computer. Orchestrates coding agents through a task board so work gets planned, built and reviewed on a loop — an operating system for shipping with AI.",
    tags: ["Go", "AI", "Agents"],
    links: [
      { label: "Visit", href: "https://fabrika-ai.com" },
      { label: "Source", href: "https://github.com/berkaycubuk/fabrika" },
    ],
    group: 'products',
    icon: "/images/projects/fabrika.png",
  },
  {
    title: "tarif.ist",
    description: "Open-source multi-modal transit directions for Istanbul — metro, Marmaray, tram, funicular and İETT buses on a single map, with live disruption info and shareable routes.",
    tags: ["TypeScript", "Vite", "Leaflet", "Tailwind CSS"],
    links: [
      { label: "Visit", href: "https://tarif.ist" },
      { label: "Source", href: "https://github.com/berkaycubuk/tarif.ist" },
    ],
    group: 'products',
    icon: "/images/projects/tarif-ist.svg",
  },
  {
    title: "dotart",
    description: "Converts any image into retro dithered pixel art — the dotted, halftone look. Pure Go: median-cut palette plus Floyd–Steinberg and Bayer dithering. Runs in your browser too.",
    tags: ["Go", "WebAssembly", "Image"],
    links: [
      { label: "Try it", href: "https://dotart.berkay.tools" },
      { label: "Details", href: "/tools/dotart" },
      { label: "Source", href: "https://github.com/berkaycubuk/dotart" },
    ],
    group: 'tools',
    icon: "/images/tools/dotart.svg",
  },
  {
    title: "runmap",
    description: "Turns a workout GPX file into a clean, minimal map poster — route colored by elevation or pace, elevation profile and stats. Runs in your browser; your GPX never leaves your machine.",
    tags: ["Go", "WebAssembly", "GPX"],
    links: [
      { label: "Try it", href: "https://runmap.berkay.tools" },
      { label: "Details", href: "/tools/runmap" },
    ],
    group: 'tools',
    icon: "/images/tools/runmap.svg",
  },
  {
    title: "Violin Coach",
    description: "Honest practice feedback for solo violinists. Upload a recording and get a report on tuning, intonation, rhythm and tone, with a practice plan — analyzed entirely in your browser.",
    tags: ["Go", "WebAssembly", "Audio"],
    links: [
      { label: "Try it", href: "https://vioanalyze.berkay.tools" },
      { label: "Details", href: "/tools/violin-coach" },
    ],
    group: 'tools',
    icon: "/images/tools/violin-coach.svg",
  },
  {
    title: "Editor",
    description: "A minimal, distraction-free text editor in your browser. Autosaves locally, opens and exports plain text and Markdown files.",
    tags: ["HTML", "JavaScript"],
    links: [
      { label: "Try it", href: "https://editor.berkay.tools" },
      { label: "Details", href: "/tools/editor" },
    ],
    group: 'tools',
    icon: "/images/tools/editor.svg",
  },
  {
    title: "pouch",
    description: "A phone-first web UI for running and steering Claude Code sessions on your own dev box. Start a task from your phone, approve tool calls from a notification, read the diff, and pick the same session up later in a terminal.",
    tags: ["TypeScript", "Claude Code", "PWA"],
    links: [
      { label: "Try it", href: "https://pouch.berkay.tools" },
      { label: "Details", href: "/tools/pouch" },
      { label: "Source", href: "https://github.com/berkaycubuk/pouch" },
    ],
    group: 'tools',
    icon: "/images/tools/pouch.svg",
  },
  {
    title: "Enigma",
    description: "Text editor built for the agentic age. Lightweight desktop editor with tabs, Tmux-style panes and a built-in Vim mode, inspired by Sublime Text.",
    tags: ["Desktop", "Editor"],
    links: [{ label: "Download", href: "/tools/enigma" }],
    group: 'tools',
    icon: "/images/tools/enigma.png",
  },
  {
    title: "kitsune",
    description: "A single-binary CLI that audits any URL for SEO and GEO (generative-engine optimization) — the signals that decide whether search engines and AI assistants can read and rank your page.",
    tags: ["Go", "CLI", "SEO"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/kitsune" }],
    group: 'tools',
  },
  {
    title: "polaris-agent",
    description: "An AI companion that lives inside a container. A self-contained agent you can hand a task and let run in its own sandbox.",
    tags: ["Go", "AI", "Agents"],
    links: [{ label: "Source", href: "https://github.com/berkaycubuk/polaris-agent" }],
    group: 'experiments',
    icon: "/images/projects/polaris-agent.svg",
  },
  {
    title: "Cellarium",
    description: "Artificial life simulator. Watch cells evolve in a bottle-shaped 2D environment.",
    tags: ["Go", "Ebiten", "WebAssembly"],
    links: [
      { label: "Demo", href: "/cellarium" },
      { label: "Source", href: "https://github.com/berkaycubuk/cellarium" },
    ],
    group: 'experiments',
  },
];
