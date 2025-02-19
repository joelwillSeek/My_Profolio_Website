import React, { useRef, useState } from "react";
import backgroundImage from "../../assets/bg.jpg";
import landingpageStyle from "./styles/landingpage.module.css";
import CodingLikeText from "./components/CodingLikeText";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <>
      <div
        id="Landing_Page"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 50, 0.5)), url(${backgroundImage})`,
        }}
        className={`${landingpageStyle.landingPage}`}
      >
        <div className={landingpageStyle.contentText}>
          <h1>I Love &nbsp;</h1>
          <span className={landingpageStyle.loveList}>
            <CodingLikeText delay={200} />
          </span>

          {buttonsToPages()}
        </div>
      </div>
    </>
  );
}
function buttonsToPages() {
  return (
    <ul className={landingpageStyle.landingList}>
      <li>
        <Button
          variant="outlined"
          className={landingpageStyle.seeMore}
          href="/#offeringServices"
        >
          Service Offered
        </Button>
      </li>
      <li>
        <Button
          variant="outlined"
          className={landingpageStyle.contactMe}
          href="/#contactInfo"
        >
          {" "}
          Contact Me
        </Button>
      </li>
      <li>
        <Button variant="outlined" className={landingpageStyle.contactMe}>
          {" "}
          {/*href="/#contactInfo">*/} Products
        </Button>
      </li>
    </ul>
  );
}
