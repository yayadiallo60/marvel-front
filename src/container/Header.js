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

        <nav>
          <Link to="/characters">
            <span>Characters</span>
          </Link>
          <Link to="comics">
            <span>Comics</span>
          </Link>
          <Link to="favories">
            <span>Favories</span>
          </Link>
        </nav>
        <div className="login">
          <button type="submit">login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
