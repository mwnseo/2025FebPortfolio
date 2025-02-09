export const Bio = {
  name: "Minseo Lee",
  description: "I",
  github: "#",
  resume:
    "https://docs.google.com/document/d/1yGbBv84DQYUZ9n_CxtyGracnEDzkxss_0dvIH7PjlXk/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/minseo-lee-64181b256/",
  twitter: "#",
  insta: "#",
  facebook: "#",
};

export const skillsData = {
  techSkills: {
    title: "Technical Skills",
    skills: [
      { name: "Lua", },
      { name: "Kotlin", },
      { name: "Python", },
      { name: "C", },
      { name: "Java", },
      { name: "JavaScript", },
      { name: "HTML/CSS", },
      { name: "Dart", },
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      { name: "Git", },
      { name: "Linux", },
      { name: "Docker", },
      { name: "Gradle", },
      { name: "Maven", },
      { name: "Figma", },
      { name: "Flutter", },
      { name: "MongoDB", },
    ],
  },
  frameworkLibraries: {
    title: "Frameworks and Libraries",
    skills: [
      { name: "React.js", },
      { name: "Node.js", },
      { name: "Spring Boot", },
      { name: "Mockito", },
    ],
  },
};

export const experiences = [
  {
    id: 1,
    img: "https://i.postimg.cc/k6QTTPhy/channels4-profile.jpg",
    role: "Certification Program",
    company: "Hewlett Packard Enterprise",
    date: "December 2024",
    desc: `
- Designed a RESTful API using Java Spring Boot to manage employee records, supporting HTTP requests and JSON data uploads.
- Explored Java Spring Boot and GreenLake Cloud Platform documentation to draft proposals for scalable web services.
- Implemented CRUD operations and developed then tested API functionality with Mockito`,
    skills: [
      "Java",
      "Spring Boot",
      "Mockito",
      "RESTful API",
    ],
  },
  {
    id: 2,
    img: "https://i.postimg.cc/bGXdp73b/unnamed.webp",
    role: "Roblox Game Developer",
    company: "Freelance / Private Game Studio",
    date: "September 2024 - November 2024",
    desc: `
- Built a multiplayer growth-based game inspired by Agar.io that amassed over 13.9 million visits and 1,000 concurrent players.
- Implemented core game mechanics including player progression, collision detection, and state management.
- Developed data persistence systems for player progress and collaborated with team for asset integration.`,
    skills: [
      "Lua",
      "Team Collaboration",
      "Game Development",
    ],
  },
];

export const projects = [
  {
    id: 9,
    title: "Universal Fitness",
    date: "August 2024 - December 2024",
    description:`
Collaborated with a team to develop a Kotlin Multiplatform fitness application for Android and iOS, integrating cross-platform functionality using Jetpack Compose for shared UI components and Ktor for backend services. Features include curated news, workout generator, calorie progress tracking, and social media.`,
    image: "/ff1.png",
    tags: ["Kotlin", "Android Studio", "Ktor", "Microsoft Azure", "Jetpack Compose"],
    category: "mobile apps",
    github: "https://github.com/mwnseo/Universal-Fitness",
    webapp: "https://venom0110agar.wixsite.com/my-site",
  },
  {
    id: 0,
    title: "PintOS - Model Operating System",
    date: "August 2024 - December 2024",
    description: `
    Designed and implemented Unix-based operating system using C and worked on the 
    development of the PintOS operating system, focusing on multithreading, 
    synchronization, and memory management.
    Implemented and tested multithreaded applications, ensuring fine-grained 
    synchronization while optimizing performance and accuracy.
    Debugged and analyzed kernel behavior using GDB, including thread stacks, 
    user program loaders, and system calls.`,
    image: "/pinos.png",
    tags: ["React", "Firebase", "Material UI"],
    category: "others",
    github: "https://github.com/mwnseo/PintOS-Project0",
    webapp: "https://venom0110agar.wixsite.com/my-site",
  },
  {
    id: 1,
    title: "Portfolio Website",
    date: "January 2025 - Present",
    description:
      "This is my portfolio website that I built using React.js featuring a responsive design and an interactive UI.",
    image: "/portfolio.png",
    tags: ["React.js", "Material UI", "CSS", "JavaScript", "HTML"],
    category: "web apps",
    github: "https://github.com/mwnseo/portfolio-new",
    webapp: "https://mwnseo.github.io/portfolio-new/",
  },
  {
    id: 2,
    title: "Chat Quest",
    date: "December 2024 - Present",
    description:
      "A full-stack real-time chat application featuring real-time messaging, online user tracking, file/image sharing, message history, responsive design, and more. This project is still in continuous development and testing.",
    image: "/noImage.png",
    tags: ["React.js", "Vite", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS", "MongoDB"],
    category: "web apps",
    github: "https://github.com/mwnseo/video-chat-site",
    webapp: "https://venom0110agar.wixsite.com/my-site",
  },
];

export const education = [
  {
    id: 0,
    img: "https://i.postimg.cc/SXHsj3L6/unnamed.jpg",
    school: "Louisiana State University",
    date: "Aug 2022 - Present",
    grade: "3.5 GPA", 
    desc: "Currently pursuing a B.S. in Computer Science at LSU with a concentration in Software Engineering. Completed multiple courses in software development, algorithms, database management, and networking. Multiple dean's list awards recieved.",
    degree: "Bachelor of Science - Computer Science in Software Engineering",
  },
  {
    id: 1,
    img: "https://i.postimg.cc/dDkcxVyn/images.jpg",
    school: "Family Christian Academy",
    date: "Aug 2018 - May 2022",
    grade: "4.23 GPA",
    desc: "Recieved a high school diploma with multiple honors and dual enrollment credits completed as the salutatorian of the graduating class of 2022.",
    degree: "High School Diploma, Salutatorian",
  },
];
