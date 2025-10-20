// Data Objects
export const personalInfo = {
  name: "Kishan Chaudhary",
  title: "Frontend Developer",
  location: "Kathmandu, Nepal",
  email: "kncy24@gmail.com",
  phone: "9746592097",
  bio: "As a front-end developer and AI enthusiast, I sculpt captivating web experiences with HTML, CSS, and JavaScript. My curiosity for artificial intelligence drives me to explore innovative algorithms, blending tech and creativity. I’m dedicated to crafting intuitive interfaces that spark connection and inspire progress."
};

export const skills = {
  languages: [
    { name: 'JavaScript', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'SQL', percentage: 75 },
  ],
  frameworks: [
    { name: 'React', percentage: 90 },
    { name: 'Django', percentage: 80 },
  ],
  libraries: [
    { name: 'NumPy', percentage: 85 },
    { name: 'Pandas', percentage: 85 },
    { name: 'OpenCV', percentage: 80 },
  ],
  tools: [
    { name: 'Git', percentage: 90 },
  ],
  other: [
    { name: 'IoT', percentage: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "MockUp Interview ",
    description: "",
    technologies: ['Python', 'Django', 'SQL', 'API', 'HTML', 'CSS'],
    image: "src/assets/Mockupinterview.png",
    github: "https://github.com/KISHANCHAUDHARY24/Mockup-Interview-Project",
    live: "#"
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Collaborative project management tool with real-time updates",
  //   technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
  //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
  //   github: "#",
  //   live: "#"
  // },
  // {
  //   id: 3,
  //   title: "AI Chat Application",
  //   description: "Real-time chat app with AI integration and modern UI",
  //   technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel'],
  //   image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
  //   github: "#",
  //   live: "#"
  // }
];

// const education = [
//   {
//     degree: "Bachelor of Computer Science",
//     school: "University of Technology",
//     year: "2021",
//     gpa: "3.8/4.0"
//   }
// ];