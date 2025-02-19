import React, { useRef, useState } from "react";
import Sidepanal from "./components/Sidepanal";
import navStyle from "./styles/nav.module.css";

export default function TopNavigationBar() {
  const navRef = useRef<HTMLDivElement>(null);

  const pageScrollProgressRef = useRef<HTMLDivElement>(null);

  const rootElement = document.getElementById("root");

  const [isBackgroundAnimationFinished, setBackgroundAnimationFinished] =
    useState(false);

  window.addEventListener(
    "scroll",
    whenScrolling(
      rootElement,
      navRef,
      pageScrollProgressRef,
      isBackgroundAnimationFinished,
      setBackgroundAnimationFinished
    )
  );

  return (
    <nav className={navStyle.navigation} ref={navRef}>
      <div className={navStyle.mainNav}>
        <div
          className={`${navStyle.logoBackground} ${navStyle.bebas_neue_regular}`}
        >
          <h1>Eyoel</h1>
        </div>
        <Sidepanal />
      </div>

      <div ref={pageScrollProgressRef} className={navStyle.pageProgress}></div>
    </nav>
  );
}
function whenScrolling(
  rootElement: HTMLElement | null,
  navRef: React.RefObject<HTMLDivElement>,
  pageScrollProgressRef: React.RefObject<HTMLDivElement>,
  isBackgroundAnimationFinished: boolean,
  setBackgroundAnimationFinished: React.Dispatch<React.SetStateAction<boolean>>
): (this: Window, ev: Event) => any {
  return (event) => {
    if (rootElement == null || navRef.current == null) return;
    if (isBackgroundAnimationFinished) return;
    const scrollVal =
      window.scrollY ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    const height = document.body.offsetHeight - window.innerHeight;

    const getScrollProgress = Math.round((100 * scrollVal) / height).toString();

    if (pageScrollProgressRef.current != null)
      pageScrollProgressRef.current.style.width = `${getScrollProgress}%`;

    if (scrollVal > 10) {
      navRef.current!.style.backgroundColor = "#000";
      navRef.current.addEventListener("transitionend", () => {
        setBackgroundAnimationFinished(true);
      });
    } else {
      navRef.current!.style.backgroundColor = "transparent";
    }

    setBackgroundAnimationFinished(false);
  };
}
