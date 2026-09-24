// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personal = {
  name: "Gitesh Kumar Patel",
  firstName: "Gitesh",
  title: "Data Scientist & AI Developer",
  tagline: "Data Science · Generative AI · RAG · Python · AI Application Development",
  bio: "Building data-driven solutions and intelligent AI applications with Python, SQL, Generative AI, RAG, and modern development tools.",
  aboutLong:
    "I am an Information Technology undergraduate and aspiring Data Scientist & AI Developer with hands-on experience building AI-powered applications, data-driven solutions, and practical software projects. My primary interests include Data Science, Artificial Intelligence, Generative AI, Retrieval-Augmented Generation, Python, SQL, and intelligent application development. I enjoy turning ideas into practical applications and continuously improving my problem-solving, programming, and AI development skills.",
  aboutSecondary:
    "I approach every project with a focus on building something genuinely useful — clean code, clear insights, and practical outcomes that demonstrate real technical depth.",
  email: "giteshp321@gmail.com",
  phone: "+91-6267166083",
  github: "https://github.com/Giteshkumar23",
  linkedin: "https://www.linkedin.com/in/giteshkumar23/",
  resume: "/Gitesh_Kumar_Patel_Resume.pdf",
  location: "India",
  photo: "/images/gitesh-profile.jpg",
};

