type skillsTypes = {
  name: string;
  level: number;
  category: string;
  icon: string;
  image: boolean;
};

export const skills: skillsTypes[] = [
  {
    name: "JavaScript",
    level: 100,
    category: "Frontend",
    icon: "fa-brands fa-js",
    image: false,
  },
  {
    name: "NextJS",
    level: 100,
    category: "Frontend",
    icon: "/images/skills/nextjs.svg",
    image: true,
  },
  {
    name: "tailwindcss",
    level: 100,
    category: "Frontend",
    image: true,
    icon: "/images/skills/tailwindcss.png",
  },
  {
    name: "React",
    level: 100,
    category: "Frontend",
    icon: "/images/skills/react.svg",
    image: true,
  },
  {
    name: "Node.js",
    level: 80,
    category: "Backend",
    image: false,
    icon: "fa-brands fa-node-js",
  },
  {
    name: "TypeScript",
    level: 100,
    category: "Frontend",
    image: true,
    icon: "/images/skills/typescriipt.png",
  },
  { name: "Nestjs", level: 95, category: "Backend", image: true, icon: "/images/skills/nestjs.png" },
  {
    name: "Supabase",
    level: 80,
    category: "Backend",
    image: true,
    icon: "/images/skills/supabase.png",
  },
  {
    name: "ExpressJs",
    level: 75,
    category: "Backend",
    image: true,
    icon: "/images/skills/expressjs.svg",
  },
  {
    name: "Firebase",
    level: 80,
    category: "Backend",
    image: true,
    icon: "/images/skills/firebase.png",
  },
  {
    name: "UI/UX Design",
    level: 50,
    category: "Design",
    image: false,
    icon: "fa-brands fa-quinscape",
  },
  {
    name: "MongoDB",
    level: 80,
    category: "Database",
    image: true,
    icon: "/images/skills/MongoDB.png",
  },
  {
    name: "Postgresql",
    level: 80,
    category: "Database",
    image: true,
    icon: "/images/skills/postgresql.png",
  },
  {
    name: "Prisma",
    level: 80,
    category: "Database",
    image: false,
    icon: "fa-solid fa-database",
  },
  // {
  //   name: "TypeORM",
  //   level: 65,
  //   category: "Database",
  //   image: false,
  //   icon: "fa-solid fa-table",
  // },
  {
    name: "React Native",
    level: 100,
    category: "Cross Platform",
    image: false,
    icon: "fa-brands fa-react",
  },
  {
    name: "Android Studio",
    level: 65,
    category: "Mobile",
    image: false,
    icon: "fa-brands fa-android",
  },
  {
    name: "Flutter",
    level: 100,
    category: "Cross Platform",
    image: false,
    icon: "fa-brands fa-flutter",
  },
  {
    name: "Docker",
    level: 65,
    category: "DevOps",
    image: false,
    icon: "fa-brands fa-docker",
  },
];
