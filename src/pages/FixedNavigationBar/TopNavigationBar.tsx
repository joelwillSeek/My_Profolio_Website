import React, { useRef } from "react";
import Sidepanal from "./components/Sidepanal";
import logoImage from "../../assets/logo/logo.png";
import navStyle from "./styles/nav.module.css";

export default function TopNavigationBar(){

    const navRef = useRef<HTMLDivElement>(null);

    const pageScrollProgressRef = useRef<HTMLDivElement>(null);

    const rootElement = document.getElementById("root");


    window.addEventListener("scroll", (event) => {
        if (rootElement == null || navRef.current == null) return;
        const scrollVal =
          window.scrollY ||
          (document.documentElement || document.body.parentNode || document.body)
            .scrollTop;
    
        const height = document.body.offsetHeight - window.innerHeight;
    
        console.log(scrollVal);
    
        const getScrollProgress = Math.round((100 * scrollVal) / height).toString();
    
        if (pageScrollProgressRef.current != null)
          pageScrollProgressRef.current.style.width = `${getScrollProgress}%`;
    
        if (scrollVal > 10) {
          navRef.current!.style.backgroundColor = "var(--dark-blue-color)";
        } else {
          navRef.current!.style.backgroundColor = "transparent";
        }
      });

    return (   <nav className={navStyle.navigation} ref={navRef}>
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
);
}