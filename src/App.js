import React, { useState, useEffect } from "react";

import Cards from "./components/Cards";
import "./components/Cards.css";

const App = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [set, isSet] = useState();
  const [data, setData] = useState([]);

  const getSearch = (e) => {
    e.preventDefault();
    if (input.split(" ").length > 1) {
      setQuery(encodeURI(input));
    } else {
      setQuery(input);
    }
    setInput("");
  };

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?by_city=${query}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
      if (data === " ") {
        isSet("false");
        console.log(set);
      }
    };
    getRecipes();
  }, [query]);

  return (
    <div className="container">
      <h1>Search for Breweries:</h1>
      <form onSubmit={getSearch}>
        <input
          className="search"
          placeholder="Sort by city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {isSet === false ? (
        <h1>Loading...</h1>
      ) : (
        data.map((brew, i) => <Cards data={brew} key={i} i={i} isSet={set} />)
      )}
    </div>
  );
};

export default App;
