import { Project, TimelineItem, SkillGroup } from "./types";

export const profile = {
  name: "Karthik Daivadnya",
  role: "AI/ML Engineer & Software Developer",
  email: "karthikdaivadnya27@gmail.com",
  typingRoles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Developer",
  ],
  education:
    "B.E, Computer Science & Engineering — Bapuji Institute of Engineering and Technology, Bangalore, Karnataka",
  cgpa: "8.76",
  gradYear: "2026",
  github: "KarthikDaivadnya",
  location: "Bangalore, Karnataka, India",
  strengths: ["Python", "Machine Learning", "RAG Systems", "FastAPI", "React", "SQL"],
  interests: ["Chess", "Basketball", "Fine Arts", "Reading Novels"],
  languages: ["English", "Hindi", "Kannada", "Konkani"],
};

export const timeline: TimelineItem[] = [
  {
    date: "2022 — 2026",
    title: "B.E, Computer Science & Engineering",
    org: "Bapuji Institute of Engineering and Technology, Bangalore · CGPA 8.76",
  },
  {
    date: "2025 — 2026",
    title: "Flagship project build cycle",
    org: "AeroSense, DocMind & SalesPulse",
    description:
      "Built three end-to-end systems from scratch — predictive maintenance ML, a RAG document assistant, and an ETL + BI pipeline — to anchor internship and new-grad applications.",
  },
  {
    date: "2026",
    title: "Job search & take-home assignments",
    org: "AI/ML, Data Science & SDE roles",
    description:
      "Completed take-home assignments including a legal-contract clause extraction pipeline (CUAD dataset) and a full-stack mini content engine, alongside active interview prep.",
  },
];

export const skillGroups: SkillGroup[] = [
  { category: "Programming", icon: "Code2", skills: ["Python", "Java", "SQL", "JavaScript"] },
  {
    category: "AI / ML",
    icon: "BrainCircuit",
    skills: ["scikit-learn", "LangChain", "LangGraph", "RAG / FAISS", "Mistral AI / Groq"],
  },
  {
    category: "Data Science",
    icon: "BarChart3",
    skills: ["Pandas", "NumPy", "Power BI", "Chart.js", "SQLite"],
  },
  {
    category: "Web Development",
    icon: "Layers",
    skills: ["FastAPI", "React", "Node.js / Express", "Streamlit"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["SQLite", "MongoDB", "FAISS (vector store)", "PostgreSQL", "MySQL"],
  },
  { category: "Tools", icon: "Wrench", skills: ["Git & GitHub", "VS Code", "Streamlit Cloud"] },
];
// NOTE: "Cloud" and "DevOps" categories from the original brief are intentionally
// omitted — there's no real cloud/DevOps experience on record, and listing
// AWS/Docker/Kubernetes here would be fabricated for a recruiter-facing page.

export const projects: Project[] = [
  {
    slug: "aerosense",
    name: "AeroSense",
    tag: "Predictive Maintenance Platform",
    description:
      "ML platform trained on NASA's CMAPSS turbofan degradation dataset, predicting remaining useful life. Originally built targeting GE Aerospace's Data Science Intern track.",
    features: [
      "Random Forest & Gradient Boosting models, R² = 0.975",
      "FastAPI backend serving live predictions",
      "React dashboard for fleet-level health monitoring",
    ],
    tech: ["FastAPI", "React", "scikit-learn", "NASA CMAPSS"],
    github: "https://github.com/KarthikDaivadnya",
    liveDemo: null,
  },
  {
    slug: "docmind",
    name: "DocMind",
    tag: "RAG Document Assistant",
    description:
      "Retrieval-augmented document Q&A assistant built from scratch on LangChain and Mistral AI.",
    features: [
      "FAISS vector store for semantic search over uploaded docs",
      "Upload-and-ask workflow via a FastAPI + React interface",
      "Resolved a Python 3.14 → 3.11 venv compatibility issue with LangChain",
    ],
    tech: ["LangChain", "Mistral AI", "FAISS", "FastAPI", "React"],
    github: "https://github.com/KarthikDaivadnya",
    liveDemo: null,
  },
  {
    slug: "salespulse",
    name: "SalesPulse",
    tag: "ETL Pipeline & BI Dashboard",
    description:
      "End-to-end ETL pipeline over realistic raw sales data, ending in dashboards people can actually read.",
    features: [
      "SQL transformations into SQLite from raw source data",
      "Automated Excel report generator",
      "Interactive Chart.js dashboard + companion Power BI report",
    ],
    tech: ["Pandas", "SQLite", "SQL", "Power BI", "Chart.js"],
    github: "https://github.com/KarthikDaivadnya",
    liveDemo: null,
  },
  {
    slug: "multi-agent-ai-system",
    name: "Multi-Agent AI System",
    tag: "LangGraph Agent Orchestration",
    description:
      "Five cooperating agents orchestrated with LangGraph, equipped with tools and persistent memory.",
    features: [
      "5 agents coordinated via LangGraph over Groq's llama-3.3-70b-versatile",
      "DuckDuckGo search + calculator tool integration",
      "Persistent JSON memory across sessions, Streamlit UI",
    ],
    tech: ["LangGraph", "LangChain", "Groq", "Streamlit"],
    github: "https://github.com/KarthikDaivadnya",
    liveDemo: null,
  },
  {
    slug: "legal-contract-pipeline",
    name: "Legal Contract Intelligence Pipeline",
    tag: "Take-Home Assignment · Clause Extraction",
    description:
      "Modular Python pipeline for legal contract clause extraction and summarization over the CUAD dataset.",
    features: [
      "LLM provider abstraction spanning Groq, OpenAI, and Anthropic",
      "FAISS semantic search over contract clauses",
      "Streamlit demo app with accuracy evaluation against gold labels",
    ],
    tech: ["Python", "CUAD Dataset", "FAISS", "Streamlit", "Groq / OpenAI / Anthropic"],
    github: "https://github.com/KarthikDaivadnya",
    liveDemo: null,
  },
];

// Only real, countable numbers — no invented hackathon/certification/problem counts.
export const achievements = [
  { label: "Projects Shipped", value: projects.length + 4 }, // 5 flagship/major + smaller demo projects on GitHub
  { label: "Flagship Systems", value: 3 }, // AeroSense, DocMind, SalesPulse
];
