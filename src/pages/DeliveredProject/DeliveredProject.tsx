import React from "react";
import deliveredProjectCss from "./styles/deliveredproject.module.css";

import DeliveredCards from "./components/DeliveredCards";

import deliveredProjectsData from "./data/delivaredProjects";

export default function DeliveredProject() {
  

  return (
    <>
      <div className={deliveredProjectCss.container} id="deliveredProject">
        <h1 className={deliveredProjectCss.heading}>
          Delivered Projects<div className={deliveredProjectCss.hr}></div>{" "}
          {/* <p style={{ fontWeight: "lighter", fontSize: "small", color: "red" }}>
            Hover Over Them For More Details
          </p> */}
        </h1>
        {/* <h2>Some of my most successful projects</h2> */}

        <div className={deliveredProjectCss.projectLists}>
          {deliveredProjectsData.map((project, index) => {
            const listOfImage = project.demoImages;

            return (
              <DeliveredCards
                listOfImages={listOfImage}
                name={project.Name}
                description={project.description}
                index={index}
                madeByImages={project.madeFromImage}
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
