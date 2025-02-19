import React from "react";
import unknownProfile from "../../../assets/unknowProfile.png";
import profileStyle from "../styles/profile.module.css";

export default function Profile({
  Name,
  Comment,
  Workplace,
  image,
}: {
  Name: string;
  Comment: string;
  Workplace: string;
  image: any;
}) {
  return (
    <>
      <div id="profile" className={profileStyle.profileContainer}>
        <p id="comment" className={profileStyle.comment}>
          {Comment}
        </p>
        <img
          src={image == "#" ? unknownProfile : image}
          className={profileStyle.profilePic}
        />
        <h3>{Name}</h3>
        <p id="workplace" className={profileStyle.workplace}>
          {Workplace}
        </p>
      </div>
    </>
  );
}
