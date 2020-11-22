import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  //   return <div>Hello World</div>;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  console.log(offset);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://marvel-back-yaya.herokuapp.com
        const response = await axios.get(
          `https://marvel-back-yaya.herokuapp.com/characters?offset=${offset}`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [offset]);
  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="main-container">
      <div className="main-cards">
        {data.results.map((character, index) => {
          return <Card character={character} index={index} />;
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

export default Main;
