import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8ee9a3a7997ee232cdd6672a55453498"
      )
      .then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <div className="search">
        <input
          type="search"
          onChange={(e) => setFilter(e.target.value)}
          required
          placeholder="Search"
        />
        {/* <ul>
          {/* {data
            .filter((country) => {
              if (filter === "") {
                return "";
              } else if (country.name.common.toLowerCase().includes(filter)) {
                return country;
              }
            })
            .map((el) => (
              <li>{el.name.common}</li>
            ))} 
        </ul> */}
      </div>
    </>
  );
};
export default Search;
