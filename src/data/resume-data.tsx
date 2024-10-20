import { AmbitLogo, profileAvatar } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pouya Panahzadeh",
  initials: "PP",
  location: "Hamburg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Hamburg",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
  summary:
    "I'm a results-driven software developer with a more that 3 years of proffesional experience and an entrepreneurial background in building reliable and scalable software applications. My expertise lies in tech stacks such as Next.js, React, and NodeJs, along with databases like Postgresql, MySQL. Also have experience with testing frameworks like Jest and playwright. I'm well- versed in agile methodologies, CI/CD, and Git.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/34831088?s=400&u=bfdf4c1f40930497e90a3ad2dbd257329d013943&v=4",
  personalWebsiteUrl: "https://pou4a.me",
  contact: {
    email: "Pouyapanahzadeh@gmail.com",
    tel: "+49 157 322 90 336",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pouya-panahzadeh",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Pou4a",
        icon: XIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/pou4a/",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "SRH University Hamburg",
      degree: "Master of IT Management",
      start: "2022",
      end: "2024",
      logo: AmbitLogo,
    },
    {
      school: "Azad University",
      degree: "Bachelor of Information Technology",
      start: "2013",
      end: "2018",
      logo: AmbitLogo,
    },
  ],
  work: [
    {
      company: "Collect.AI",
      link: "https://collect.ai",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: AmbitLogo,
      start: "2022",
      end: null,
      description:
        "Pair Programmed with 3 engineers directly and reviewed the tech team's code to provide additional perspective and catch previously missed errors. Implemented the components using reusable units according to the Material Design resulting in much better DX(developer experience), improving projects readability and easier maintenance. Facilitated, collaborated, and designed user conversations with 6 other Front End Developers, during initial planning which resulted in fewer conflicts during the development process. Built +10 interfaces from visual designs and wireframes to be responsive, accessible, and performant across all types of devices.  Migrating and modernizing legacy codebases from JavaScript to TypeScript. ",
    },
    {
      company: "Moneyar",
      link: "https://moneyar.com",
      badges: ["Contract"],
      title: "Front-end Developer",
      logo: AmbitLogo,
      start: "2022",
      end: "2022",
      description:
        "Built and maintained the front end of the Moneyar platform using React.js, TypeScript, and Tailwind. Developed a cartable panel with mailing and user management features.",
    },
    {
      company: "Yektanet",
      link: "https://yektanet.com",
      badges: ["Remote"],
      title: "Web Performance Specialist",
      logo: AmbitLogo,
      start: "2021",
      end: "2022",
      description:
        "Optimized customer landing pages to enhance user experience and maximize conversion. Collaborated with a large team of over 200 members.",
    },
    {
      company: "Moneyar",
      link: "https://moneyar.com",
      badges: [],
      title: "WordPress Developer",
      logo: AmbitLogo,
      start: "2018",
      end: "2020",
      description:
        "Developed both frontend and backend using PHP, WordPress, and JavaScript. Created mobile-friendly landing pages.",
    },
    {
      company: "Karnotech",
      link: "https://karnotech.com",
      badges: [],
      title: "Intern WordPress Developer",
      logo: AmbitLogo,
      start: "2016",
      end: "2017",
      description:
        "Worked as a junior web developer, contributing to WordPress sites using PHP, JS, and jQuery.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Jest",
    "Playwright",
    "Agile Methodologies",
    "Git",
    "CI/CD",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "WordPress",
    "NestJs",
    "HTML5",
    "CSS3",
    "SASS",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
    "AWS",
    "IT Management",
    "Web Performance",
  ],
  projects: [
    {
      title: "Garlet.ir",
      techStack: [
        "Software Engineer",
        "React.js",
        "TypeScript",
        "NestJs",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      description:
        "Garlet is an online food ordering system. I developed the front end using React.js and TypeScript, and the back end using NestJs and PostgreSQL.",
      logo: AmbitLogo,
      link: {
        label: "garlet.ir",
        href: "https://garlet.ir/",
      },
    },
  ],
} as const;
