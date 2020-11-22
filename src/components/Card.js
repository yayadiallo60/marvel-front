import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Card = ({ character, index }) => {
  const handleCookies = () => {
    if (Cookies.get("favories") !== undefined) {
      const cookies = Cookies.get("favories");
      Cookies.remove("favories");
      Cookies.set("favories", cookies + " " + character.id, {
        expires: 1000,
      });
    } else {
      Cookies.set("favories", character.id);
    }
  };

  return (
    <div className="main">
      <Link to={`/character/${character.id}`}>
        <div key={index}>
          <div className="card">
            <img
              className="card-img"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />

            <p className="card-name">{character.name}</p>
          </div>
        </div>
      </Link>
      <FontAwesomeIcon
        icon="heart"
        className="fav"
        onClick={() => {
          handleCookies();
        }}
      />
    </div>
  );
};

export default Card;
