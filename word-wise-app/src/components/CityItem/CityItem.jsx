import React from "react";

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;
  return (
    <div>
      <span>{emoji}</span>
      <h3>{cityName}</h3>
      <p>{date}</p>
    </div>
  );
};

export default CityItem;
