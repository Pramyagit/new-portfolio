import React, { useState } from "react";
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export const Header = () => {
  const [menu, setMenu] = useState("");
  return (
    // <Container>
    // <div className="navbar">
    <div className="header">
      <div className="port ">Portfolio</div>
      <nav className="nav" id="topnav">
        <ul className={menu ? "open" : ""}>
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Skill">SKILL</Link>
          </li>
          <li>
            <Link to="/Demo">DEMO</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          {/* <li className="menu">
            <a href="" className="icon">
            <i className="fa fa-bars"></i>
            </a>
            </li> */}
        </ul>
        <i
          className="fa fa-bars menu"
          onClick={() => {
            setMenu(!menu);
          }}
        ></i>
      </nav>
    </div>
    // </div>
    // </Container>
  );
};
