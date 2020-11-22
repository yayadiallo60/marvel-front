import React from "react";
import { Link } from "react-router-dom";
import logoMarvel from "../images/logoMarvel.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/characters">
          <img className="logoMarvel" src={logoMarvel} alt="logoMarvel" />
        </Link>

        <nav className="navbar">
          <Link to="/characters">
            <span className="navbar-item">CHARACTERS</span>
          </Link>
          <Link to="/comics">
            <span className="navbar-item">COMICS</span>
          </Link>
          <Link to="/favories">
            <span className="navbar-item">MY FAV</span>
          </Link>
        </nav>
        <div className="login">
          <button className="loginBtn" type="submit">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
