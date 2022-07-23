import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://i.pinimg.com/564x/42/fe/b0/42feb027024ea967ee5712f1bd72d3a6.jpg"
        height="80%"
        alt="logo"
      /><p><em><strong>          Stay Updated.... !</strong></em></p>
    </div>
  );
};

export default NavInshort;