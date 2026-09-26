export const site = {
  name: "Mohamed",
  handle: "MedMh",
  role: "web developer & graphic designer",
  email: "medmystgon@gmail.com",
  location: "Algeria",
  since: 2018,
  designModeUrl: "https://mh-studio-26.vercel.app/ar/",
  devModeUrl: "https://360-prod-coming-soon.vercel.app/",
  resumeUrl: "#",
};

export const socials = [
  { label: "github", url: "https://github.com/medragneel" },
  { label: "instagram", url: "https://www.instagram.com/leo.art1/" },
  { label: "codepen", url: "https://codepen.io/Medmh" },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// A real timeline — order encodes what was actually learned, when.
export const timeline = [
  { year: "2018", label: "HTML & CSS", note: "first lines of code" },
  { year: "2019", label: "JavaScript", note: "made things move" },
  { year: "2020", label: "Python", note: "scripts, automation" },
  { year: "2021", label: "Flask · Node.js", note: "backends, APIs" },
  { year: "2021", label: "Golang", note: "systems curiosity" },
  { year: "2022", label: "React", note: "component thinking" },
  { year: "2023", label: "Figma", note: "design became part of the process" },
  { year: "2024", label: "Full-stack + creative direction", note: "code and visuals, same craft" },
  { year: "2025", label: "Adobe Suite (photoshop.illustrator.indesign)", note: "design your brand identity and packaging" },
  { year: "Now", label: "Graphic Designer", note: "Graphic Designer At Blueva" },
];

export const gallery = [
  { src: "gd1.avif", category: "Graphic Design", alt: "Allama Electric Logo" },
  { src: "gd2.avif", category: "Graphic Design", alt: "Jakop kickboxer logo" },
  { src: "gd3.avif", category: "Graphic Design", alt: "Spider Gaming" },
  { src: "gd4.avif", category: "Graphic Design", alt: "Sheild medmh logo" },
  { src: "wd1.png", category: "Web Design", alt: "Welcome landing page design" },
  { src: "wd2.png", category: "Web Design", alt: "Portfolio landing page design" },
];

// language dot colors, borrowed from GitHub's own convention — legible shorthand for devs
const lang = {
  js: "#e8c547",
  py: "#3f7ab8",
  html: "#e06d4f",
  go: "#6fb3a0",
};

export const projects = [

{
    name: "Spherix",
    title: "Spehrix Shopify Theme",
    description: "A Custom Shopify Theme",
    tags: ["JavaScript + Liquid"],
    lang: lang.js,
    image: "spherix.png",
    site: "https://spherix-theme.myshopify.com",
    repo: null,
  },
  {
    name: "Explorea",
    title: "Explorea.dz",
    description: "A virtual  Travel agency",
    tags: ["Next.js + Supabase"],
    lang: lang.js,
    image: "explorea.png",
    site: "https://explorea-dz.vercel.app/",
    repo: null,
  },
  {
    name: "svelty",
    title: "Svelty",
    description: "A streaming platform built with SvelteKit — browsing, search, and watch views over a public media API.",
    tags: ["SvelteKit"],
    lang: lang.js,
    image: "svelty.png",
    site: "https://svelty-six.vercel.app/",
    repo: null,
  },
  {
    name: "kaizen-shop",
    title: "Kaizen-shop",
    description: "An e-commerce storefront built in React — product catalog, cart, and checkout flow.",
    tags: ["React"],
    lang: lang.js,
    image: "kaizen.jpg",
    site: "https://kaizen-shop.onrender.com/",
    repo: null,
  },
  {
    name: "pixe",
    title: "Pixe",
    description: "A command-line client for Pixela, written in Python — log habits and graphs straight from the terminal.",
    tags: ["Python", "CLI"],
    lang: lang.py,
    image: "pixe.png",
    site: null,
    repo: "https://github.com/medragneel/Pixe",
  },
  {
    name: "birthday-cake",
    title: "Svg Birthday Cake Animation",
    description: "A happy-birthday scene animated with GSAP, HTML and CSS — hand-built SVG, no libraries for the art.",
    tags: ["GSAP", "SVG"],
    lang: lang.html,
    image: "hb.png",
    site: "https://medmhb.netlify.app/",
    repo: null,
  },
  {
    name: "pmtimer",
    title: "pmTimer",
    description: "A pomodoro timer built with plain HTML, CSS and JS — focus and break cycles, no framework overhead.",
    tags: ["JavaScript"],
    lang: lang.js,
    image: "p.png",
    site: "https://pmtimer.netlify.app/",
    repo: null,
  },
  {
    name: "ecs",
    title: "Ecs",
    description: "A cell counter built with vanilla JavaScript only — no framework, no dependencies.",
    tags: ["JavaScript"],
    lang: lang.js,
    image: "ecs.png",
    site: "https://mobile-ecs.netlify.app/",
    repo: null,
  },
];

export const stackChips = ["JavaScript", "Python", "Golang", "Node.js", "React", "CSS", "HTML", "Git"];
