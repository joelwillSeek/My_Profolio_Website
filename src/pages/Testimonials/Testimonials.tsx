import React from "react";
import Profile from "./components/Profile";
import testimonials from "./styles/testimonials.module.css";

export default function Testimonials() {
  const profileDetails = [
    {
      name: "Coming Soon",
      workplace: "Coming Soon",
      comment: "Coming Soon",
      image: "#",
    },
    {
      name: "Coming Soon",
      workplace: "Coming Soon",
      comment: "Coming Soon",
      image: "#",
    },
    {
      name: "Coming Soon",
      workplace: "Coming Soon",
      comment: "Coming Soon",
      image: "#",
    },
    {
      name: "Coming Soon",
      workplace: "Coming Soon",
      comment: "Coming Soon",
      image: "#",
    },
    {
      name: "Coming Soon",
      workplace: "Coming Soon",
      comment: "Coming Soon",
      image: "#",
    },
  ];
  return (
    <>
      <div id="testimonials" className={testimonials.overAllContainer}>
        <h1 className={testimonials.heading}>
          Testimonials <div className={testimonials.hr}></div>
        </h1>
        <div className={testimonials.container}>
          {profileDetails.length <= 0 ? (
            <h1>Coming Soon</h1>
          ) : (
            profileDetails.map((profile, index) => (
              <Profile
                key={index}
                Name={profile.name}
                Workplace={profile.workplace}
                Comment={profile.comment}
                image={profile.image}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
