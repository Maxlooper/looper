import React from "react";
import { FcLinux } from "react-icons/fc";
import { useState } from "react";
import "./nav.css";
import Services from "../services/Services";
// import {Link} from 'react-router-dom'

function Nav() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <nav>
      <div className={fix ? "navbar fixed" : "navbar"}>
        <div className="nav__container">
          <ul className="nav__links">
            <li className="nav__link1">
              <a>
                <FcLinux />
              </a>
            </li>
            <li className="nav__link2">
              <a href="#contact"> Contact </a>
            </li>
            <li className="nav__link3">
              <a href="skills"> Skills </a>
            </li>
            <li className="nav__link4">
              <a href="services">Services </a>
            </li>
            <li className="nav__link5">
              <a href="/"> Home </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
