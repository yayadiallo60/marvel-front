import React from "react";

export const Card = ({ character, index }) => {
  return (
    <div key={index} className="card">
      <img
        className="card-img"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />

      <p className="card-name">{character.name}</p>
    </div>
  );
};

export default Card;
