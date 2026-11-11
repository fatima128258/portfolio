import type {
  Achievement,
  Certification,
  ContactInfo,
  Education,
  Experience,
  Fact,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
  TimelineItem,
} from "@/types";

export const siteConfig = {
  name: "Fatima Ramzan",
  title: "Fatima Ramzan | Software Engineer & Full Stack Developer",
  description:
    "Software Engineering student and Full Stack Developer specializing in Next.js, React, and TypeScript. Building scalable web applications with strong UI/UX and clean architecture.",
  url: "https://fatimaramzan.dev",
  ogImage: "/assets/og-image.svg",
  locale: "en_US",
  keywords: [
    "Fatima Ramzan",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineering Student",
    "Web Developer Pakistan",
    "Freelance Developer",
  ],
};

export const personalInfo = {
  name: "Fatima Ramzan",
  firstName: "Fatima",
  lastName: "Ramzan",
  roles: [
    "Software Engineering Student",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
  ],
  location: "Pakistan",
  bio: "I build modern, scalable web applications with a focus on clean architecture, performance, and thoughtful user experience — primarily with React, Next.js, and TypeScript.",
  about:
    "I am a Software Engineering student and Full Stack Developer specializing in React and Next.js. My work spans polished frontend interfaces, REST APIs, and database-backed applications. I prioritize clarity in code, accessibility, and performance — and I approach each project with product thinking, not just implementation.",
  resumeUrl: "/assets/Fatima-Ramzan-Resume.pdf",
};

export const contactInfo: ContactInfo = {
  email: "fatimaramzan739@gmail.com",
  github: "https://github.com/fatimaramzan",
  location: "Pakistan",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: contactInfo.github, icon: "github" },
];

export const navItems: NavItem[] = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Projects Completed", value: 8, suffix: "" },
  { label: "Client Engagements", value: 8, suffix: "+" },
  { label: "Core Technologies", value: 15, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Frontend Engineering Focus",
    description:
      "Developed proficiency in React, TypeScript, and Tailwind CSS through component-driven, responsive interfaces.",
  },
  {
    year: "2025",
    title: "Software Engineering & Full Stack",
    description:
      "Started Bachelor's degree and expanded into Next.js, Node.js, REST APIs, and databases — shipping end-to-end applications.",
  },
  {
    year: "2026",
    title: "Product & Freelance Work",
    description:
      "Building production-ready web products while pursuing software engineering internships and client collaborations.",
  },
];

