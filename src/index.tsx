import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./public/global.css";
import HomePage from "./pages/HomePage/HomePage";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  const ErrorElement = document.createElement("h1");
  ErrorElement.textContent = "No Root Tag";
  document.body.appendChild(ErrorElement);
}
