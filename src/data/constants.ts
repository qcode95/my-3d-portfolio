export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  REACT = "react",
  ANGULAR = "angular",
  JAVA = "java",
  SPRING_BOOT = "springboot",
  NEXTJS = "nextjs",
  NODEJS = "nodejs",
  NESTJS = "nestjs",
  EXPRESS = "express",
  TAILWIND = "tailwind",
  POSTGRES = "postgres",
  MYSQL = "mysql",
  ORACLE = "oracle",
  GIT = "git",
  GITHUB = "github",
  GITLAB = "gitlab",
  NPM = "npm",
  FIREBASE = "firebase",
  SUPABASE = "supabase",
  REDIS = "redis",
  RABBITMQ = "rabbitmq",
  ACTIVEMQ = "activemq",
  NGINX = "nginx",
  DOCKER = "docker",
  LINUX = "linux",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
  K8S = "k8s",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const skill = (
  id: number,
  name: SkillNames,
  label: string,
  color: string,
  icon: string,
): Skill => ({
  id,
  name,
  label,
  shortDescription: label,
  color,
  icon,
});

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: skill(
    1,
    SkillNames.HTML,
    "HTML",
    "#e34f26",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  ),
  [SkillNames.CSS]: skill(
    2,
    SkillNames.CSS,
    "CSS",
    "#1572b6",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  ),
  [SkillNames.JS]: skill(
    3,
    SkillNames.JS,
    "JavaScript",
    "#f7df1e",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ),
  [SkillNames.TS]: skill(
    4,
    SkillNames.TS,
    "TypeScript",
    "#3178c6",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ),
  [SkillNames.REACT]: skill(
    5,
    SkillNames.REACT,
    "React",
    "#61dafb",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  ),
  [SkillNames.ANGULAR]: skill(
    6,
    SkillNames.ANGULAR,
    "Angular",
    "#dd0031",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  ),
  [SkillNames.JAVA]: skill(
    29,
    SkillNames.JAVA,
    "Java",
    "#f89820",
    "/assets/logos/java-mono.svg",
  ),
  [SkillNames.SPRING_BOOT]: skill(
    30,
    SkillNames.SPRING_BOOT,
    "Spring Boot",
    "#6db33f",
    "/assets/logos/spring-boot-mono.svg",
  ),
  [SkillNames.NEXTJS]: skill(
    7,
    SkillNames.NEXTJS,
    "Next.js",
    "#ffffff",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ),
  [SkillNames.NODEJS]: skill(
    8,
    SkillNames.NODEJS,
    "Node.js",
    "#339933",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  ),
  [SkillNames.NESTJS]: skill(
    9,
    SkillNames.NESTJS,
    "NestJS",
    "#e0234e",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  ),
  [SkillNames.EXPRESS]: skill(
    10,
    SkillNames.EXPRESS,
    "Express",
    "#ffffff",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ),
  [SkillNames.TAILWIND]: skill(
    11,
    SkillNames.TAILWIND,
    "Tailwind",
    "#38bdf8",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  ),
  [SkillNames.POSTGRES]: skill(
    12,
    SkillNames.POSTGRES,
    "PostgreSQL",
    "#4169e1",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ),
  [SkillNames.MYSQL]: skill(
    13,
    SkillNames.MYSQL,
    "MySQL",
    "#4479a1",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  ),
  [SkillNames.ORACLE]: skill(
    31,
    SkillNames.ORACLE,
    "OracleDB",
    "#f80000",
    "/assets/logos/oracle-mono.svg",
  ),
  [SkillNames.GIT]: skill(
    14,
    SkillNames.GIT,
    "Git",
    "#f05032",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  ),
  [SkillNames.GITHUB]: skill(
    15,
    SkillNames.GITHUB,
    "GitHub",
    "#ffffff",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  ),
  [SkillNames.GITLAB]: skill(
    16,
    SkillNames.GITLAB,
    "GitLab",
    "#fc6d26",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  ),
  [SkillNames.NPM]: skill(
    17,
    SkillNames.NPM,
    "NPM",
    "#cb3837",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  ),
  [SkillNames.FIREBASE]: skill(
    18,
    SkillNames.FIREBASE,
    "Firebase",
    "#ffca28",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  ),
  [SkillNames.SUPABASE]: skill(
    19,
    SkillNames.SUPABASE,
    "Supabase",
    "#3ecf8e",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  ),
  [SkillNames.REDIS]: skill(
    20,
    SkillNames.REDIS,
    "Redis",
    "#dc382d",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  ),
  [SkillNames.RABBITMQ]: skill(
    21,
    SkillNames.RABBITMQ,
    "RabbitMQ",
    "#ff6600",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  ),
  [SkillNames.ACTIVEMQ]: skill(
    32,
    SkillNames.ACTIVEMQ,
    "ActiveMQ",
    "#231f20",
    "/assets/logos/activemq-mono.svg",
  ),
  [SkillNames.NGINX]: skill(
    22,
    SkillNames.NGINX,
    "Nginx",
    "#009639",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  ),
  [SkillNames.DOCKER]: skill(
    23,
    SkillNames.DOCKER,
    "Docker",
    "#2496ed",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  ),
  [SkillNames.LINUX]: skill(
    24,
    SkillNames.LINUX,
    "Linux",
    "#ffffff",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  ),
  [SkillNames.AWS]: skill(
    25,
    SkillNames.AWS,
    "AWS",
    "#ff9900",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  ),
  [SkillNames.VIM]: skill(
    26,
    SkillNames.VIM,
    "Vim",
    "#019733",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  ),
  [SkillNames.VERCEL]: skill(
    27,
    SkillNames.VERCEL,
    "Vercel",
    "#ffffff",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  ),
  [SkillNames.K8S]: skill(
    28,
    SkillNames.K8S,
    "Kubernetes",
    "#326ce5",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  ),
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "October 2025",
    endDate: "Present",
    title: "Fullstack Web Developer",
    company: "Splus Software JSC",
    description: [
      "Builds fullstack features across React, Next.js, NestJS, and Node.js services.",
      "Develops responsive Tailwind interfaces and integrates them with typed backend APIs.",
      "Works with PostgreSQL, MySQL, DynamoDB, Redis, RabbitMQ, Docker, Nginx, and AWS in production-oriented systems.",
      "Contributes to microservice-based company projects including enterprise management, commerce, and AI-assisted workflows.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NESTJS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.MYSQL,
      SkillNames.REDIS,
      SkillNames.RABBITMQ,
      SkillNames.DOCKER,
      SkillNames.NGINX,
      SkillNames.AWS,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.GITLAB,
    ],
  },
  {
    id: 2,
    startDate: "May 2024",
    endDate: "December 2024",
    title: "Fullstack Web Developer",
    company: "FPT Software",
    description: [
      "Worked as a full-stack developer on FAS, an internal accounting system for FPT Software.",
      "Built the Contract Lifecycle Management module with CRUD, search, import/export, file upload, audit logging, and workflow stepper screens.",
      "Implemented role, office, ownership, and status-based permissions with complex validation and financial calculations.",
      "Optimized contract search and import flows with OracleDB indexing, pagination, async jobs, Redis distributed locks, ActiveMQ notifications, and stored procedures.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.ANGULAR,
      SkillNames.JAVA,
      SkillNames.SPRING_BOOT,
      SkillNames.ORACLE,
      SkillNames.REDIS,
      SkillNames.ACTIVEMQ,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.GITLAB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
