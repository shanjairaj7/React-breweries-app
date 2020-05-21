import React from "react";
import "./Cards.css";

const Cards = ({ data, i, isSet }) => {
  if (isSet) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="card">
        <h2>{data.name}</h2>
        <h4>
          Country : {data.country} | Phone : {data.phone}
        </h4>
        <span>Street : {data.street}</span>
        <br />
        <button>
          <a href={data.website_url} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </button>
      </div>
    );
  }
};

export default Cards;
