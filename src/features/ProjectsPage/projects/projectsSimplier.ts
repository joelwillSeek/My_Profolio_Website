export const category = {
  all: "All",
  mobile: "Mobile",
  crossPlatform: "Cross Platform",
  frontEnd: "Front End Web",
  backEnd: "Back End Server",
};

export const categoryAsArray = [
  category.all,
  category.mobile,
  category.crossPlatform,
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
  category: [category.mobile, category.crossPlatform, category.frontEnd, category.backEnd],
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

const remytelProject: descriptionType = {
  id: 6,
  title: "Remytel: Send Airtime & Packages",
  description:
    "Fast, secure online mobile top-up and package sending service. Remytel allows you to easily send airtime to mobile numbers and manage packages globally, keeping you connected with your loved ones.",
  image: "/images/projects/remytel.png",
  category: [category.mobile, category.crossPlatform, category.frontEnd, category.backEnd],
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
        "https://play.google.com/store/apps/details?id=com.playstream.remytel",
    },
    {
      icon: "fa-brands fa-apple",
      linkLabel: "App Store",
      uriLink:
        "https://apps.apple.com/ke/app/remytel-send-airtime-package/id6756207442",
    },
    {
      icon: "fa-solid fa-earth-americas",
      linkLabel: "Remytel Website",
      uriLink:
        "https://remytel.com/",
    },
    { icon: "fa-brands fa-github", linkLabel: "Github (Incoming Soon)", uriLink: "" },
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
    {
      linksAsIconOrImage: true,
      label: "NestJs",
      iconName: "/images/skills/nestjs.png",
    },
  ],
  image: "/images/projects/lekiray-1.png",
  title: "Lekiray: Full-Stack Ethiopian Real Estate Platform",
  description:
    "Developed Lekiray, a comprehensive real estate platform exclusively for the Ethiopian market. Features a seamless cross-platform mobile app built with Flutter and React Native, providing an intuitive Amharic interface. The robust backend infrastructure is powered by NestJS and Supabase, efficiently managing real-time property listings, secure user data, and authentication for high performance and scalability.",
  category: [category.mobile, category.crossPlatform, category.backEnd],
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

const habashApp: descriptionType = {
  id: 3,
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
  id: 4,
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

const projectsList = [honourProject, remytelProject, lekiaryProject, habashApp, myProfilePic];
export default projectsList;
