import React, { useState } from "react";
import SidepanalStyle from "../styles/sidepanal.module.css";
import { Button, Offcanvas } from "react-bootstrap";
import menuIconSvg from "../../../assets/menu.svg";

export default function Sidepanal() {
  const [showNavigationDrawer, setShowNavigationDrawer] = useState(false);

  function openOrCloseDropdown() {
    setShowNavigationDrawer(true);
  }

  function closeNavigationDrawer() {
    setShowNavigationDrawer(false);
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={openOrCloseDropdown}
        className={SidepanalStyle.menuButton}
      >
        <img
          src={`${menuIconSvg}`}
          alt=""
          className={SidepanalStyle.menuIcon}
        />
      </Button>

      <Offcanvas
        responsive="lg"
        className={SidepanalStyle.background}
        show={showNavigationDrawer}
        onHide={closeNavigationDrawer}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
