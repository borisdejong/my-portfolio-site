// scripts/cv-data.js
export const myCV = {
  personalInfo: {
    name: "Boris de Jong",
    title: "Product Manager @ Belsimpel",
    email: "mail@borisdejong.dev",
    linkedin: "https://linkedin.com/in/borisdejong",
    github: "https://github.com/borisdejong"
  },
  summary: "Highly motivated individual with a passion for web development and a strong desire to learn new technologies...",
  experience: [
    {
      title: "Product Manager",
      company: "Belsimpel - Gomibo",
      duration: "Jan 2025 - Now",
      description: "Part of the the Channel Apps engineering team as well as the Channel Apps product team. Responsible for the front-end of the Belsimpel and Gomibo websites.",
      keywords: ["Front-end", "Team Channel Apps", "Gitlab", "Remix/React Router"]
    },
    {
      title: "Product Owner",
      company: "Belsimpel - Gomibo",
      duration: "May 2023 - Jan 2025",
      description: "Product Owner within the Channel Apps engineering team.",
      keywords: ["Front-end", "Team Channel Apps", "Gitlab", "Remix/React Router"]
    },
    {
      title: "Founder",
      company: "WebNexus",
      duration: "Sept 2016 - Sept 2023",
      description: "Founder of WebNexus.",
      keywords: ["WordPress", "HTML", "CSS", "Product Design"]
    }
  ],
  education: [
    {
      degree: "MSc. Information Science",
      institution: "University of Groningen",
      year: "2023",
      keywords: ["Artificial Intelligence", "Large Language Models", "Transformer Models"]
    },
    {
      degree: "BSc. Information Science",
      institution: "University of Groningen",
      year: "2020",
      keywords: ["Python", "Machine Learning", "Natural Language Processing"]
    },
    // Add more education objects
  ],
  skills: [
    { name: "JavaScript", type: "language", level: "Intermediate" },
    { name: "HTML", type: "language", level: "Advanced" },
    { name: "CSS", type: "language", level: "Intermediate" },
    { name: "Git", type: "tool", level: "Basic" },
    { name: "React (Learning)", type: "framework", level: "Beginner" }
  ],
  projects: [
    {
      name: "Quiz Application",
      description: "An interactive multiple-choice quiz application built to test JavaScript knowledge.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/borisdejong/quiz-app", // Replace with your actual project link
      githubLink: "https://github.com/borisdejong/quiz-app",
      keywords: ["Quiz", "DOM Manipulation", "Event Handling"]
    },
    // Add more project objects
  ]
};