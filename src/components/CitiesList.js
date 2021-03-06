import React from "react";
import styled from "styled-components";
import CityItem from "./CityItem";

const ULContainer = styled.ul`
  font-size: 20px;
  color: #555;
  list-style-type: none;
  margin: 0;
`;

const CitiesList = ({
  citiesList,
  favoriteCitiesList,
  toggleFavorite,
  requestWeather
}) => {
  return (
    <>
      <ULContainer>
        {citiesList.map(city => (
          <CityItem
            city={city}
            favoriteCitiesList={favoriteCitiesList}
            toggleFavorite={toggleFavorite}
            key={city.id}
          />
        ))}
      </ULContainer>
      <button onClick={() => requestWeather(28218)}>lol</button>
    </>
  );
};

export default CitiesList;
