import React, { useState, useEffect } from "react";
import axios from "axios";
const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comics");

        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Encours de chargement...</div>
  ) : (
    <div className="comics">
      <div className="comics-container">
        {data.results.map((comic, index) => {
          return (
            <div key={index} className="">
              <div className="comics-card">
                <img
                  className="comic-img"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <p className="comics-title">{comic.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
