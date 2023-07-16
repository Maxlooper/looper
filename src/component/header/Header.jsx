import React, { useState } from "react";
import "./header.css";
import { GrLinkedinOption } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import Typewriter from "typewriter-effect";

function Header() {
  // const [state] = useState({
  //   tite: "Hi",
  //   titleTwo: "I'm",
  //   titleThree: "Code&Coding",
  // });

  return (
    <header>
      <div className="container header__container">
        <h4> Welcome! </h4>
        <div className="header__title">
          <h4 className="first__title">I'm</h4>
          <Typewriter
            options={{
              strings: ["Web Developer", "Content Creator", "YouTuber"],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
              
            }}
          />
        </div>
        <ul className="header__item">
          <li>DEVELOPER</li>
          <li>DESIGNER</li>
          <li>CONTENT CREATOR</li>
        </ul>
        <ul className="header__socials">
          <li>
            <a href="https://linkedin.com">
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <SiTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <LuInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
