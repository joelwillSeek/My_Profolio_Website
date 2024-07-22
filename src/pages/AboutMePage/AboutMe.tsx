import React from "react";
import ContainerStyles from "./styles/container.module.css";

export default function AboutMe() {
  return (
    <>
      <div className={ContainerStyles.container}>
        <h1
          className={`${ContainerStyles.header} ${ContainerStyles.leftMargin}`}
        >
          Hi There I'M Eyoel
        </h1>
        <p className={ContainerStyles.leftMargin}>
          I have been coding since i was 13.
          <br /> I love to create app, games and websites. Going thorough the
          process of learning to code is so satisfying and Fulfilling
        </p>
        <div id="contact info" className={ContainerStyles.contactInfo}>
          <h1 className={ContainerStyles.headerContactInfo}>Contact Info</h1>
          <ul>
            <li>Email (1): joelthousend@gmail.com</li>
            <li>Email (2): eyoelseleshizeyohannes@gmail.com</li>
            <li>Phone Number: 251944032128</li>
          </ul>
        </div>
      </div>
    </>
  );
}
