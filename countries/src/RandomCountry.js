import CountryCard from "./CountryCard";
import React, { useState } from "react";

const RandomCountry = ({ countries }) => {
  const [luckyCountry, setLuckyCountry] = useState({});
  const displayRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomIndex];
    setLuckyCountry(country);
  };
  return (
    <div>
      <CountryCard luckyCountry={luckyCountry} />
      <button
        // style={{
        // //   cursor:'pointer'
        // }}
        className="btn"
        onClick={displayRandomCountry}
      >
        Random Country
      </button>
    </div>
  );
};

export default RandomCountry;
