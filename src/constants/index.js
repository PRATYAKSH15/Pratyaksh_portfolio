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
    icon: samaveda,
    iconBg: "#ffffff",
    date: "Jan 2026 – Present",
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
        color: "purple-text-gradient",
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
        color: "purple-text-gradient",
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
  // {
  //   name: "IMDB Review Analyser",
  //   description:
  //     "A sentiment analysis tool that automatically classifies movie reviews from IMDB as positive or negative using Natural Language Processing (NLP) and Machine Learning.",
  //   tags: [
  //     {
  //       name: "NLP",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "machine learning",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: imdb,
  //   source_code_link: "https://github.com/PRATYAKSH15/IMDB-Sentiment-Analysis",
  //   demo_link: "http://www.demo.com",
  // },
  // {
  //   name: "AI Websearch Agent",
  //   description:
  //     "A web search engine that utilizes AI to provide relevant search results and suggestions based on user queries, enhancing the search experience.",
  //   tags: [
  //     {
  //       name: "Langchain",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "GroqAPI",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "web integration",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: whatsapp,
  //   source_code_link: "https://github.com/PRATYAKSH15/Web-Search-Agent",
  //   demo_link: "http://www.demo.com" ,
  // },
  // {
  //   name: "Credit card fraud detection",
  //   description:
  //     "This project focuses on detecting fraudulent credit card transactions using logistic regression. It aims to identify patterns and anomalies in transaction data to mitigate risks in financial systems.",
  //   tags: [
  //     {
  //       name: "Scikit-learn",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "python",
  //       color: "green-text-gradient",
  //     },
  //     // {
  //     //   name: "",
  //     //   color: "pink-text-gradient",
  //     // },
  //   ],
  //   image: credit,
  //   source_code_link: "https://github.com/PRATYAKSH15/CreditCard_Fraud",
  //   demo_link: "http://www.demo.com",
  // },
];

// export default socialLinks = [
//   { name: "GitHub", icon: "/icons/github.svg", url: "https://github.com/your-username" },
//   { name: "LinkedIn", icon: "/icons/linkedin.svg", url: "https://linkedin.com/in/your-profile" },
//   { name: "X", icon: "/icons/x.svg", url: "https://x.com/your-handle" },
//   { name: "LeetCode", icon: "/icons/leetcode.svg", url: "https://leetcode.com/your-handle" },
//   { name: "Codeforces", icon: "/icons/codeforces.svg", url: "https://codeforces.com/profile/your-handle" },
//   { name: "GitHub2", icon: "/icons/github.svg", url: "https://github.com/your-username2" },
// ];

// export const achievements = [
//   {
//     title: "Winner - Hackathon 2024",
//     description: "Secured 1st place among 150+ teams for building an AI-powered job matching platform.",
//     date: "March 2024",
//     icon: "/assets/trophy.png", // Optional
//   },
//   {
//     title: "Open Source Contributor",
//     description: "Contributed to major React libraries, including Formik and React Hook Form.",
//     date: "Ongoing",
//     icon: "/assets/github.png",
//   },
//   {
//     title: "Speaker - DevConf India",
//     description: "Gave a talk on 'Scaling MERN apps with Serverless Architecture'.",
//     date: "December 2023",
//     icon: "/assets/mic.png",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };
