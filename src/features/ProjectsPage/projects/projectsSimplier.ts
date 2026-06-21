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
  category: string[];
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
  image: "/images/projects/honour-1.png",
  category: [category.mobile, category.crossPlatform],
  technologies: [
    {
      linksAsIconOrImage: true,
      label: "NestJS",
      iconName: "/images/skills/nestjs.png",
    },
    {
      linksAsIconOrImage: true,
      label: "PostgreSQL",
      iconName: "/images/skills/postgresql.png",
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
    {
      icon: "fa-solid fa-earth-americas",
      linkLabel: "Honor Website",
      uriLink:
        "https://honourhq.honourrelationships.com/",
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
  image: "/images/projects/lekiray-1.png",
  title: "Lekiray: Ethiopian Real Estate Mobile Application (Flutter & Supabase)",
  description:
    "Developed Lekiray, a dedicated mobile application for showcasing real estate properties exclusively for the Ethiopian market. Built with Flutter for a seamless, cross-platform user experience, the app features an intuitive interface entirely in Amharic. Supabase provides a robust and secure backend, managing real-time property listings, user data, and authentication.",
  category: [category.mobile, category.crossPlatform],
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
      iconName: "/images/skills/nestjs.png",
    },
  ],
  image: "/images/projects/nestjsNandLikeray.png",
  category: [category.backEnd],
  title: "Lekiary: Robust NestJS Backend Development",
  description:
    "This project focuses on building the backend infrastructure for the Lekiary application, utilizing the powerful and efficient NestJS framework. The backend will seamlessly support the existing front-end, ensuring a high-performance, scalable, and secure application.",
  links: [{ icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "" }],
};

const habashApp: descriptionType = {
  id: 4,
  technologies: [
    {
      linksAsIconOrImage: false,
      label: "Flutter",
      iconName: "fa-brands fa-flutter",
    },
    {
      linksAsIconOrImage: true,
      label: "Firebase",
      iconName: "/images/skills/firebase.png",
    },
  ],
  image: "/images/projects/habeshaly-5.jpg",
  category: [category.mobile, category.crossPlatform],
  title: "Habashaly: a dating app for people in addis ababa, ethiopia",
  description:
    "Habesahly is your essential companion for navigating and enriching life in Addis Ababa! Designed specifically for the vibrant Ethiopian community, Habesahly connects you to everything that matters. From discovering the best local restaurants and hidden gems, to finding reliable services and staying informed on city events, Habesahly brings the pulse of Addis right to your fingertips.",
  links: [{ icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "https://github.com/joelwillSeek/Flutter_MatchMaking_app" }],
};

const myProfilePic: descriptionType = {
  id: 5,
  technologies: [
    {
      linksAsIconOrImage: true,
      label: "NextJs",
      iconName: "/images/skills/nextjs.svg",
    },

  ],
  image: "/vite.png",
  category: [category.frontEnd],
  title: "My Own profile front end website",
  description:
    "Welcome to my digital space! This website is a living example of my capabilities. Every element, from the interactive design to the responsive layout, showcases my expertise in front-end development and UI/UX design.",
  links: [{ icon: "fa-brands fa-github", linkLabel: "Github", uriLink: "https://github.com/joelwillSeek/Flutter_MatchMaking_app" }],
};

const projectsList = [honourProject, lekiaryProject, backendLekiaryProject, habashApp, myProfilePic];
export default projectsList;
