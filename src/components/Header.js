import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons8-menu.svg";

let Header = () => {
  let [sidebar, setSidebar] = useState(0);
  return (
    <div>
      <div className={sidebar ? "sideNav" : "sideNav close"}>
        <img src={menuIcon} className="menuIcon" onClick={() => setSidebar(!sidebar)}/>
        <h3><Link className="navbarLink" to="/history">History</Link></h3>
        <h3><Link className="navbarLink" to="/">Questions</Link></h3>
      </div>
      <div className="header">
        <div className="menuIconDiv" onClick={() => setSidebar(!sidebar)}>
          <img src={menuIcon} className="menuIcon" />
        </div>
        <div className="title">Is Rosie Happy?</div>
      </div>
    </div>
  );
};

export default Header;