export const achievements: Achievement[] = [
  {
    id: "skill-swap",
    number: "01",
    title: "Skill Swap Platform Architecture",
    description:
      "Engineered a full-stack Next.js and Supabase ecosystem implementing a three-tier architecture, featuring secure authentication, real-time data synchronization, and a custom state-tracked, time-based credit system.",
  },
  {
    id: "rbac-security",
    number: "02",
    title: "Enterprise RBAC Security",
    description:
      "Architected a secure Smart Human Resource Management System utilizing the MERN stack, designing and deploying robust JSON Web Token (JWT) workflows alongside strict Role-Based Access Control (RBAC) security protocols.",
  },
  {
    id: "figma-precision",
    number: "03",
    title: "Figma-to-Code UI Precision",
    description:
      "Bridge the gap between design and development by prototyping high-fidelity user experiences in Figma before implementing them with absolute pixel-perfect accuracy in React and Tailwind CSS.",
  },
  {
    id: "restful-api",
    number: "04",
    title: "RESTful API Integration",
    description:
      "Designed and successfully integrated scalable Express.js RESTful APIs with relational Supabase data pipelines and non-relational MongoDB instances, streamlining frontend-to-backend communication.",
  },
];
export const facts: Fact[] = [
  { label: "Location", value: "Pakistan" },
  { label: "Discipline", value: "Full Stack" },
  { label: "Primary Stack", value: "Next.js · React" },
  { label: "Working Style", value: "Detail-oriented" },
  { label: "Availability", value: "Open to roles" },
  { label: "Languages", value: "English, Urdu, Punjabi" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, description: "Semantic markup, accessibility, SEO optimization" },
      { name: "CSS", level: 92, description: "Flexbox, Grid, animations, responsive design" },
      { name: "JavaScript", level: 90, description: "ES6+, async/await, DOM manipulation, events" },
      { name: "TypeScript", level: 85, description: "Types, interfaces, generics, strict mode" },
      { name: "Tailwind CSS", level: 93, description: "Utility-first, responsive, custom configurations" },
      { name: "React", level: 90, description: "Hooks, context, state management, performance" },
      { name: "Next.js", level: 88, description: "App router, SSR, API routes, optimization" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82, description: "Event-driven, non-blocking, scalable servers" },
      { name: "Express.js", level: 80, description: "Routing, middleware, authentication, error handling" },
      { name: "REST APIs", level: 85, description: "Design patterns, endpoints, status codes, versioning" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 80, description: "Documents, collections, aggregation pipelines" },
      { name: "PostgreSQL", level: 75, description: "Relations, queries, indexing, transactions" },
      { name: "Supabase", level: 78, description: "Real-time, auth, migrations, row-level security" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 88, description: "Branching, commits, rebasing, conflict resolution" },
      { name: "GitHub", level: 90, description: "Repos, PRs, CI/CD, collaboration workflows" },
      { name: "VS Code", level: 95, description: "Extensions, debugging, keyboard shortcuts, settings" },
      { name: "Figma", level: 82, description: "UI design, prototyping, component systems, handoff" },
    ],
  },
  {
    title: "Office & Productivity",
    skills: [
      { name: "Microsoft Word", level: 90, description: "Document formatting, templates, collaboration" },
      { name: "Microsoft Excel", level: 85, description: "Formulas, pivot tables, data analysis, charts" },
      { name: "Microsoft PowerPoint", level: 88, description: "Presentations, animations, design principles" },
      { name: "Google Docs", level: 90, description: "Real-time editing, sharing, commenting features" },
      { name: "Google Sheets", level: 85, description: "Formulas, automation, data visualization" },
      { name: "Google Slides", level: 88, description: "Slide design, transitions, speaker notes" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "personal-study-mentor",
    title: "Personal Study Mentor",
    subtitle: "Plan · Quiz · Revise · Track Progress",
    description:
      "One calm study workspace for your semester — plan sessions, take quizzes, and track progress.",
    longDescription:
      "Personal Study Mentor is a full study companion that brings subjects, topics, tasks, quizzes, notes, goals, reminders, reports, and a rule-based Study Assistant into one account. Students can schedule sessions, review weak topics, and stay on track with a unified dashboard built for real coursework.",
    image: "/assets/projects/personal-study-mentor.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Unified dashboard with stats and today’s plan",
      "Subjects, topics, tasks & goals tracking",
      "Study planner, reminders & quick notes",
      "Quizzes, attempts & performance reports",
      "Rule-based Study Assistant suggestions",
    ],
    liveUrl: "https://personal-ai-mentor.vercel.app/",
    githubUrl: "https://github.com/fatima128258/personal-ai-mentor",
    category: "EdTech",
  },
  {
    id: "al-barkat-school",
    title: "Bright Future",
    subtitle: "Admin · Dashboard · Management", 
    description:
      "A comprehensive school management system with admin dashboard for managing students, staff, and fees.",
    longDescription:
      "Bright Future is a full-featured school management system designed for principals and administrators. The admin dashboard provides oversight of total students, staff members, subjects offered, and pending fees. It streamlines school operations through centralized student portal features, attendance tracking, and staff role-based access management. For testing, use credentials: **test@gmail.com** / **test12345**",
    image: "/assets/projects/school.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Admin dashboard with real-time stats",
      "Student and staff management",
      "Attendance tracking system",
      "Subject and class batch organization",
      "Fee tracking and pending payments",
      "Student portal features",
      "Role-based access control",
    ],
    liveUrl: "https://bright-future-zeta.vercel.app/",
    githubUrl: "",
    category: "Education", 
  },
  {
    id: "learn-flow",
    title: "LearnFlow",
    subtitle: "Multi-Tenant Learning Management System",
    description:
      "A full-stack, multi-tenant LMS for structured course delivery, assessments, and learning analytics.",
    longDescription:
      "LearnFlow is a full-stack, multi-tenant learning management system built with Next.js, React, TypeScript, Node.js, Express, Prisma, and PostgreSQL. It supports role-based learning workflows for students, instructors, organizations, and admins, with secure authentication, course management, assessments, progress tracking, purchasing, communication, and production-ready infrastructure.",
    image: "/assets/projects/learn-flow.png",
    techStack: [
      "Next.js",
      "Node.js",
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Role-based access for Students, Instructors, Organizations & Admins",
      "Course creation with modules, lessons & quizzes",
      "Sequential course learning and real-time progress tracking",
      "Quiz attempts, scoring, pass/fail logic & certificates",
      "Course purchasing with mock payment and checkout flow",
      "Student progress and organization analytics",
      "Real-time chat and notifications",
      "Secure authentication, password reset & email verification",
      "Multi-tenant organization and data isolation",
      "Redis-powered rate limiting and background job processing",
    ],
    liveUrl: "https://learn-flow-web-indol.vercel.app/",
    githubUrl: "",
    category: "EdTech",
  },
  {
    id: "green-basket",
    title: "Green Basket",
    subtitle: "Marketplace · Local Shops · E-commerce",
    description:
      "A neighborhood marketplace connecting local stores with shoppers to browse and buy fresh products.",
    longDescription:
      "Green Basket is a modern e-commerce marketplace designed for local shopping. It enables customers to browse products from neighborhood stores, discover nearby shopping locations, and support local businesses. The platform features an intuitive product search, store locator functionality, and a seamless shopping experience that brings fresh finds from local vendors directly to shoppers.",
    image: "/assets/projects/green-basket.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Local store discovery and browsing",
      "Product catalog with store filters",
      "Location-based store finder",
      "Seamless shopping experience",
      "Support for neighborhood businesses",
      "Responsive marketplace design",
    ],
    liveUrl: "https://alan-croce.vercel.app/",
    githubUrl: "",
    category: "E-commerce",
  },
  {
    id: "al-qadir",
    title: "Al-Qadir Swings",
    subtitle: "Park · Recreation · Community",
    description:
      "A community park and recreational facility showcase with amenities and visitor engagement features.",
    longDescription:
      "Al-Qadir Swings is a modern web platform for a community park and recreational space. It showcases park amenities, allows visitors to explore facilities, and provides a seamless experience for community members to engage with local recreation.",
    image: "/assets/projects/alqadir.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Park amenities showcase",
      "Interactive visitor experience",
      "Responsive design for all devices",
      "Community engagement platform",
      "Modern and intuitive interface",
    ],
    liveUrl: "https://al-qadir-swings.vercel.app/",
    githubUrl: "",
    category: "Community",
  },
  {
    id: "ajaia-docs",
    title: "Ajaia Docs",
    subtitle: "Edit · Collaborate · Share",
    description:
      "A full-stack document editing platform with rich-text editor and email-based collaboration features.",
    longDescription:
      "Ajaia Docs is a full-stack document editing and collaboration platform built with Next.js, React, TypeScript, Tiptap, Prisma, and Supabase PostgreSQL. It allows users to sign up, log in, create and edit rich-text documents, and securely save their work. Users can also share documents through email with Viewer or Editor permissions, while session-based authentication and server-side authorization help keep documents and user access secure. The platform features a powerful rich-text editor powered by Tiptap, supporting formatting, headings, lists, and media embedding — giving users a smooth writing and editing experience. Document sharing is built in, letting owners invite collaborators via email and assign permission levels to control who can view or edit. Authentication is handled through session-based flows, and server-side authorization ensures that only permitted users can access or modify protected documents. Prisma manages the database layer on top of Supabase PostgreSQL, providing reliable data persistence and type-safe queries. Overall, Ajaia Docs combines a modern editing experience with secure collaboration and robust backend architecture.",
    image: "/assets/projects/text.png",
    techStack: ["Next.js", "React", "TypeScript", "Tiptap", "Prisma", "Supabase PostgreSQL"],
    features: [
      "Rich-text editor powered by Tiptap with formatting support",
      "User sign-up and session-based authentication",
      "Document creation, editing, and secure saving",
      "Email-based document sharing with Viewer or Editor permissions",
      "Server-side authorization for document access control",
      "Prisma ORM with Supabase PostgreSQL for data persistence",
      "Collaborative workflow with role-based permission management",
    ],
    liveUrl: "https://doc-one-sand.vercel.app/",
    githubUrl: "",
    category: "Productivity",
  },
  {
    id: "learn-hub",
    title: "Learn Hub",
    subtitle: "Courses · Quizzes · Timed Assessments",
    description:
      "An online learning platform with course content and timed MCQ quizzes for structured practice.",
    longDescription:
      "Learn Hub is an online learning platform focused on structured courses and assessments. Learners can take timed multiple-choice quizzes with clear scoring, option sets, and a calm quiz interface designed for focused practice across subjects like HTML and more.",
    image: "/assets/projects/learn-hub.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Course-based learning paths",
      "Timed MCQ quizzes with countdown",
      "Marks tracking per attempt",
      "Clean multi-option question UI",
      "Responsive learning experience",
    ],
    liveUrl: "https://learnhub-project-sage.vercel.app/",
    githubUrl: "https://github.com/fatima128258/Learnhub-project",
    category: "EdTech",
  },
];

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web applications with modern frontend, robust APIs, and scalable architecture.",
    icon: "layers",
  },
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect, accessible, and animated interfaces with React, Next.js, and Tailwind CSS.",
    icon: "layout",
  },
  {
    title: "Backend Development",
    description:
      "Secure REST APIs, authentication, and server logic with Node.js and Express.",
    icon: "server",
  },
  {
    title: "Responsive Website Development",
    description:
      "Fluid layouts that feel intentional from 320px mobile screens to large desktops.",
    icon: "smartphone",
  },
  {
    title: "API Development",
    description:
      "Clean, documented, and performant APIs designed for maintainability and scale.",
    icon: "cable",
  },
  {
    title: "Database Design",
    description:
      "Thoughtful schemas and data models using MongoDB, PostgreSQL, and Supabase.",
    icon: "database",
  },
  {
    title: "Performance Optimization",
    description:
      "Faster loads through image optimization, code splitting, caching, and Core Web Vitals focus.",
    icon: "zap",
  },
  {
    title: "UI Implementation",
    description:
      "Turning Figma designs into production-ready, interactive interfaces with craft and precision.",
    icon: "palette",
  },
];

