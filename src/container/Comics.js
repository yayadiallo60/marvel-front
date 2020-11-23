import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-back-yaya.herokuapp.com/comics?offset=${offset}`
        );

        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [offset]);

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
      <div className="pagination">
        <span>Page precedente</span>
        <FontAwesomeIcon
          // style={offset? }
          className="arrow"
          icon="arrow-alt-circle-left"
          onClick={() => {
            setOffset(offset - 100);
          }}
        />

        <FontAwesomeIcon
          className="arrow"
          icon="arrow-alt-circle-right"
          onClick={() => {
            setOffset(offset + 100);
          }}
        />
        <span>Page suivante</span>
      </div>
    </div>
  );
};

export default Comics;
