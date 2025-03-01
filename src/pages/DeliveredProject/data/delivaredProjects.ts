import demoImage1 from "../../../assets/DeliveredProject/ApsireMe/1.jpg";
import demoImage2 from "../../../assets/DeliveredProject/ApsireMe/2.jpg";
import demoImage3 from "../../../assets/DeliveredProject/ApsireMe/3.jpg";
import demoImage4 from "../../../assets/DeliveredProject/ApsireMe/4.jpg";
import flutterImage from "../../../assets/Offering Services/icons8-flutter.svg";
import githubImage from "../../../assets/Icons/icons8-github.svg";
import downloadImage from "../../../assets/Icons/icons8-download-50.png";
import localLibraryImage from "../../../assets/DeliveredProject/LocalLibrary/1.png";
import honourImage1 from "../../../assets/HonorImage/honour 1.jpg";
import honourImage2 from "../../../assets/HonorImage/honour 2.jpg";
import honourImage3 from "../../../assets/HonorImage/honour 3.jpg";
import honourImage4 from "../../../assets/HonorImage/honour 4.jpg";

type dataForProject = {
  Name: string;
  description: string;
  demoImages: Array<string>;
  madeFromImage: Array<{ name: string; link: string }>;
  downloadLinks: Array<{
    name: string;
    link: string;
    icon: string;
  }>;
};

let aspireMe = (): dataForProject => {
  return {
    Name: "AspireMe",
    description:
      "A full app about flashcard based on a document structure, focusing on android but can be built for any platform",
    demoImages: [demoImage1, demoImage2, demoImage3, demoImage4],
    madeFromImage: [{ name: "Flutter", link: flutterImage }],
    downloadLinks: [
      {
        name: "Download",
        link: "https://github.com/joelwillSeek/aspireme_flutter/releases/download/android/app-arm64-v8a-release.apk",
        icon: downloadImage,
      },

      {
        name: "GitHub Link",
        link: "https://github.com/joelwillSeek/aspireme_flutter",
        icon: githubImage,
      },
    ],
  };
};

let localLibrary = (): dataForProject => {
  return {
    Name: "Local Library",
    description: "A full stack web stack based on MERN stack.",
    demoImages: [localLibraryImage],
    madeFromImage: [{ name: "Flutter", link: flutterImage }],
    downloadLinks: [
      {
        name: "Coming Soon",
        link: "#",
        icon: downloadImage,
      },
      {
        name: "Github Link",
        link: "https://github.com/joelwillSeek/Express_Library_JS_Odin",
        icon: githubImage,
      },
    ],
  };
};

let honour_project = (): dataForProject => {
  return {
    Name: "Honour",
    description:
      "An app about keeping track of people and there relationships to you",
    demoImages: [honourImage1, honourImage2, honourImage3, honourImage4],
    madeFromImage: [{ name: "Flutter", link: flutterImage }],
    downloadLinks: [
      {
        name: "Coming Soon",
        link: "#",
        icon: downloadImage,
      },
      {
        name: "Github Link",
        link: "https://github.com/joelwillSeek/honour_flutter",
        icon: githubImage,
      },
    ],
  };
};

export default [aspireMe(), localLibrary(), honour_project()];
