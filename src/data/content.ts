// SINGLE SOURCE OF TRUTH — edit copy and links here, never in components.

export const STUDIO_NAME = "Nitin & Mahi";

// TODO: replace with the real Contra Joki profile URL before publishing.
export const CONTRA_JOKI_URL = "#";

export const studio = {
  taglines: ["Build. Secure. Ship.", "Two engineers. One studio. Zero compromises."],
  heroRoles: ["Web Development", "Flutter Apps", "Cybersecurity", "AI / ML", "Data Annotation"],
  intro:
    "We are two CSE undergraduates at Central University of Jammu who build real products together — Nitin leads engineering and security, Mahi leads client communication and delivery. Both of us write code, review each other's work, and ship as one team.",
  shortBio:
    "Web, Flutter, cybersecurity, AI/ML and data annotation — delivered by two engineers with one clear point of contact.",
  location: "Central University of Jammu · Working worldwide",
  email: "mahipriyadarshi0@gmail.com",
};

export type SocialLink = { label: string; url: string };

export type Partner = {
  id: "nitin" | "mahi";
  name: string;
  initials: string;
  role: string;
  focus: string;
  image: string;
  education: string;
  bio: string;
  accent: "a" | "b";
  skills: string[];
  experience: { role: string; org: string; period: string; detail: string }[];
  achievements: string[];
  certs: string[];
  links: SocialLink[];
  email: string;
  phone?: string;
  // Rendered nowhere: claims that must be checked before being used publicly.
  // VERIFY: patent pending
  // VERIFY: 30+ tutorials
  // VERIFY: 92% accuracy
  // VERIFY: CGPA
  verify: string[];
  placeholderNote?: string;
};

