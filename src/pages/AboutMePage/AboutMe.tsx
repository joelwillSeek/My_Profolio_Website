import React from "react";
import ContainerStyles from "./styles/container.module.css";

export default function AboutMe() {
  return (
    <>
      <div className={ContainerStyles.container}>
        <h1 className={ContainerStyles.about}>
          About Me <div className={"hr"}></div>
        </h1>
        <h1
          className={`${ContainerStyles.header} ${ContainerStyles.leftMargin}`}
        >
          Hi There I'M Eyoel
        </h1>
        <p className={`${ContainerStyles.leftMargin}`}>
          I have been coding since i was 13.
          <br /> I love to create app, games and websites. Going thorough the
          process of learning to code is so satisfying and Fulfilling
        </p>
        <div id="contact info" className={ContainerStyles.contactInfo}>
          <h1
            className={`${ContainerStyles.headerContactInfo} ${ContainerStyles.leftMargin}`}
          >
            Contact Info
          </h1>

          <ul>
            <li>
              <span className={ContainerStyles.contact}>Telegram: </span>
              https://t.me/Eyoelsel <p className="Warning">Recommended</p>
            </li>
            <li>
              <span className={ContainerStyles.contact}>Email (1): </span>
              joelthousend@gmail.com
            </li>
            <li>
              <span className={ContainerStyles.contact}>Email (2): </span>
              eyoelseleshizeyohannes@gmail.com
            </li>
            <li>
              <span className={ContainerStyles.contact}>Phone Number: </span>
              251944032128
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
