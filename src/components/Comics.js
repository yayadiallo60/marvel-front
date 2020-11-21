import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Comics = ({ id }) => {
  const [data, setdata] = useState();

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/character-comics/?id=${id}`
  //   );

  //   setdata(response.data);
  //   console.log(response.data);
  // };
  // fetchData();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("id ===>", id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/character-comics/?id=${id}`
      );

      setdata(response.data);
      console.log("comics response.data ===>", response.data);
    };
    fetchData();
  }, [id]);
  console.log("data ===>", data);
  return (
    // <div>hello world</div>
    <div>
      {data.results.map((comic, index) => {
        return (
          <div>{comic.title}</div>
          // <Link>
          //   <img
          //     src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          //     alt={comic.title}
          //   />

          //   <p>{comic.title}</p>
          // </Link>
        );
      })}
    </div>
  );
};

export default Comics;
