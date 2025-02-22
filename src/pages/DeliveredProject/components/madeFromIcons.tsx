import React from "react";
import cardIcon from "../styles/cardicon.module.css";

export default function MadeFromIcons({
  imagePaths,

}: {
  imagePaths: Array<{
    name:string;
    link:string;
  }>;

}) {
  return (
    <>
      <div className={cardIcon.container}>
        {imagePaths.map((imagePath, index) => (
          <div key={index} >
            <img className={`${cardIcon.imgIcon} ${cardIcon.background}`} src={imagePath.link} />
            <p>{imagePath.name}</p>
          </div>
        ))}

        
      </div>
    </>
  );
}
