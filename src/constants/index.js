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
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "work",
    title: "Projects",
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
  // {
  //   name: "GetFit",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  //   demo_link: "http://www.demo.com" ,
  // },
  // {
  //   name: "ChatGO",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  //   demo_link: "http://www.demo.com" ,
  // },
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
    source_code_link: "https://github.com/",
    demo_link: "http://www.demo.com",
  },
  {
    name: "IMDB Review Analyser",
    description:
      "A sentiment analysis tool that automatically classifies movie reviews from IMDB as positive or negative using Natural Language Processing (NLP) and Machine Learning.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: imdb,
    source_code_link: "https://github.com/PRATYAKSH15/IMDB-Sentiment-Analysis",
    demo_link: "http://www.demo.com",
  },
  // {
  //   name: "Whatsapp chat Analyser",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: whatsapp,
  //   source_code_link: "https://github.com/",
  //   demo_link: "http://www.demo.com" ,
  // },
  {
    name: "Credit card fraud detection",
    description:
      "This project focuses on detecting fraudulent credit card transactions using logistic regression. It aims to identify patterns and anomalies in transaction data to mitigate risks in financial systems.",
    tags: [
      {
        name: "Scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: credit,
    source_code_link: "https://github.com/PRATYAKSH15/CreditCard_Fraud",
    demo_link: "http://www.demo.com",
  },
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
