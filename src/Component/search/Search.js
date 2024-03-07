import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const handleSubmit = () => {
    useEffect(() => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${filter}&appid=c33f32a7e6f2c88b9953d23d00881a8e`
        )
        .then((res) => console.log(res.data));
    }, []);
  };
  return (
    <>
      <div className="search">
        <form onSubmit={() => handleSubmit()}>
          <input
            type="search"
            onChange={(e) => setFilter(e.target.value)}
            required
            placeholder="Entrez le nom d'une ville"
          />
          <button type="submit">
            <i className="fa-brands fa-searchengin"></i>
          </button>
        </form>
      </div>
    </>
  );
};
export default Search;
