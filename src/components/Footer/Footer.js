
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Worl"D" Economic news President -{" "}
        <a href="https://onepiece.fandom.com/wiki/Morgans" target="__blank">
          MorganS
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.youtube.com/watch?v=tRnU1pMOm8U" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
      
      </div>
    </div>
  );
};

export default Footer;