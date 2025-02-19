import React from "react";
import cardicon from "../styles/cardicon.module.css";

export default function CardiconList({
  imagePaths,
}: {
  imagePaths: Array<string>;
}) {
  return (
    <>
      <div className={cardicon.container}>
        {imagePaths.map((imagePath, index) => (
          <div key={index} className={cardicon.background}>
            <img className={cardicon.imgIcon} src={imagePath} />
          </div>
        ))}
      </div>
    </>
  );
}
