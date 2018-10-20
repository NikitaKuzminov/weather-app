import React from "react";

import styled from "styled-components";

const LIContainer = styled.li`
  width: 300px;
  height: 30px;
  border-bottom: 1px solid lightblue;
  margin-bottom: 15px;
`;

const Icon = styled.i`
  float: right;
  cursor: pointer;
`;

const CityItem = ({ city, favoriteCitiesList, toggleFavorite }) => {
  const iconClass = favoriteCitiesList.some(c => c.id === city.id)
    ? "fa fa-times delete-icon"
    : "fa fa-star fav-icon";
  return (
    <LIContainer onClick={() => toggleFavorite(city)}>
      {city.title}
      <Icon className={iconClass} />
    </LIContainer>
  );
};

export default CityItem;
