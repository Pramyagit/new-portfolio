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
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/skill">SKILL</Link>
          </li>
          <li>
            <Link to="/demo">DEMO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
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
