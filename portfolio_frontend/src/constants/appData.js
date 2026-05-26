import logo from "../assets/logo.jpg";
import profile from "../assets/p2.png";

import demoVideo from "../assets/projectImageOrVideo/demo1.mp4";
import demoImage from "../assets/projectImageOrVideo/webimagedemo.jpg";

export const APP_DATA = {
  profilePic: profile,
  owner: "User XXX",
  logo: logo,

  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 75 },
    { name: "Cyber Security", level: 60 }
  ],

  categories: [
    {
      id: "certifications",
      title: "Certifications",
      items: [
        {
          title: "Java Full Stack Development",
          desc: "Completed full stack training with projects",
          details: "Covered Java, Spring Boot, React, and MySQL"
        }
      ]
    },
    {
      id: "hackathons",
      title: "Hackathons",
      items: [
        {
          title: "NASA Hackathon",
          desc: "Participated in global hackathon",
          details: "Worked on real-world space data challenges"
        }
      ]
    }
  ],


  education: [
    {
      title: "B.Tech in Computer Science",
      place: "XYZ College",
      year: "2022 – 2026",
      desc: "Focused on Web Development & Cyber Security"
    },
    {
      title: "Higher Secondary",
      place: "PQR School",
      year: "2020 – 2022",
      desc: "Percentage: 92%"
    }
  ],


  experience: [
    {
      title: "React Portfolio Project",
      place: "Personal Project",
      year: "2026",
      desc: "Built responsive portfolio using React & Tailwind"
    },
    {
      title: "Cyber Security Certification",
      place: "Online Course",
      year: "2025",
      desc: "Hands-on training in ethical hacking"
    }
  ],


  projects: [
    {
      id: 1,
      title: "AutoDevOps",
      image: demoImage,
      video: demoVideo,
      description:
        "Automates CI/CD pipelines using Docker and GitHub Actions.",
      tech: ["React", "Node.js", "Docker"],
      github: "https://github.com/yourrepo",
      live: "https://yourlive.com"
    }
  ]
};