export const partners: Partner[] = [
  {
    id: "nitin",
    name: "Nitin Dhurve",
    initials: "ND",
    role: "Technical Lead",
    focus: "Full-Stack · Flutter · Cybersecurity",
    image: "/images/ss.png",
    education: "B.Tech CSE (Cyber Security), Central University of Jammu · 2027",
    bio: "I lead the build: architecture, full-stack code, Flutter apps and security testing. I turn a rough idea into a working, secure product — then hand over clean source and a clear explanation.",
    accent: "a",
    skills: [
      "React",
      "Node / Express",
      "FastAPI",
      "Flutter / Dart",
      "Firebase",
      "MongoDB / MySQL / PostgreSQL",
      "Docker",
      "Python",
      "JS / TS",
      "C / C++",
      "Bash",
      "VAPT",
      "Red Teaming",
      "Active Directory",
      "OWASP Top 10",
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "SQLmap",
      "BloodHound",
      "Impacket",
    ],
    experience: [
      {
        role: "Cyber Security Expert Intern",
        org: "Indian Army",
        period: "May – Jul 2026",
        detail: "Red Team assessment of Active Directory environments.",
      },
      {
        role: "Penetration Testing Intern",
        org: "C-DAC Noida",
        period: "Apr – Jun 2025",
        detail: "Web app testing against the OWASP Top 10: SQLi, XSS and reporting.",
      },
      {
        role: "Data Science Intern",
        org: "Synent Technologies",
        period: "Internship",
        detail: "Applied data science workflows to product datasets.",
      },
      {
        role: "ML Intern",
        org: "YBI Foundation",
        period: "Internship",
        detail: "Built and evaluated machine learning models.",
      },
      {
        role: "Data Annotation Engineer Intern",
        org: "Qualitas Global",
        period: "Internship",
        detail: "Labeled and quality-checked datasets for ML training.",
      },
      {
        role: "Cybersecurity Content Creator",
        org: "YouTube @in11min",
        period: "2023 – present",
        detail: "Explains security and hacking concepts in 11 minutes.",
      },
    ],
    achievements: [
      "Top 10 Finalist — Indian Army Terrier Cyber Quest 2025",
      "1st Rank — CyberCUJ CTF, CUJ 2024",
      "2nd Rank — Cybersecurity Competition, IIT Jammu 2024",
      "5th Rank — ANHAD CTF, IIT Jammu 2024",
      "1st Rank — TryHackMe Bronze / Silver / Gold leagues 2023",
      "Certificate of Merit — e-Yantra, IIT Bombay (97/100)",
      "3× IEEE college hackathon finalist",
      "2× Smart India Hackathon 2024 shortlisted",
      "200+ LeetCode problems solved",
      "50+ public GitHub repositories",
    ],
    certs: [
      "Linux Privilege Escalation — TryHackMe",
      "Ethical Hacking & Bug Bounty — Udemy",
      "CEH + CSEH training",
      "ISC2 CC — training completed",
      "Complete Web Development — Udemy",
      "CCC — NIELIT",
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nitin-dhurve-b1493b288/" },
      { label: "GitHub", url: "https://github.com/nitinscodehub" },
      { label: "LeetCode", url: "https://leetcode.com/u/nitinsleetcodehub/" },
      { label: "HackerRank", url: "https://www.hackerrank.com/profile/dhurvenitin05" },
      { label: "Instagram", url: "https://www.instagram.com/nitin_chhattisgariha/" },
      { label: "YouTube", url: "https://www.youtube.com/@in11min" },
    ],
    email: "dhurvenitin05@gmail.com",
    phone: "+91-9305064717",
    verify: ["patent pending", "30+ tutorials", "92% accuracy", "CGPA"],
  },
  {
    id: "mahi",
    name: "Mahi Priyadarshi",
    initials: "MP",
    role: "Client & Delivery Lead",
    focus: "Full-Stack · AI/ML · Data Annotation",
    image: "/images/mahi.png",
    education: "CSE undergraduate, Central University of Jammu",
    bio: "Your single point of contact: scoping, timelines, updates, and smooth delivery. I am equally hands-on with code — full-stack builds, AI/ML experiments and data annotation work — while keeping every client conversation clear and calm.",
    accent: "b",
    skills: [
      "Full-Stack Development",
      "AI / Machine Learning",
      "Data Annotation",
      "Client Communication",
      "Project Scoping",
      "Delivery Management",
    ],
    experience: [],
    achievements: [],
    certs: [],
    links: [
      { label: "GitHub", url: "https://github.com/mahi-p02" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mahi-priyadarshi-9bb229388/" },
      { label: "LeetCode", url: "https://leetcode.com/u/IceRuby_02/" },
      { label: "HackerRank", url: "https://www.hackerrank.com/profile/mahipriyadarshi0" },
      { label: "CryptoHack", url: "https://cryptohack.org/user/Mahi_26/" },
      { label: "Instagram", url: "https://www.instagram.com/isthis_mahi/" },
    ],
    email: "mahipriyadarshi0@gmail.com",
    verify: [],
    // TODO: fill her exact tools, projects and achievements from her resume.
    // Nothing specific is invented here; placeholder items are filtered out of the UI.
    placeholderNote: "TODO: add Mahi's exact tools, projects and achievements from her resume.",
  },
];

export const mahiHeadline =
  "CSE undergrad | Data Annotation | AI/ML Enthusiast | Full-Stack Developer | Building AI-Powered, Data-Driven Products";

export type Service = {
  id: string;
  title: string;
  icon: "code" | "phone" | "shield" | "brain" | "tag" | "terminal";
  value: string;
  deliverables: string[];
  typical: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    icon: "code",
    value: "Fast, accessible products that feel finished.",
    deliverables: ["React / Node / FastAPI builds", "Landing pages & dashboards", "Portfolios and client portals"],
    typical: "Typical: 1–4 weeks",
  },
  {
    id: "app",
    title: "App Development",
    icon: "phone",
    value: "One Flutter codebase for Android and iOS.",
    deliverables: ["Cross-platform Flutter apps", "Firebase & REST integration", "Store-ready builds"],
    typical: "Typical: 3–6 weeks",
  },
  {
    id: "security",
    title: "Cybersecurity",
    icon: "shield",
    value: "Find the bugs before someone else does.",
    deliverables: ["Web app pentest & VAPT", "Reports with remediation steps", "Secure-coding review"],
    typical: "Typical: 1–2 weeks",
  },
  {
    id: "ai",
    title: "AI / ML",
    icon: "brain",
    value: "Practical models, not slideware.",
    deliverables: ["Classification & regression models", "Chatbots and assistants", "Phishing / spam detection"],
    typical: "Typical: 2–5 weeks",
  },
  {
    id: "data",
    title: "Data Annotation & QA",
    icon: "tag",
    value: "Clean, consistent data for reliable models.",
    deliverables: ["Text / image / video labeling", "Validation & quality control", "Annotation guideline docs"],
    typical: "Typical: per-dataset quote",
  },
  {
    id: "automation",
    title: "Automation & Custom Tools",
    icon: "terminal",
    value: "Small scripts that save hours every week.",
    deliverables: ["Python / Bash automation", "Scrapers and scanners", "Internal bots and utilities"],
    typical: "Typical: 3–10 days",
  },
];

