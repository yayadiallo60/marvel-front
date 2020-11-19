import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ character, index }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div key={index} className="card">
        <img
          className="card-img"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />

        <p className="card-name">{character.name}</p>
      </div>
    </Link>
  );
};

export default Card;
