import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./global/global.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMePage/AboutMe";
import OfferingServices from "./pages/OfferingServices/OfferingServices";
import DeliveredProject from "./pages/DeliveredProject/DeliveredProject";
import FrequentlyAskedQuestion from "./pages/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Information from "./pages/Information/Information";
import { BounceLoader } from "react-spinners";
import TopNavigationBar from "./pages/FixedNavigationBar/TopNavigationBar";

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let handleLoad = () => {
      console.log("picker");
      setLoading(() => false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && (
        <div className={"loading"}>
          <BounceLoader
            color={"#ff9900"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          ></BounceLoader>
        </div>
      )}

      <TopNavigationBar />
      <HomePage />
      <AboutMe />
      <OfferingServices />
      <DeliveredProject />
      {/* <Testimonials /> */}
      <FrequentlyAskedQuestion />
      <Information />
    </>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    //<StrictMode>
    <Index />
    // </StrictMode>
  );
} else {
  const ErrorElement = document.createElement("h1");
  ErrorElement.textContent = "No Root Tag";
  document.body.appendChild(ErrorElement);
}
