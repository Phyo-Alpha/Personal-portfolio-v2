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
  postgres,
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
    name : "PostgreSQL",
    icon: postgres
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
      "Conducted code reviews for interns, ensuring they adhere to company standards, while supporting their learning process and bestpractices.","Collaborated and worked on 6 major projects with a team of 6 people, assisting in the development of data-base, internal APIs,middle-wares and software solutions, as well as setting up the CI/CD pipelines with GitHub actions.","Designed , Developed and modified over 25+ software solutions and custom reusable components increasing code reusability by 50% and reducing development time by 20% .","Reduced website load time by 40% through optimization and code minification, utilizing open source tools like google lighthouse toboast website performance and SEO.","Increased user engagement by 25% with enhanced UI features and real-time feedback loops.",
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
