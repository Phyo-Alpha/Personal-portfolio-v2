import { studio20 } from "@/assets/company";
import { ckp_portal, happie_token, spl, syl, syl2, training_companion } from "@/assets/projects";
import {
  html,
  css,
  javascript,
  typescript,
  django,
  mongodb,
  git,
  figma,
  docker,
  react,
  python,
  tailwind,
  nextjs,
  nextjs2,
  wordpress,
  php,
} from "@/assets/tech";
import { Experience, Project } from "@/types";

export const technologies = [
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
    icon: react,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: 'WordPress',
    icon: wordpress
  },
  {
    name: "PHP",
    icon: php
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

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

export const experiences: Experience[] = [
  {
    title: "Front end Developer",
    company_name: "Studio20",
    icon: studio20,
    iconBg: "#383E56",
    date: `Apr 2024 – Present • ${
      new Date().getMonth() - new Date(2024, 4).getMonth() + 2 +  (12 * (new Date().getFullYear() -  new Date(2024, 4).getFullYear()))
    } months`,
    points: [
      "Built dashboards with Recharts.js & TanStack Tables, boosting user engagement by 25%.",
      "Created reusable UI components with ShadcnUI, reducing development time by 20%.",
      "Implemented SOLID principles and best practices for maintainable, scalable code.",
      "Set up Google Analytics and Ads integration for improved campaign tracking.",
      "Led cross-cultural team collaboration using ClickUp and Discord for timely delivery.",
      "Developed tech solutions to enhance Malaysian community outcomes.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Singapore Youth League Website Revamp",
    techs: [
      {
        techImg: react,
        name: "React.js",
      },
      {
        techImg: nextjs2,
        name: "NEXT.js",
      },
      {
        techImg: typescript,
        name: "Typescript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A newly revamped website for Singapore Youth League commissioned by the FAS organization. Introduced new features and pages.",
    image: syl2,
    link: 'https://syl.tth.asia',
  },
  {
    title: "Happie-Token",
    techs: [
      {
        techImg: react,
        name: "React.js",
      },
      {
        techImg: nextjs2,
        name: "NEXT.js",
      },
      {
        techImg: typescript,
        name: "Typescript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A website for creating, buying and distributing vouchers",
    image: happie_token,
    link: 'https://happietoken.com',
  },
  {
    title: "CKP Dashboard",
    techs: [
      {
        techImg: react,
        name: "React.js",
      },
      {
        techImg: nextjs2,
        name: "NEXT.js",
      },
      {
        techImg: typescript,
        name: "Typescript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A dashboard application for managing invoices and payments between businesses",
    image: ckp_portal,
    link: 'https://stg.ckp.tth.asia',
  },
  {
    title: "Training Companion",
    techs: [
      {
        techImg: react,
        name: "React.js",
      },
      {
        techImg: nextjs2,
        name: "NEXT.js",
      },
      {
        techImg: typescript,
        name: "Typescript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A website design for providing training materials, assessments and learning modules for medical students.",
    image: training_companion,
  },
  {
    title: "Singapore Youth League",
    techs: [
      {
        techImg: wordpress,
        name: "WordPress",
      },
      {
        techImg: php,
        name: "PHP",
      },
      {
        techImg: javascript,
        name: "JavaScript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A website for fans and followers of SYL league in singapore, to get updates and news about the matches and latest events.",
    image: syl,
    link:'https://syl.sg',
  },
  {
    title: "Singapore Premier League",
    techs: [
      {
        techImg: wordpress,
        name: "WordPress",
      },
      {
        techImg: php,
        name: "PHP",
      },
      {
        techImg: javascript,
        name: "JavaScript",
      },
      {
        techImg: tailwind,
        name: "Tailwind CSS",
      },
    ],
    description: "A website owned by FAS where the latest matches, fixtures and standings of singapore cups teams are displayed.",
    image: spl,
  },
];
