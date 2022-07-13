import React from "react";

const CountryCard = ({ luckyCountry }) => {
  return (
    <div className="country-card">
      <div style={{fontSize:'200px', }}>{luckyCountry.emoji}</div>
      <div style={{marginBottom:'30px', }}>{luckyCountry.name}</div>
    </div>
  );
};

export default CountryCard;