export const process = [
  { step: "01", title: "Discover", text: "We learn the goal, the users and what success looks like." },
  { step: "02", title: "Scope & Quote", text: "Clear deliverables, timeline and price. No surprises." },
  { step: "03", title: "Build", text: "Iterative development with visible progress and short feedback loops." },
  { step: "04", title: "Test & Secure", text: "Functional QA plus a security pass on anything exposed to the internet." },
  { step: "05", title: "Deliver", text: "Source code, docs, handover call and everything you need to run it." },
  { step: "06", title: "Support", text: "Fixes and small improvements after launch, with a clear support window." },
];

export type ProjectItem = {
  id: string;
  name: string;
  category: "Web" | "App" | "Security" | "AI-ML";
  tags: string[];
  summary: string;
  detail: string;
  repo?: string;
  live?: string;
  accent: "a" | "b" | "both";
};

export const projects: ProjectItem[] = [
  {
    id: "aegis",
    name: "Project AEGIS",
    category: "Security",
    tags: ["Flutter", "FastAPI", "Auth"],
    summary: "Zero-knowledge passwordless authentication.",
    detail:
      "A passwordless authentication system built with Flutter and FastAPI, designed around zero-knowledge principles so the server never sees a usable secret.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "maarich",
    name: "Project MAARICH",
    category: "Security",
    tags: ["Deception", "Python", "Defense"],
    summary: "Keylogger cyber-deception engine.",
    detail:
      "A defensive deception engine that studies keylogger behavior and generates decoy activity to misdirect attackers and improve detection.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "adastra",
    name: "ADASTRA",
    category: "Security",
    tags: ["Active Directory", "Red Team", "Automation"],
    summary: "Active Directory red-team automation.",
    detail:
      "Automation for common Active Directory attack paths and reconnaissance, built to speed up authorized red-team assessments and reporting.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "vulnx",
    name: "VulnX",
    category: "Security",
    tags: ["Scanner", "OWASP", "Python"],
    summary: "Automated web vulnerability scanner.",
    detail:
      "A scanner that checks web applications for common OWASP-class issues and produces structured findings with remediation guidance.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "phishguard",
    name: "PhishGuard AI",
    category: "AI-ML",
    tags: ["ML", "Phishing", "Python"],
    summary: "Machine-learning phishing detection.",
    detail:
      "A phishing detection model that scores suspicious messages and URLs using engineered features, with a simple interface for trying sample inputs.",
    repo: "https://github.com/nitinscodehub",
    accent: "both",
  },
  {
    id: "ciphershare",
    name: "CipherShare",
    category: "Web",
    tags: ["Encryption", "Web", "Messaging"],
    summary: "Secure file sharing and messaging.",
    detail:
      "A web tool for sharing files and messages with encryption applied before transfer, focused on keeping sensitive content private.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "streetscore",
    name: "StreetScore",
    category: "App",
    tags: ["Flutter", "Cricket", "Firebase"],
    summary: "Flutter cricket scoring app.",
    detail:
      "A mobile app for scoring street cricket matches quickly, with simple overs, runs and wicket tracking designed for phone use on the ground.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "campusnav",
    name: "CampusNav",
    category: "App",
    tags: ["Flutter", "Maps", "Campus"],
    summary: "Campus navigation app.",
    detail:
      "A navigation app that helps students find buildings and routes across campus, built with Flutter and map integrations.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "milestone",
    name: "Milestone+",
    category: "Web",
    tags: ["React", "Tracking", "Productivity"],
    summary: "Milestone tracker for long projects.",
    detail:
      "A focused tracker for long-running goals and project milestones, with progress views that keep teams aligned on what is next.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  {
    id: "shadowrecon",
    name: "ShadowRecon",
    category: "Security",
    tags: ["Bash", "Recon", "CLI"],
    summary: "Bash reconnaissance toolkit.",
    detail:
      "A lightweight Bash toolkit that collects Passive reconnaissance data for authorized assessments and organizes findings for reporting.",
    repo: "https://github.com/nitinscodehub",
    accent: "a",
  },
  // TODO: add Mahi's projects here once supplied. Never invent them.
];

