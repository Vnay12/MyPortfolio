const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/data.png" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Algorithms", imgPath: "/images/algo.png" },
  { text: "Security", imgPath: "/images/secure.png" },
  { text: "Process", imgPath: "/images/Process.png" },
];

const counterItems = [
  {
    value: 2,
    suffix: "+",
    label: "Years of Experience",
    imgPath: "/images/Workexp.png",
  },
  {
    value: 8,
    suffix: "+",
    label: "Enterprise Projects",
    imgPath: "/images/project.png",
  },
  {
    value: 6,
    suffix: "",
    label: "Open Source PR Merged",
    imgPath: "/images/OpenS.png",
  },
  {
    value: 80,
    suffix: "%",
    label: "Caffeine Intake 😁",
    imgPath: "/images/coffee.png",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/logo1.png",
  },
  {
    imgPath: "/images/logos/logo3.png",
  },
  {
    imgPath: "/images/logos/logo4.png",
  },
  {
    imgPath: "/images/logos/logo5.png",
  },
  {
    imgPath: "/images/logos/logo1.png",
  },
  {
    imgPath: "/images/logos/logo3.png",
  },
  {
    imgPath: "/images/logos/logo4.png",
  },
  {
    imgPath: "/images/logos/logo5.png",
  },
  {
    imgPath: "/images/logos/logo1.png",
  },
  {
    imgPath: "/images/logos/logo3.png",
  },
];
export const myProjects = [
  {
    title: "BookMySmile",
    desc: "A smart medical appointment booking platform.",
    subdesc:
      "Enables patients to book, manage, and track doctor appointments with ease .",

    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/project/project1.mp4",
    logo: "/assets/logo.png",
    arrow: "Check Live Site",
    arrow2: "Video Walkthrough",
    arrowimg: "/images/youtube.png",
    arrowimg2: "/assets/www.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "node.js",
        path: "assets/nodejs.png",
      },
      {
        id: 3,
        name: "appwrite",
        path: "/assets/appwrite.svg",
      },
      {
        id: 4,
        name: "vonage",
        path: "/assets/vonage.svg",
      },
    ],
  },
  {
    title: "QureAI",
    desc: "An AI-driven platform designed to cure interview anxiety.",
    subdesc:
      "Boost confidence with smart, real time AI-powered mock interviews and feedback.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/project/project2.mp4",
    logo: "/assets/project-logo1.png",
    arrow: "Check Live Site",
    arrow2: "Video Walkthrough",
    arrowimg: "/images/youtube.png",
    arrowimg2: "/assets/www.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "openAI",
        path: "assets/chatgpt.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/postgresql.svg",
      },
    ],
  },
  {
    title: "My Portfolio",
    desc: "A personal portfolio showcasing my work, skills, and journey.",
    subdesc:
      "Built with modern web tech to highlight projects, blogs, and AI-focused creations",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/project/project3.mp4",
    logo: "/images/portfolio.png",
    arrow: "Video Walkthrough ",
    arrowimg2: "/images/youtube.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "threejs",
        path: "assets/threejs.png",
      },
      {
        id: 3,
        name: "Reactspring",
        path: "/assets/spring.svg",
      },
      {
        id: 4,
        name: "blender",
        path: "/assets/blender.png",
      },
    ],
  },
  {
    title: "Coding Bootcamp",
    desc: "Hands-on tutorials and in-depth explorations of core coding concepts and algorithms.",
    subdesc:
      "Learn coding with me from basics to advanced, using clear explanations and practical examples.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/project/project4.mp4",
    arrow: "My YouTube Channel",
    arrowimg2: "/images/youtube.png",
    logo: "/images/youtube.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Data",
        path: "/assets/data.png",
      },
      {
        id: 2,
        name: "Algorithms",
        path: "assets/algorithm.png",
      },
      {
        id: 3,
        name: "AI",
        path: "/assets/Ai.png",
      },
      {
        id: 4,
        name: "Leetcode",
        path: "/assets/Leetcode.png",
      },
    ],
  },
];

