import React, { useState } from "react";

import homepage from "./styles/homepage.module.css";
import navStyle from "./styles/nav.module.css";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import backgroundImage from "../../assets/bg.jpg";
import landingpageStyle from "./styles/landingpage.module.css";

export default function HomePage() {
  const [mobileIsDropdownOpen, setMobileIsDropdownOpen] = useState(false);
  function openOrCloseDropdown() {
    setMobileIsDropdownOpen((value) => !value);
  }

  return (
    <>
      <nav className={`${navStyle.navigation}`}>
        <h1>Eyoel</h1>

        <Dropdown open={mobileIsDropdownOpen}>
          <MenuButton className={navStyle.dropDownButton}>
            <svg
              onClick={openOrCloseDropdown}
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${navStyle.svgMenu}`}
            >
              <path
                d="M4 12H20M4 8H20M4 16H12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </MenuButton>
          <Menu slots={{ listbox: "ol" }} className={navStyle.dropDown}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Language settings</MenuItem>
            <MenuItem>Log out</MenuItem>
          </Menu>
        </Dropdown>
      </nav>

      <div
        id="Landing Page"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        }}
        className={`${landingpageStyle.landingPage}`}
      >
        <h1>Computer Scientist</h1>
        <ul className={landingpageStyle.landingList}>
          <li>joelthousend@gmail.com</li>
          <li>eyoelseleshizeyohannes@gmail.com</li>
          <li>251944032128</li>
        </ul>
      </div>
    </>
  );
}
