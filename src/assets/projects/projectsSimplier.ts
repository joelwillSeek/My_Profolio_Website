import honourImage from "./honour/images/1.png";
import lekirayImage from "./lekiray/images/1.png";
import nestjs from "../nestjs.png";
import nestjsAndLeikary from "../nestjsNandLikeray.png";

export const category = {
  all: "All",
  mobile: "Mobile",
  crossPlatform: "Cross Platform",
  design: "Design",
  frontEnd: "Front End Web",
  backEnd: "Back End Server",
};

export const categoryAsArray = [
  category.all,
  category.mobile,
  category.crossPlatform,
  category.design,
  category.frontEnd,
  category.backEnd,
];

export type descriptionType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: {
    label: string;
    iconName: string;
    linksAsIconOrImage: boolean;
  }[];
  links: { icon: string; linkLabel: string; uriLink: string }[];
};

const honourProject: descriptionType = {
  id: 1,
  title: "Honour Relationships: Build Memorable And Honorable Relationships",
  description:
    "Manage your network like never before. Honour Relationships, a Flutter app, employs graph data structures to visually organize your connections. Get smart reminders for every interaction and effectively re-engage with past relationships on the Recycling Page. Build, maintain, and truly honour your relationships.",
  image: honourImage,
  category: category.crossPlatform,
  technologies: [
    {
      linksAsIconOrImage: false,
      label: "Supabase",
      iconName: "fa-solid fa-database",
    },
    {
      linksAsIconOrImage: false,
      label: "Flutter",
      iconName: "fa-brands fa-flutter",
    },
  ],
  links: [
    {
      icon: "fa-brands fa-google-play",
      linkLabel: "Google Playstore",
      uriLink:
        "https://play.google.com/store/apps/details?id=com.joelthousend.honour.honour&pcampaignid=web_share",
    },
    { icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "" },
  ],
};

const lekiaryProject: descriptionType = {
  id: 2,
  technologies: [
    {
      linksAsIconOrImage: false,
      label: "React Native",
      iconName: "fa-brands fa-react",
    },
    {
      linksAsIconOrImage: false,
      label: "Flutter",
      iconName: "fa-brands fa-flutter",
    },
  ],
  image: lekirayImage,
  title:
    "Lekiray: Ethiopian Real Estate Mobile Application (Flutter & Supabase)",
  description:
    "Developed Lekiray, a dedicated mobile application for showcasing real estate properties exclusively for the Ethiopian market. Built with Flutter for a seamless, cross-platform user experience, the app features an intuitive interface entirely in Amharic. Supabase provides a robust and secure backend, managing real-time property listings, user data, and authentication. This project demonstrates expertise in delivering localized, high-performance mobile solutions for specific market needs.",
  category: category.crossPlatform,
  links: [
    {
      icon: "fa-brands fa-google-play",
      uriLink:
        "https://play.google.com/store/apps/details?id=com.met.Lekiray_react_native&pcampaignid=web_share",
      linkLabel: "Google Playstore",
    },
    { icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "" },
  ],
};


const backendLekiaryProject: descriptionType = {
  id: 3,
  technologies: [
    {
      linksAsIconOrImage: true,
      label: "NestJs",
      iconName: nestjs,
    },
  ],

  image: nestjsAndLeikary,
  category: category.backEnd,
  title: "Lekiary: Robust NestJS Backend Development",
  description:
    "This project focuses on building the backend infrastructure for the Lekiary application, utilizing the powerful and efficient NestJS framework. The backend will seamlessly support the existing front-end, ensuring a high-performance, scalable, and secure application.",
  links: [{ icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "" }],
};

export default [honourProject, lekiaryProject, backendLekiaryProject];
