import React from "react";
import deliveredProjectCss from "./styles/deliveredproject.module.css";
import demoImage1 from "../../assets/DeliveredProject/ApsireMe/1.jpg";
import demoImage2 from "../../assets/DeliveredProject/ApsireMe/2.jpg";
import demoImage3 from "../../assets/DeliveredProject/ApsireMe/3.jpg";
import demoImage4 from "../../assets/DeliveredProject/ApsireMe/4.jpg";
import DeliveredCards from "./components/DeliveredCards";
import githubImage from "../../assets/Icons/icons8-github.svg";
import downloadImage from "../../assets/Icons/icons8-download-50.png";

export default function DeliveredProject() {
  const deliverdProjects = [
    {
      Name: "AspireMe",
      description:
        "A full app about flashcard based on a document structure, focusing on android but can be built for any platform",
      demoImages: [demoImage1, demoImage2, demoImage3, demoImage4],
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
    },
  ];

  return (
    <>
      <div className={deliveredProjectCss.container} id="deliveredProject">
        <h1 className={deliveredProjectCss.heading}>
          Delivered Projects<div className={deliveredProjectCss.hr}></div>{" "}
          <p style={{ fontWeight: "lighter", fontSize: "small", color: "red" }}>
            Hover Over Them For More Details
          </p>
        </h1>
        {/* <h2>Some of my most successful projects</h2> */}

        <div className={deliveredProjectCss.projectLists}>
          {deliverdProjects.map((project, index) => {
            const listOfImage = project.demoImages;

            return (
              <DeliveredCards
                listOfImages={listOfImage}
                name={project.Name}
                description={project.description}
                index={index}
                key={index}
                downloadLinks={project.downloadLinks}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
