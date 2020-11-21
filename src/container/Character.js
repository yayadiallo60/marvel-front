import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comics from "../components/Comics";

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
        // console.log(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  // console.log(data.results);

  return isLoading ? (
    <div>Chargement en cours...</div>
  ) : (
    // <div>coucou</div>
    <div>
      {data.results.map((character, index) => {
        return (
          <div className="character-detail" key={index}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <div className="comics">
              <Comics id={character.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