export const experiences: Experience[] = [
  {
    id: "fullstack-developer",
    role: "Full Stack Developer",
    company: "Full Stack Web Development",
    location: "Remote · Pakistan",
    period: "2024 — Present",
    duration: "2 Years",
    type: "development",
    description:
      "Designing and developing end-to-end web applications — from responsive frontends to REST APIs and database-backed systems.",
    achievements: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developed scalable REST APIs with JWT authentication and middleware architecture",
      "Implemented responsive UIs with Tailwind CSS and advanced React state management",
      "Integrated third-party APIs and payment gateways into production applications",
      "Deployed applications using cloud services and configured CI/CD pipelines",
    ],
  },
  {
    id: "ecommerce-assistant",
    role: "E-commerce Assistant",
    company: "Daraz Marketplace",
    location: "Pakistan",
    period: "2021 — 2024",
    duration: "3 Years",
    type: "other",
    description:
      "Managing end-to-end e-commerce operations on Daraz — from product catalog management to order fulfillment.",
    achievements: [
      "Managed and maintained product listings with accurate content and up-to-date information",
      "Optimized product titles, descriptions, and categories for better search visibility",
      "Handled inventory tracking and stock updates to prevent over-selling",
      "Coordinated order processing and fulfillment workflows for timely delivery",
      "Monitored store performance metrics and assisted in promotional campaign execution",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Software Engineering",
  institution: "Virtual University of Pakistan",
  period: "2025 — Present",
  status: "In Progress",
  description:
    "Coursework in software engineering principles, algorithms, databases, and modern web development — complemented by continuous hands-on project work.",
};

export const certifications: Certification[] = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    description:
      "Fluid layouts, Flexbox, CSS Grid, and accessible responsive design patterns.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    description:
      "ES6+, algorithmic problem-solving, and core JavaScript fundamentals.",
  },
  {
    title: "React Development",
    issuer: "Meta · Coursera",
    year: "2025",
    description:
      "Component-driven UI, hooks-based state, and reusable React architecture.",
  },
  {
    title: "Next.js App Router",
    issuer: "Vercel Learning Path",
    year: "2025",
    description:
      "App Router, server components, routing strategies, and SEO practices.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ayesha Khan",
    role: "Product Founder",
    company: "LaunchLab",
    content:
      "Fatima delivered a polished Next.js experience with clear communication and reliable timelines. The interface quality and attention to detail were consistently strong.",
    rating: 5,
    avatar: "/assets/avatars/ayesha.svg",
  },
  {
    id: "t2",
    name: "Omar Siddiqui",
    role: "Engineering Lead",
    company: "NorthByte",
    content:
      "She combines frontend craft with solid full-stack judgment. The codebase was clean, reusable, and easy for the team to extend.",
    rating: 5,
    avatar: "/assets/avatars/omar.svg",
  },
  {
    id: "t3",
    name: "Sara Malik",
    role: "Design Director",
    company: "PixelCraft Studio",
    content:
      "Fatima translates design intent into precise interaction and layout. Collaboration was efficient, and the final implementation matched the product vision closely.",
    rating: 5,
    avatar: "/assets/avatars/sara.svg",
  },
];

export const footerLinks = {
  navigation: navItems,
  social: socialLinks,
  copyright: `© ${new Date().getFullYear()} Fatima Ramzan. All rights reserved.`,
};
