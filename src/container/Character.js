import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
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
          `https://marvel-back-yaya.herokuapp.com/character/?id=${id}`
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
    <Loader
      className="loader"
      type="TailSpin"
      color="#ff0000"
      height={300}
      width={300}
      timeout={10000}
    />
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
              <div className="slider">
                <h2 className="characterComics-title">Comic(s)</h2>
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
