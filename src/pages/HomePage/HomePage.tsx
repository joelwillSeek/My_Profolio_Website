import React, { useRef, useState } from "react";
import navStyle from "./styles/nav.module.css";
import backgroundImage from "../../assets/bg.jpg";
import landingpageStyle from "./styles/landingpage.module.css";
import Sidepanal from "./components/Sidepanal";
import { Button } from "react-bootstrap";
import logoImage from "../../assets/logo/logo.png";
import BounceLoading from "react-spinners/BounceLoader";
import CodingLikeText from "./components/CodingLikeText";

export default function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const pageScrollProgressRef = useRef<HTMLDivElement>(null);

  const rootElement = document.getElementById("root");
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", () => {
    setLoading(() => false);
  });

  window.addEventListener("scroll", (event) => {
    if (rootElement == null || navRef.current == null) return;
    const scrollVal =
      window.screenY ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    const height = document.body.offsetHeight - window.innerHeight;

    const getScrollProgress = Math.round((100 * scrollVal) / height).toString();

    if (pageScrollProgressRef.current != null)
      pageScrollProgressRef.current.style.width = `${getScrollProgress}%`;

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

  return (
    <>
      {loading ? loadingComponent() : null}

      <nav className={navStyle.navigation} ref={navRef}>
        <div className={navStyle.mainNav}>
          <h1 className={navStyle.logoBackground}>
            <img className={navStyle.logoImage} src={logoImage} alt="logo" />
          </h1>
          <Sidepanal />
        </div>

        <div
          ref={pageScrollProgressRef}
          className={navStyle.pageProgress}
        ></div>
      </nav>

      <div
        id="Landing_Page"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 50, 0.8)), url(${backgroundImage})`,
        }}
        className={`${landingpageStyle.landingPage}`}
      >
        <h1
          style={{ color: "#fff", fontWeight: "bold" }}
          className={landingpageStyle.heading}
        >
          I Love To <CodingLikeText delay={200} />
        </h1>
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
