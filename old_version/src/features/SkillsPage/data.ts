import tailwindcss from "../../assets/tailwindcss.png";
import react from "../../assets/react.svg";
import typescript from "../../assets/typescriipt.png";
import mongodb from "../../assets/MongoDB.png";
import nestjs from "../../assets/nestjs.png";
import supabase from "../../assets/supabase.png";
import firebase from "../../assets/firebase.png";
import postgresql from "../../assets/postgresql.png";

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
    level: 90,
    category: "Frontend",
    icon: "fa-brands fa-js",
    image: false,
  },
  {
    name: "tailwindcss",
    level: 70,
    category: "Frontend",
    image: true,
    icon: tailwindcss,
  },
  {
    name: "React",
    level: 100,
    category: "Frontend",
    icon: react,
    image: false,
  },
  {
    name: "Node.js",
    level: 90,
    category: "Backend",
    image: false,
    icon: "fa-brands fa-node-js",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
    image: true,
    icon: typescript,
  },
  { name: "Nestjs", level: 80, category: "Backend", image: true, icon: nestjs },
  {
    name: "Supabase",
    level: 80,
    category: "Backend",
    image: true,
    icon: supabase,
  },
  {
    name: "Firebase",
    level: 85,
    category: "Backend",
    image: true,
    icon: firebase,
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
    icon: mongodb,
  },
   {
    name: "Postgresql",
    level: 80,
    category: "Database",
    image: true,
    icon: postgresql,
  },
  // { name: "GraphQL", level: 70, category: "Backend" },
  {
    name: "React Native",
    level: 80,
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
    level: 45,
    category: "DevOps",
    image: false,
    icon: "fa-brands fa-docker",
  },
  // { name: "AWS", level: 70, category: "DevOps" },
];
