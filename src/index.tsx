import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./public/global.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMePage/AboutMe";
import OfferingServices from "./pages/OfferingServices/OfferingServices";

function Index() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <OfferingServices />
    </>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Index />
    </StrictMode>
  );
} else {
  const ErrorElement = document.createElement("h1");
  ErrorElement.textContent = "No Root Tag";
  document.body.appendChild(ErrorElement);
}
