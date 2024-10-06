import React, { useState } from "react";
import SidepanalStyle from "../styles/sidepanal.module.css";
import { Button, ListGroup, NavLink, Offcanvas } from "react-bootstrap";
import menuIconSvg from "../../../assets/menu.svg";

export default function Sidepanal() {
  const [showNavigationDrawer, setShowNavigationDrawer] = useState(false);

  function openOrCloseDropdown() {
    setShowNavigationDrawer(true);
  }

  function closeNavigationDrawer() {
    setShowNavigationDrawer(false);
  }

  function goToSection(path: string) {
    window.location.replace(`/#${path}`);
    closeNavigationDrawer();
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
        responsive="md"
        className={SidepanalStyle.background}
        show={showNavigationDrawer}
        onHide={closeNavigationDrawer}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={SidepanalStyle.body}>
          <ListGroup className={SidepanalStyle.list}>
            <ListGroup.Item onClick={() => goToSection("Landing_Page")}>
              Landing Page
            </ListGroup.Item>
            <ListGroup.Item onClick={() => goToSection("AboutUs")}>
              About Us
            </ListGroup.Item>
            <ListGroup.Item onClick={() => goToSection("offeringServices")}>
              Services
            </ListGroup.Item>
            <ListGroup.Item onClick={() => goToSection("deliveredProject")}>
              Projects
            </ListGroup.Item>
            {/* <ListGroup.Item onClick={() => goToSection("testimonials")}>
              Testimonials
            </ListGroup.Item> */}

            <ListGroup.Item
              onClick={() => goToSection("frequentlyAskedQuestion")}
            >
              FAQ
            </ListGroup.Item>

            <ListGroup.Item onClick={() => goToSection("footer")}>
              Information
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
