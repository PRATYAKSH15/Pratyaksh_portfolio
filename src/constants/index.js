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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  ibm,
  ieee,
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
  // {
  //   id: "experience",
  //   title: "Work",
  // },
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
    title: "Frontend Developer Intern",
    company_name: "IBM CSRBOX",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "July 2024 – Aug 2024",
    points: [
      "Built responsive and cross-browser compatible interfaces using HTML, CSS, JavaScript, and React.js.",
      "Worked on improving UI/UX of internal tools based on user feedback.",
      "Collaborated with senior developers to build reusable frontend components.",
      "Participated in code walkthroughs and contributed to team discussions for better accessibility.",
    ],
  },
  {
    title: "Operation Head",
    company_name: "IEEE - USICT, Technical Society",
    icon: ieee,
    iconBg: "#383E56",
    date: "Sept 2023 – Aug 2024",
    points: [
      "Led public relations and event promotion for IEEE Synapse'9 with over 400 participants.",
      "Collaborated with multiple tech societies for seamless event coordination and management.",
      "Enhanced branding and event engagement through effective communication strategies.",
      "Supported the tech team in designing and improving UI for event platforms.",
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
    name: "MindNest",
    description:
      "MindNest is a mental health companion platform that offers self-help resources, community forums, and personalized self-assessments. Built with React, TailwindCSS, Node.js, Express, and MongoDB, it ensures secure access with Clerk JWT while providing a clean and responsive user experience.",
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
    demo_link: "", // add demo link if available
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
      {
        name: "Inngest",
        color: "orange-text-gradient",
      },
      {
        name: "Gemini",
        color: "pink-text-gradient",
      },
    ],
    image: guidelyai, // replace with imported image variable
    source_code_link: "https://github.com/PRATYAKSH15/GuidelyAI",
    demo_link: "", // add demo link if available
  },

  {
    name: "AI Code Reviewer",
    description:
      "MERN-based web application that allows users to input source code and receive intelligent feedback using Google's Gemini AI. Designed with a sleek dark theme and typing animations.",
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
        name: "GenAI",
        color: "pink-text-gradient",
      },
      {
        name: "AI Integration",
        color: "green-text-gradient",
      },
    ],
    image: review,
    source_code_link: "https://github.com/PRATYAKSH15/AI-code-reviewer",
    demo_link: "http://www.demo.com",
  },
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
    demo_link: "http://www.demo.com",
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
    demo_link: "http://www.demo.com",
  },
  {
    name: "Portfolio",
    description:
      "This is a personal portfolio website built with React.js. It showcases my projects, skills, and contact information in a clean and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PRATYAKSH15/Pratyaksh_portfolio",
    demo_link: "http://www.demo.com",
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
