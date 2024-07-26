import React, { useRef, useState } from "react";
import navStyle from "./styles/nav.module.css";
import backgroundImage from "../../assets/bg.jpg";
import newBackgroundImage from "../../assets/logo/logoBg.png";
import landingpageStyle from "./styles/landingpage.module.css";
import Sidepanal from "./components/Sidepanal";
import { Button } from "react-bootstrap";
import logoImage from "../../assets/logo/logo.png";
import BounceLoading from "react-spinners/BounceLoader";

export default function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const rootElement = document.getElementById("root");
  const [loading, setLoading] = useState(true);

  window.addEventListener("scroll", (event) => {
    if (rootElement == null || navRef.current == null) return;
    const scrollVal =
      window.scrollY ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    if (scrollVal > 10) {
      navRef.current!.style.backgroundColor = "var(--dark-blue-color)";
    } else {
      navRef.current!.style.backgroundColor = "transparent";
    }
  });

  function loadingComponent() {
    return (
      <div className={landingpageStyle.loading}>
        <BounceLoading
          color={"#ff9900"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        ></BounceLoading>
      </div>
    );
  }

  window.addEventListener("load", () => setLoading((value) => false));

  return (
    <>
      {loading ? loadingComponent() : null}

      <nav className={navStyle.navigation} ref={navRef}>
        <h1 className={navStyle.logoBackground}>
          <img className={navStyle.logoImage} src={logoImage} alt="logo" />
        </h1>
        <Sidepanal />
      </nav>

      <div
        id="Landing_Page"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${newBackgroundImage})`,
        }}
        className={`${landingpageStyle.landingPage}`}
      >
        <h1 style={{ color: "#fff", fontWeight: "bold" }}>I Love To Code</h1>
        <ul className={landingpageStyle.landingList}>
          <li>
            <Button
              className={landingpageStyle.seeMore}
              href="/#offeringServices"
            >
              Service Offered
            </Button>
          </li>
          <li>
            <Button className={landingpageStyle.contactMe} href="/#contactInfo">
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
