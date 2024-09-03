import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflix from '@/public/project/netflix.png'
import getir from '@/public/project/Getir.png'
import apple from '@/public/project/Apple.png'
import sport from '@/public/project/SporCenter.png'
import veteriner from '@/public/project/Veteriner App.png'
import vue from '@/public/project/E-commerce.png'
import Crypto from '@/public/project/Crypto.png'

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
    title: "Graduated bootcamp",
    location: "Remote",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "İzmir, TR",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "This is may Netlix Clone project.",
    tags: ["React", "Typescript", "Material UI", "Axios", "Movie Trailer","Multi Carousel","Css"],
    imageUrl: netflix,
  },{
    title: "Sport Center",
    description:
      "In this project, a Sports Center's website has been designed to be responsive. HTML, CSS, and JavaScript have been used in the project.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: sport,
  },{
    title: "E-Commerce",
    description:
      "In this project, a E- Commerce's website has been designed to be responsive. Vue,HTML, CSS, and JavaScript have been used in the project.",
    tags: ["Vue","Supabase","Ant Design","Pinia", "CSS", "Javascript"],
    imageUrl: vue,
  },
  {
    title: "Apple",
    description:
      "In the project where I created the clone page of Apple, I used HTML, CSS, and JavaScript. Additionally, I used AOS for effects, Swiper for sliders, and Lightbox to create a photo gallery.",
    tags: ["HTML", "CSS", "Javascript", "Swipper"],
    imageUrl: apple,
  },
  {
    title: "Veteriner App",
    description:
      "This is Front End Bootcamp project ",
    tags: ["React", "Material UI", "Axios", "Formik", "Yup"],
    imageUrl: veteriner,
  },{
    title: "Getir Clone",
    description:
      "I designed the homepage of getir.com in the project. In my project where I used React.js, I used Css for styling, Router for the navbar, and Vidstrack for video designs.",
    tags: ["React", "Material UI", "Axios", "Css","Contex Api"],
    imageUrl: getir,
  },{
    title: "Crypto App",
    description:
      "This project is a web-based application designed to track and manage cryptocurrencies. It provides users with a detailed view of various cryptocurrencies, including their current prices, historical data, and related news. The application leverages the CoinGecko API to fetch cryptocurrency data and includes features to enhance the user experience.",
    tags: ["React", "Next.js", "Axios", "Scss","Contex Api","React Query"],
    imageUrl: Crypto,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Scss",
  "Material UI",
  "Supabase",
  "Firebase",
  "Axios",
  "Aos",
  "Swipper",
] as const;