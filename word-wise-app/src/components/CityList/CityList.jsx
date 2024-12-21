import React from "react";
import styles from "./citylist.module.css";
import CityItem from "../CityItem/CityItem";

const CityList = ({ cityList }) => {
  console.log(cityList);
  if (!cityList || cityList.length === 0) {
    return <p>No cities available.</p>;
  }
  return (
    <>
      {cityList.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </>
  );
};

export default CityList;
