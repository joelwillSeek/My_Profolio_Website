import React from "react";
import informationStyle from "./styles/information.module.css";

export default function Information() {
  return (
    <>
      <footer id="footer" className={informationStyle.footer}>
        <div id="container" className={informationStyle.container}>
          <ul className={informationStyle.list}>
            <li>
              <h1>Links</h1>
            </li>
            <li>
              <a href="/#Landing_Page">Landing Page</a>
            </li>
            <li>
              <a href="/#AboutUs">About Us</a>
            </li>
            <li>
              <a href="/#offeringServices">Services</a>
            </li>

            <li>
              <a href="/#deliveredProject">Projects</a>
            </li>

            <li>
              <a href="/#frequentlyAskedQuestion">FAQ</a>
            </li>

            <li>
              <a href="/#footer">Information</a>
            </li>
          </ul>

          <ul className={informationStyle.list}>
            <li>
              <h1>Have A Question?</h1>
            </li>
            <li>
              <a href="#">joelthousend@gmail.com</a>
            </li>
            <li>
              <a href="#">Phone: +251944032128</a>
            </li>
            <li>
              <a href="#">Location: Yeka, Addis Ababa, Ethiopia </a>
            </li>
          </ul>
        </div>
        <div id="copyright" className={informationStyle.copyright}>
          <p>Copyright &copy; Eyoel Seleshi</p>
        </div>
      </footer>
    </>
  );
}
