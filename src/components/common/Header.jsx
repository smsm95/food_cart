import React from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineShopping } from "react-icons/ai";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img className="header__logo" src={logo} alt="" />
        </span>
        <span>
          <AiOutlineShopping size={40} />
          <span className="badge bg-secondary">9</span>
        </span>
      </div>
    </nav>
  );
}

export default Header;
