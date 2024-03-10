import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import TwitterSentiment from "@/public/project1.png";
import BigBarStrategyImg from "@/public/project2.png";
import TopMateImg from "@/public/project3.jpeg";

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
    title: "Problem Setter Intern",
    location: "Coding Ninjas",
    description:
      "Curating and testing several CP Problems for various Hiring Challenges and the CodeStudio Platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 -7 Months",
  },
  {
    title: "Software Engineer Intern",
    location: "Microsoft",
    description:
      "Worked on SCRIPT MEO (Microsoft Email Orchestrator) Endpoints Integration using C# and .NET in Supply Chain Cogs Crew Organization. Got a PPO on completion of my internship.",
    icon: React.createElement(FaMicrosoft),
    date: "2022 -2 Months",
  },
  {
    title: "Software Engineer Intern",
    location: "Media.net",
    description:
      "Working in Auto-Template Ads Team on Image Generation from text, Animating Images and Keyword Extraction from Ad Titles to achieve maximum clicks on an Ad. Got a Full-time on completion of my internship.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 -6 Months",
  },
  {
    title: "Software Engineer",
    location: "Microsoft",
    description:
      "Working on Microsoft Agreements team to streamline Contract Agreements and speed up the process by 5x.",
    icon: React.createElement(FaMicrosoft),
    date: "2023-24 -7 Months",
  },
  {
    title: "Software Engineer II",
    location: "Google",
    description:
      "Working in the Google GEO team to rollout ML models to prevent fraud data publication on Google Maps.",
    icon: React.createElement(FaGoogle),
    date: "2024 - Present ",
  },
] as const;

export const projectsData = [
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Prepared a manual Dataset of size around 3.5k with comments, posts and images from Twitter for training and testing purpose.",
    tags: ["Python", "X API", "Matplotlib", "Data Visualization"],
    imageUrl: TwitterSentiment,
  },
  {
    title: "Big-Bar-Strategy",
    description:
      "Implemented Big Bar Strategy, achieving 52% strike rate and 43k profit trading 2 lots over 4 months. Proficient in strategy implementation and backtesting..",
    tags: [
      "Backtesting",
      "Analysis",
      "Risk Management",
      "Tools",
      "Strategy Development",
    ],
    imageUrl: BigBarStrategyImg,
  },
  {
    title: "Helping Students on TopMate",
    description:
      "I am on the verge of completing 100 mentorship sessions on Topmate.",
    tags: ["Programming", "Communication", "Coding", "Guidance", "Tech"],
    imageUrl: TopMateImg,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "C++",
  "Java",
  "Javascript",
  "Data Structures and Algorithms",
  " Software Design",
  "Object Oriented Programming",
  "Operating System",
  "Database Management Systems",
  "Computer Networking",
  "Linux/Unix",
  "Git",
  "TCP/IP",
  "Distributed System",
] as const;
