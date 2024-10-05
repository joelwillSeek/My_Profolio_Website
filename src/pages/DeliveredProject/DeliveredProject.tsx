import React from "react";
import deliveredProjectCss from "./styles/deliveredproject.module.css";
import demoImage1 from "../../assets/DeliveredProject/ApsireMe/1.jpg";
import demoImage2 from "../../assets/DeliveredProject/ApsireMe/2.jpg";
import demoImage3 from "../../assets/DeliveredProject/ApsireMe/3.jpg";
import demoImage4 from "../../assets/DeliveredProject/ApsireMe/4.jpg";

export default function DeliveredProject() {
  const deliverdProjects = [
    {
      Name: "AspireMe",
      description:
        "A full app about flashcard based on a document structure, focusing on android but can be built for any platform",
      demoImages: [demoImage1, demoImage2, demoImage3, demoImage4],
    },
  ];

  return (
    <>
      <div className={deliveredProjectCss.container} id="deliveredProject">
        <h1 className={deliveredProjectCss.heading}>
          Delivered Projects<div className={deliveredProjectCss.hr}></div>{" "}
        </h1>
        {/* <h2>Some of my most successful projects</h2> */}

        {deliverdProjects.map((project, index) => {
          const listOfImage = project.demoImages[0];

          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${listOfImage})` }}
              className={deliveredProjectCss.projectDiv}
            >
              <div id="showOnHover">
                <div className={deliveredProjectCss.info}>
                  <h6>{project.Name}</h6>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