export const achievements = [
  { year: "2025", title: "Top 10 Finalist", org: "Indian Army Terrier Cyber Quest", kind: "CTF" },
  { year: "2024", title: "1st Rank", org: "CyberCUJ CTF, Central University of Jammu", kind: "CTF" },
  { year: "2024", title: "2nd Rank", org: "Cybersecurity Competition, IIT Jammu", kind: "CTF" },
  { year: "2024", title: "5th Rank", org: "ANHAD CTF, IIT Jammu", kind: "CTF" },
  { year: "2023", title: "1st Rank", org: "TryHackMe Bronze / Silver / Gold leagues", kind: "CTF" },
  { year: "2024", title: "Shortlisted", org: "Smart India Hackathon", kind: "Hackathon" },
  { year: "—", title: "Certificate of Merit", org: "e-Yantra, IIT Bombay (97/100)", kind: "Recognition" },
  { year: "—", title: "3× Finalist", org: "IEEE college hackathons", kind: "Hackathon" },
];

export type TechItem = { name: string; strong: "a" | "b" | "both" };
export type TechGroup = { title: string; items: TechItem[] };

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", strong: "both" },
      { name: "TypeScript", strong: "a" },
      { name: "Tailwind", strong: "a" },
      { name: "HTML / CSS", strong: "both" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node / Express", strong: "a" },
      { name: "FastAPI", strong: "a" },
      { name: "PostgreSQL", strong: "a" },
      { name: "MongoDB", strong: "a" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", strong: "a" },
      { name: "Dart", strong: "a" },
      { name: "Firebase", strong: "a" },
    ],
  },
  {
    title: "Security",
    items: [
      { name: "Burp Suite", strong: "a" },
      { name: "Nmap", strong: "a" },
      { name: "Metasploit", strong: "a" },
      { name: "BloodHound", strong: "a" },
    ],
  },
  {
    title: "AI / Data",
    items: [
      { name: "Python", strong: "both" },
      { name: "scikit-learn", strong: "b" },
      { name: "Data Annotation", strong: "b" },
      { name: "Dataset QA", strong: "b" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", strong: "a" },
      { name: "Git / GitHub", strong: "both" },
      { name: "Bash", strong: "a" },
      { name: "Linux", strong: "a" },
    ],
  },
];

export const whyUs = [
  { title: "Security-first mindset", text: "Every internet-facing build gets a basic security pass before handover." },
  { title: "One point of contact", text: "Mahi owns scoping, updates and timelines — no chasing two people." },
  { title: "Clear communication", text: "Plain-language progress updates, not jargon or silent weeks." },
  { title: "Transparent timelines", text: "You see milestones and know what is happening at every step." },
  { title: "Source code handover", text: "You own the code, the repo and the documentation at the end." },
  { title: "Post-delivery support", text: "A defined support window for fixes and small improvements." },
];

export const faqs = [
  {
    q: "How do you price a project?",
    a: "We scope the deliverables first, then quote a fixed price for that scope. If the scope changes, we agree the change and price before doing the work.",
  },
  {
    q: "How long does a typical build take?",
    a: "Landing pages are usually 1–2 weeks, dashboards and Flutter apps 3–6 weeks, and VAPT engagements 1–2 weeks. You get a timeline with the quote.",
  },
  {
    q: "What is your revision policy?",
    a: "The quote includes a defined number of revision rounds at each milestone. Extra rounds after that are quoted separately, so expectations stay clear.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes. We are happy to sign an NDA before discussing sensitive details or sharing private materials.",
  },
  {
    q: "How do payments work?",
    a: "Payments are handled through Contra Joki once the milestones are agreed. We never ask for payment outside the platform.",
  },
  {
    q: "Which tools and stack do you use?",
    a: "React, TypeScript, Node/FastAPI, Flutter, Firebase, PostgreSQL, Docker and Python, plus Burp Suite, Nmap and related tools for security work.",
  },
];

// Testimonials stay hidden until real, permissioned client quotes are added here.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const counters = [
  { value: 200, suffix: "+", label: "LeetCode problems" },
  { value: 50, suffix: "+", label: "Public GitHub repos" },
  { value: 5, suffix: "+", label: "CTF / hackathon placements" },
  { value: 2, suffix: "", label: "Engineers, one studio" },
];
