import React from "react";
import informationStyle from "./styles/information.module.css";

export default function Information() {
  return (
    <>
      <div id="footer" className={informationStyle.footer}>
        <div id="container" className={informationStyle.container}>
          <ul className={informationStyle.list}>
            <li>
              <h1>Resources Used:</h1>
            </li>
            <li>
              <a href="https://icons8.com/">Icons8</a>
            </li>
            <li>
              <a href="https://www.pexels.com/">Pexels</a>
            </li>
            <li>
              <a href="https://react-bootstrap.netlify.app/">Bootstrap</a>
            </li>
          </ul>
        </div>
        <div id="copyright" className={informationStyle.copyright}>
          <p>Copyright &copy; Eyoel Seleshi</p>
        </div>
      </div>
    </>
  );
}
