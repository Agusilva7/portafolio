import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PIVideoGames from "@/public/PIVideoGames.jpeg"
import pasantia from "@/public/pasantia.jpeg"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Soy Henry bootcamp",
    location: "Buenos Aires, Argentina",
    description:
      "I completed a 4-month bootcamp at SoyHenry",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "CALM ES SIMPLE, Buenos Aires",
    description:
    "I participated in a 2-month internship at Calm es Simple, where they were conducting a website refactoring, migrating from WordPress to Next.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm currently a Full Stack developer with a specialization in Frontend. My skill set includes expertise in JavaScript, TypeScript, React, Redux, Tailwind, Prisma, Postgrest, SQL, Express, and Next.js. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Internship Calm es Simple",
    description:
      "For my final project at SoyHenry, I was selected for an internship at Calm es Simple, where they were migrating their website from WordPress to Next.js. During the internship, I worked on creating static landing pages, the checkout process, and payment gateways.",
    tags: ["TypeScript","React","Next.js","Styled-Components"],
    imageUrl: pasantia,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
  title: "PI VideGames",
    description:
    "For my individual project at SoyHenry, I developed a Single Page Application for Video Games. It utilized an API to display all games and featured features such as alphabetical filtering, category filtering, and platform filtering. Users could also create new games through a form with error handling, and the data was saved in a database.",
    tags:["JavaScript","React","Redux","Node","Express","Sequelize","PostgrestSQL"],
    imageUrl: PIVideoGames,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Styled Components",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;