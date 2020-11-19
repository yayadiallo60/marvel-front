import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
const Main = () => {
  //   return <div>Hello World</div>;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="main-container">
      <div className="main-cards">
        {data.results.map((character, index) => {
          return (
            <Link>
              <Card character={character} index={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
