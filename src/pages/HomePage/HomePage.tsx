import React from "react";
import navStyle from "./styles/nav.module.css";
import backgroundImage from "../../assets/bg.jpg";
import landingpageStyle from "./styles/landingpage.module.css";
import Sidepanal from "./components/Sidepanal";
import { Button } from "react-bootstrap";

export default function HomePage() {
  function openOrCloseDropdown() {}

  return (
    <>
      <nav className={`${navStyle.navigation}`}>
        <h1>Eyoel</h1>
        <Sidepanal />
      </nav>

      <div
        id="Landing Page"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        }}
        className={`${landingpageStyle.landingPage}`}
      >
        <h1>I Love To Code</h1>
        <ul className={landingpageStyle.landingList}>
          <li>
            <Button className={landingpageStyle.seeMore}>See More</Button>
          </li>
          <li>
            <Button className={landingpageStyle.contactMe}>Contact Me</Button>
          </li>
        </ul>
      </div>
    </>
  );
}
