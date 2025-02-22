import demoImage1 from "../../../assets/DeliveredProject/ApsireMe/1.jpg";
import demoImage2 from "../../../assets/DeliveredProject/ApsireMe/2.jpg";
import demoImage3 from "../../../assets/DeliveredProject/ApsireMe/3.jpg";
import demoImage4 from "../../../assets/DeliveredProject/ApsireMe/4.jpg";
import flutterImage from "../../../assets/Offering Services/icons8-flutter.svg";
import githubImage from "../../../assets/Icons/icons8-github.svg";
import downloadImage from "../../../assets/Icons/icons8-download-50.png";



let aspireMe= ()=>{
    return {
        Name: "AspireMe",
        description:
          "A full app about flashcard based on a document structure, focusing on android but can be built for any platform",
        demoImages: [demoImage1, demoImage2, demoImage3, demoImage4],
        madeFromImage:[{name:"Flutter" ,link:flutterImage}],
        downloadLinks: [
          {
            name: "Download",
            link: "https://github.com/joelwillSeek/aspireme_flutter/releases/download/android/app-arm64-v8a-release.apk",
            icon: downloadImage,
          },
          
          {
            name: "gitHubLink",
            link: "https://github.com/joelwillSeek/aspireme_flutter",
            icon: githubImage,
          },
        ],
      };
}


// let Calcula=()=>{
//     return 
//     {
//         Name:"Calcula",
//         de
//     }
//     ;
// }


export default  [
    aspireMe(),
   ];
 