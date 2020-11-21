import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterComics from "../components/CharacterComics";

const Character = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/character/?id=${id}`
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>Chargement en cours...</div>
  ) : (
    <div className="character-container">
      {data.results.map((character, index) => {
        return (
          <div className="character" key={index}>
            <img
              className="character-img"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <div className="character-details-col2">
              <div className="character-details-col2-row1">
                <h2 className="character-name">{character.name}</h2>
                <p className="character.description">{character.description}</p>
              </div>

              <div>
                <CharacterComics id={character.id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
