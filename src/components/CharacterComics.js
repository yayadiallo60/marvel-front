import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CharacterComics = ({ id }) => {
  const [data, setdata] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/character-comics/?id=${id}`
      );

      setdata(response.data);
      setIsLoading(false);
      // console.log("comics response.data ===>", response.data);
    };
    fetchData();
  }, [id]);
  // console.log("data ===>", data);
  return isLoading ? (
    <div>Encours de chargement...</div>
  ) : (
    <div className="characterComics">
      {data.results.map((comic, index) => {
        return (
          <Link key={index}>
            <img
              className="characterComics-img"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />

            <p>{comic.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterComics;