export const aboutCards = [
  { label: "Degree", value: "B.Tech · Information Technology" },
  { label: "Institution", value: "SSTC, Bhilai" },
  { label: "Graduation", value: "Expected 2027" },
  { label: "CGPA", value: "8.05 / 10" },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    category: "AI & Data",
    items: ["Generative AI", "RAG", "Machine Learning", "Data Analysis"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Flask", "Streamlit", "Pandas", "Plotly"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
];

export const projects = [
  {
    id: "manufacturing-agent",
    featured: true,
    title: "AI-Powered Manufacturing Agent",
    subtitle: "Flagship AI Application",
    description:
      "An AI-powered manufacturing assistant designed to provide intelligent manufacturing-related interactions through a modular AI application architecture.",
    longDescription:
      "An AI-powered manufacturing assistant that leverages Groq-powered language models and a modular application architecture to provide intelligent manufacturing-related interactions. The system is built with Flask as the web backend, SQLAlchemy for data management, and follows a clean separation of concerns with agents, services, models, data layer, and web interface components.",
    technologies: ["Python", "Flask", "Groq", "SQLAlchemy", "SQLite", "Generative AI"],
    github: "https://github.com/Giteshkumar23/Manufacturing-Agent",
    demo: null,
    image: null,
    features: [
      "AI-powered manufacturing assistant interface",
      "Groq LLM integration for intelligent responses",
      "Flask web application backend",
      "SQLAlchemy ORM with SQLite database",
      "Modular architecture: agents, services, models, data layer",
      "Web interface for manufacturing interactions",
    ],
  },
  {
    id: "ask-my-docs",
    featured: true,
    title: "Ask My Docs",
    subtitle: "RAG Application",
    description:
      "A document question-answering application that uses Retrieval-Augmented Generation to answer questions from user-uploaded documents.",
    longDescription:
      "A document question-answering application built on a Retrieval-Augmented Generation (RAG) pipeline. Users upload their documents, which are processed and indexed for vector search. The system retrieves relevant context and generates accurate, context-aware answers. Deployed with Docker for reproducible environments.",
    technologies: ["Python", "RAG", "Docker", "Vector Search"],
    github: null,
    demo: null,
    image: null,
    features: [
      "Document upload and processing pipeline",
      "RAG pipeline for context-aware answers",
      "Vector search for semantic retrieval",
      "Context-grounded question answering",
      "Docker deployment for reproducibility",
    ],
  },
  {
    id: "ai-resume-analyzer",
    featured: true,
    title: "AI Resume Analyzer",
    subtitle: "AI-Powered ATS Tool",
    description:
      "An AI-powered resume analyzer that provides ATS-oriented scoring, keyword analysis, and AI-generated resume improvement feedback.",
    longDescription:
      "An AI-powered resume analysis tool that helps candidates optimize their resumes for Applicant Tracking Systems. Users upload their resume and receive ATS-oriented scoring, keyword gap analysis, and AI-generated improvement suggestions powered by Google Gemini. Built with Flask as the backend and SQLite for storing analysis history.",
    technologies: ["Python", "Flask", "SQLite", "Google Gemini"],
    github: null,
    demo: null,
    image: null,
    features: [
      "Resume upload and parsing",
      "ATS-oriented scoring analysis",
      "Keyword gap analysis",
      "AI-generated improvement feedback via Google Gemini",
      "Flask backend with SQLite storage",
      "Analysis history tracking",
    ],
  },
  {
    id: "aim-trainer",
    featured: false,
    title: "Aim Trainer",
    subtitle: "Python Application",
    description:
      "A Python-based aim training application focused on reaction speed, target interaction, scoring, and interactive gameplay.",
    longDescription:
      "A Python-based aim training application designed to improve reaction speed and targeting accuracy through interactive gameplay. The application tracks performance metrics, displays live scoring, and provides an engaging practice environment.",
    technologies: ["Python"],
    github: null,
    demo: null,
    image: null,
    features: [
      "Interactive target-based gameplay",
      "Reaction speed measurement",
      "Live scoring system",
      "Performance tracking",
    ],
  },
  {
    id: "snake-game",
    featured: false,
    title: "Snake Game",
    subtitle: "Python Application",
    description:
      "A Python-based Snake Game implementing player movement, collision detection, scoring, and game logic while applying programming and OOP concepts.",
    longDescription:
      "A classic Snake Game built in Python demonstrating core programming concepts including OOP design, event handling, collision detection, and game state management. A practical exercise in applying Python fundamentals to interactive application development.",
    technologies: ["Python"],
    github: null,
    demo: null,
    image: null,
    features: [
      "Player movement controls",
      "Collision detection logic",
      "Score tracking system",
      "OOP-based game architecture",
    ],
  },
];

export const journey = [
  {
    year: "Sep 2023",
    title: "Started Technical Journey",
    organization: "Self-Learning & Academic Study",
    description:
      "Began systematic learning of programming fundamentals, computer science concepts, and Information Technology foundations. Built the groundwork for Python development and logical problem-solving.",
    type: "education",
  },
  {
    year: "2024",
    title: "Programming Practice & DSA",
    organization: "Skill Development",
    description:
      "Deepened Python skills, practiced Data Structures & Algorithms, and began exploring data analysis concepts. Worked on academic projects applying programming fundamentals to practical problems.",
    type: "learning",
  },
  {
    year: "Aug – Sep 2025",
    title: "Web Development Training",
    organization: "CSVTU — Centre for Skill Development, Bhilai",
    description:
      "Completed vocational training in web development covering HTML, CSS, and JavaScript with hands-on practice. Achieved Grade A+ upon completion.",
    type: "training",
    badge: "Grade A+",
  },
  {
    year: "Feb 2026",
    title: "100 Days of Code: Python Pro Bootcamp",
    organization: "Udemy — Dr. Angela Yu",
    description:
      "Completed the comprehensive 56.5-hour Python bootcamp covering advanced Python, automation, web development, data science libraries, and project-based learning.",
    type: "certification",
    badge: "Certificate",
  },
  {
    year: "Jul 2026",
    title: "AI/ML Vocational Training",
    organization: "KodeZen Technologies",
    description:
      "Completed 4-week vocational training program in Artificial Intelligence & Machine Learning with exposure to AI/ML fundamentals, Generative AI, and practical AI application development.",
    type: "training",
    badge: "Certificate",
  },
  {
    year: "2026 – Present",
    title: "AI Application Development & Portfolio Projects",
    organization: "Independent Development",
    description:
      "Building AI-powered portfolio projects including an AI Manufacturing Agent, RAG-based document Q&A system, and AI Resume Analyzer. Applying Generative AI, RAG, Python, Flask, and SQL to real applications.",
    type: "current",
  },
  {
    year: "2027",
    title: "Expected B.Tech Graduation",
    organization: "Shri Shankaracharya Technical Campus, Bhilai",
    description:
      "Expected completion of B.Tech in Information Technology with a strong foundation in AI, Data Science, and software development.",
    type: "milestone",
  },
];

export const training = [
  {
    title: "AI/ML Vocational Training",
    organization: "KodeZen Technologies",
    duration: "4 Weeks",
    period: "July 2026",
    description:
      "Completed a 4-week vocational training program in Artificial Intelligence & Machine Learning with exposure to AI/ML fundamentals and practical learning.",
    technologies: ["Python", "Machine Learning", "AI", "Generative AI"],
  },
  {
    title: "Web Development Training",
    organization: "CSVTU — Centre for Skill Development and Informal Education",
    duration: "1 Month",
    period: "12 Aug 2025 – 12 Sep 2025",
    grade: "A+",
    description:
      "Completed vocational training in web development with hands-on exposure to HTML, CSS, JavaScript, and web application fundamentals.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const certifications = [
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    organization: "Udemy",
    issuer: "Dr. Angela Yu",
    date: "Feb. 18, 2026",
    duration: "56.5 total hours",
    credentialUrl: null,
    image: null,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    organization: "KodeZen Technologies",
    issuer: "KodeZen Technologies",
    date: "10-Jul-2026",
    duration: "4 Weeks — Vocational Training",
    credentialUrl: null,
    image: null,
  },
  {
    title: "Web Development Using HTML, JavaScript and CSS",
    organization: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    issuer: "CSVTU",
    date: "12.08.2025 – 12.09.2025",
    grade: "A+",
    credentialUrl: null,
    image: null,
  },
  {
    title: "Getting Started with Artificial Intelligence",
    organization: "IBM SkillsBuild",
    issuer: "IBM",
    date: "Sep 09, 2026",
    credentialUrl: null,
    image: null,
  },
  {
    title: "Create a Great Professional Resume",
    organization: "IBM",
    issuer: "IBM",
    date: null,
    credentialUrl: null,
    image: null,
  },
];

export const seo = {
  title: "Gitesh Kumar Patel | Data Scientist & AI Developer",
  description:
    "Portfolio of Gitesh Kumar Patel, a Data Scientist & AI Developer focused on Python, SQL, Generative AI, RAG, machine learning, and intelligent application development.",
  keywords:
    "Gitesh Kumar Patel, Data Scientist, AI Developer, Python Developer, Generative AI, RAG, Machine Learning, Portfolio, Bhilai, India",
  url: "https://giteshkumarpatel.dev",
};