const abilities = [
  {
    imgPath: "/images/ps.png",
    title: "Problem Solving",
    desc: "I break down complex issues and build scalable, efficient solutions through clean, thoughtful code.",
  },
  {
    imgPath: "/images/adaptation.png",
    title: "Adaptability & System Thinking",
    desc: "Able to quickly learn new technologies and understand how different components interact to build cohesive, maintainable systems.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Delivering projects promptly without compromising on quality or meticulous attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Provided clear and helpful pull requests that were reviewed and merged, contributing positively to the project",
    imgPath: "images/workexp/tensorflow.svg",
    logoPath: "images/workexp/TF.png",
    title: "Open Source Contributor - Google TensorFlow",
    date: "Jan 2025 - Present",
    responsibilities: [
      "Contributed to the TensorFlow codebase by enhancing features and fixing bugs.",
      "Collaborated with a global community of developers to improve code quality and documentation.",
      "PartiParticipated in code reviews, submitted pull requests, and helped get contributions merged by maintaining quality and consistency.",
    ],
  },
  {
    review: "Submitted modular code using Spring annotations and REST standards, improving structure and maintainability.",
    imgPath: "images/workexp/SpringLogo.svg",
    logoPath: "images/workexp/Spring.png",
    title: "Open Source Contributor - Java Spring Framework",
    date: "December 2024 - Present",
    responsibilities: ["Implemented and enhanced RESTful APIs using Spring Boot, contributing code via structured pull requests.",
      "Collaborated with maintainers to follow best practices in dependency injection, exception handling, and code modularity.",
      "Reviewed and tested PRs for issues like request validation, API response consistency, and service layer logic."],

  },
  {
    review: "Showed strong technical curiosity and hands-on ability by successfully designing, testing, and integrating FPGA-based solutions with real hardware systems",
    imgPath: "",
    logoPath: "/",
    title: "Research and Development Scientist - Alphasemi Technologies",
    date: "OCT 2023 - JAN 2025",
    responsibilities: ["Researched and analyzed FPGA and chipset semiconductor architectures through industry-focused literature.",
      "Developed and tested experimental designs using FPGA boards and NS-3 simulations.",
      "Validated proposed solutions on physical hardware, refining functionality and performance.",
      "Integrated custom accelerator designs with existing hardware/software stacks for compatibility and reliability.",
    ],
  },
   {
    review: "Delivered secure, performant backend solutions with strong API design and reliable data handling in a real-time SCADA environment",
    imgPath: "/images/workexp/SELOGO.svg",
    logoPath: "/images/workexp/SE.jpeg",
    title: "Software Engineer - R&D",
    date: "SEPT 2022 - OCT 2025",
    responsibilities: [
      "Built and maintained backend services using Node.js and Express for real-time SCADA data handling",
      "Designed secure RESTful APIs and optimized data flow between system components.",
      "Implemented input validation and protection against OWASP Top 10 vulnerabilities.",
      "Contributed to database design and ensured efficient data processing and retrieval.",
    ],
  },
];

const expCards2 = [
  {
    review: "Provided clear and helpful pull requests that were reviewed and merged, contributing positively to the project",
    imgPath2: "images/workexp/tensorflow.svg",
    logoPath2: "images/workexp/TF.png",
    title2: "Open Source Contributor - Google TensorFlow",
    date2: "Jan 2025 - Present",
    responsibilities2: [
      "Contributed to the TensorFlow codebase by enhancing features and fixing bugs.",
      "Collaborated with a global community of developers to improve code quality and documentation.",
      "PartiParticipated in code reviews, submitted pull requests, and helped get contributions merged by maintaining quality and consistency.",
    ],
  },
]

const expLogos = [
  {
    name: "logo1",
    imgPath: "",
  },
  {
    name: "logo2",
    imgPath: "",
  },
  {
    name: "logo3",
    imgPath: "",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expCards2,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
