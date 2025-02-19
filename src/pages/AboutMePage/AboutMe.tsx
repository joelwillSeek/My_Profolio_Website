import React from "react";
import ContainerStyles from "./styles/container.module.css";
import myFacePhoto from "../../assets/my_face.jpg";

export default function AboutMe() {
  return (
    <>
      <h1 className={ContainerStyles.about}>
        About Me <div className={ContainerStyles.hr}></div>
      </h1>

      <div className={ContainerStyles.container} id="AboutUs">
        <img
          src={myFacePhoto}
          style={{ borderRadius: "50%" }}
          className={ContainerStyles.myFace}
          alt="Aren't I Handsome"
        />
        {rightSide()}
      </div>
    </>
  );
}

function rightSide() {
  return (
    <>
      <div className={ContainerStyles.col}>
        <h1
          className={`${ContainerStyles.header} ${ContainerStyles.leftMargin}`}
        >
          Hi There I'M Eyoel
        </h1>
        <p>
          I have been coding since i was 13. I love to create app, games and
          websites. Going thorough the process of learning to code is so
          satisfying and Fulfilling
        </p>
        <p>
          <strong>Date Of Birth:</strong> june 20 2001
        </p>
        <p>
          <strong>Address:</strong> Yeka, Addis Ababa, Ethiopia
        </p>

        <p>
          <strong>Zip Code:</strong> 1165
        </p>

        <p>
          <strong>Phone Number: </strong>
          <span>+251944032128</span>
        </p>
        <div id="contactInfo" className={ContainerStyles.contactInfo}>
          <h1
            className={`${ContainerStyles.headerContactInfo} ${ContainerStyles.leftMargin}`}
          >
            Contact Info
          </h1>

          <ul>
            <li>
              <span>Telegram: </span>
              <span className="Warning">(Recommended)</span>
              <a
                href=" https://t.me/Eyoelsel"
                className={ContainerStyles.contact}
              >
                Click Here
              </a>
            </li>

            <li>
              <span>Github: </span>
              <a href="https://github.com/" className={ContainerStyles.contact}>
                Click Here
              </a>
            </li>
            <li>
              <span>Email: </span>
              <span className={ContainerStyles.contact}>
                joelthousend@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
