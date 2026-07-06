import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amazon,
  gssoc,
  samaveda,
  samavedalogo,
  carrent,
  jobit,
  tripguide,
  ibm,
  imdb,
  credit,
  whatsapp,
  review,
  nutri,
  guidelyai,
  mindnest,
  citizencare,
  devcollab,
  auditoragent,
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "ML & genAI Enthusiast",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Samaveda Capital",
    icon: samavedalogo,
    iconBg: "#ffffff",
    date: "Jan 2026 – June 2026",
    points: [
      "Built 5+ AI workflows using RAG, LangChain, and Gemini/OpenAI APIs for deal automation.",
      "Developed 10+ full-stack features/APIs with Next.js, FastAPI, PostgreSQL, and MongoDB.",
      "Deployed 3+ services via Docker, Vercel, and Render, improving performance by 30%.",
    ],
  },
  {
    title: "ML Trainee",
    company_name: "Amazon MLSS",
    icon: amazon,
    iconBg: "#ff9900",
    date: "Aug 2025 – Sep 2025",
    points: [
      "Selected from 65,000+ applicants for an intensive program focused on Deep Learning, NLP, and Generative AI.",
      "Designed and implemented 10+ LLM-based & agentic AI pipelines, improving model reasoning accuracy by 35%.",
      "Applied prompt engineering, model evaluation, and optimization to build scalable ML workflows.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GirlScript Summer of Code (GSSoC)",
    icon: gssoc,
    iconBg: "#e8f5e9",
    date: "Jul 2025 – Aug 2025",
    points: [
      "Engineered and optimized features using React, Next.js, Express.js, and REST APIs across 3 open-source projects.",
      "Reviewed and merged 100+ pull requests while mentoring 25+ contributors, ensuring code quality.",
      "Collaborated across distributed teams using Git workflows to improve delivery speed.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "IBM SkillsBuild Program",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Produced and optimized responsive web applications using React, Node.js, and modern JavaScript frameworks.",
      "Implemented automated CI/CD deployments using Vercel and Render, reducing load times by 30%.",
      "Completed 30+ industry-aligned modules on cloud computing, web development, and software deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Participated in flipkart grid6.0, TCS CodeVita and various other hackathons.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Completed 700+ DSA problems on across coding platforms like Leetcode, Codestudio, Gfg.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "Completed DSA C++ excellence certifation from Coding Ninjas.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "CitizenCare",
    description:
      "Citizens report problems. AI analyses them. Admins resolve them. Everyone stays informed — in real time. Features: Report Issues with location/photo, AI Analysis via Groq LLM, My Issues dashboard, Real-time Notifications with Socket.io, Role-based access (Citizen, Dept Admin, Main Admin), Issue Map with India choropleth, Analytics and CSV export.",
    tags: [
      {
        name: "React 19",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS v4",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Groq AI",
        color: "green-text-gradient",
      },
    ],
    image: citizencare,
    source_code_link: "https://github.com/PRATYAKSH15/CitizenCare",
    demo_link: "",
  },
  {
    name: "DevCollab",
    description:
      "A full-stack developer collaboration platform where developers find teammates, build projects together, and ship from one workspace. Features: Smart matching via Jaccard similarity, Real-time chat with Socket.IO, Kanban boards, Milestones with progress tracking, in-app notifications, Public project pages, AI tools (Groq), Redis rate limiting, BullMQ background jobs.",
    tags: [
      {
        name: "Next.js 14",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "orange-text-gradient",
      },
      {
        name: "Redis",
        color: "yellow-text-gradient",
      },
      {
        name: "BullMQ",
        color: "pink-text-gradient",
      },
      {
        name: "Groq AI",
        color: "green-text-gradient",
      },
    ],
    image: devcollab,
    source_code_link: "https://github.com/PRATYAKSH15/DevCollab",
    demo_link: "",
  },
  {
    name: "Elevatr",
    description:
      "Elevatr is a modern profile-enhancing platform built with Next.js, PostgreSQL, Clerk that helps users generate AI-crafted professional content including profile summaries, skill suggestions, cold emails, cover letters, and comprehensive resume analysis.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "SaaS",
        color: "pink-text-gradient",
      },
    ],
    image: review,
    source_code_link: "https://github.com/PRATYAKSH15/Elevatr",
    demo_link: "https://elevatr-sable.vercel.app",
  },

  {
    name: "GuidelyAI",
    description:
      "GuidelyAI is an AI-powered career guide built with Next.js, PostgreSQL, Clerk, and Inngest. It provides personalized career recommendations and insights, helping students and professionals make better decisions with a secure, seamless, and scalable platform.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Clerk JWT",
        color: "pink-text-gradient",
      },
      // {
      //   name: "Inngest",
      //   color: "orange-text-gradient",
      // },
      // {
      //   name: "Gemini",
      //   color: "pink-text-gradient",
      // },
    ],
    image: guidelyai, // replace with imported image variable
    source_code_link: "https://github.com/PRATYAKSH15/GuidelyAI",
    demo_link: "https://guidely-ai-teal.vercel.app",
  },

  {
    name: "MindNest",
    description:
      "MindNest is a mental health companion platform that offers self-help resources, community forums, and personalized self-assessments, main aim is to provide foster a supportive community.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "Clerk JWT",
        color: "pink-text-gradient",
      },
    ],
    image: mindnest, // replace with imported image variable
    source_code_link: "https://github.com/PRATYAKSH15/MindNest",
    demo_link: "https://mind-nest-nine.vercel.app",
  },

  // {
  //   name: "AI Code Reviewer",
  //   description:
  //     "MERN-based web application that allows users to input source code and receive intelligent feedback using Google's Gemini AI. Designed with a sleek dark theme and typing animations.",
  //   tags: [
  //     {
  //       name: "Reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "GenAI",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "AI Integration",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: review,
  //   source_code_link: "https://github.com/PRATYAKSH15/AI-code-reviewer",
  //   demo_link: "http://www.demo.com",
  // },
  {
    name: "NutriTrack - AI Nutrition Assistant",
    description:
      "AI-powered nutritionist built using Gemini 1.5 Flash. This app offers personalized meal insights and diet plans based on uploaded food images and user-specific dietary goals.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini 1.5 Flash",
        color: "green-text-gradient",
      },
      {
        name: "SQlite",
        color: "pink-text-gradient",
      },
    ],
    image: nutri,
    source_code_link: "https://github.com/PRATYAKSH15/NutriTrack",
    demo_link: "",
  },
  {
    name: "ChatGO",
    description:
      "Real-time chat application built with the MERN stack and Socket.IO, allowing users to send and receive instant messages and manage user profiles.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PRATYAKSH15/chatGO",
    demo_link: "",
  },
  {
    name: "MediSync",
    description:
      "An AI-powered healthcare platform leveraging LangChain RAG with vector embeddings and OpenAI to deliver real-time medical insights.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Langchain RAG",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PRATYAKSH15/MediSync.git",
    demo_link: "",
  },
  {
    name: "Auditor Agent",
    description:
      "Forensic document audit in minutes, not months. Upload GST returns, ITRs, bank statements, and Tally exports. Our AI cross-verifies every document and surfaces red flags with cited evidence — the same diligence Big 4 firms deliver, at 10x the speed.",
    tags: [
      {
        name: "AI Forensics",
        color: "blue-text-gradient",
      },
      {
        name: "Document AI",
        color: "green-text-gradient",
      },
      {
        name: "Groq",
        color: "orange-text-gradient",
      },
    ],
    image: auditoragent,
    source_code_link: "https://www.samavedacapital.in/auditor",
    demo_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
