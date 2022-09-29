import React from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

const nav__links = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="header">
      <container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ====== menu ====== */}

          <div className="navigation">
            <div className="menu"></div>
          </div>
        </div>
      </container>
    </header>
  );
};

export default Header;
