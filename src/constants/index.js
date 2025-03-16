import {
  web,
  javascript,
  html,
  css,
  python,
  git,
  springBoot,
  wipro,
  vibes,
  onlinejob,
  banking,
  java,
  github,
  mysql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springBoot,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  
  {
    name: "Python",
    icon: python,
  },
  
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  
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
  
  
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Wipro Technologies",
    icon: wipro,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developed and optimized RESTful APIs using Java, Spring Boot, improving system performance.",
      "Implemented microservices architecture with Eureka, Zuul, reducing load by 10%.",
      "Enhanced API response time by 50% using Redis caching and query optimization.",
      "Achieved 90% test coverage , ensuring robust application quality.",
      "Improved database performance by 15% through optimized SQL queries.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Online Job Portal App",
    description:
      "The Online Job Portal is a web-based application designed to connect job seekers and employers. The system allows job seekers to browse and apply for jobs, while employers can post job openings and manage applications.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      
      {
        name: "Cloud AWS",
        color: "orange-text-gradient",
      },
    ],
    image: onlinejob,
    visit_link: "https://github.com/Suravaram0539/Online-Job-Portal-App",
  },
  {
    name: "Banking Application",
    description:
      "A Banking Application system using Springboot. We have Account Management like Create Account, Delete Account, View Account, View All Accounts, Money Transfer,Deposit,WithDraw services. The Backend will expose RESTFul API's.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "orange-text-gradient",
      },

    ],
    image: banking,
    visit_link: "https://github.com/Suravaram0539/Banking-Application-with-SpringBoot",
  },
  {
    name: "Student Management System(CRUD)",
    description:
      "A Student Management System is a web-based application that helps in managing student records, including creating, reading, updating, and deleting (CRUD) student data.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "orange-text-gradient",
      },
    ],
    image: vibes,
    visit_link: "https://github.com/Suravaram0539/Basic-CRUD-Application",
  },
];

export { services, technologies, experiences, projects };
