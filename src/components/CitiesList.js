import React from "react";
import styled from "styled-components";

const ULContainer = styled.ul`
  font-size: 20px;
  color: #555;
  list-style-type: none;
  margin: 0;
`;

const LIContainer = styled.li`
  width: 300px;
  height: 30px;
  border-bottom: 1px solid lightblue;
  margin-bottom: 15px;
`;

const CitiesList = ({ citiesList }) => (
  <>
    <ULContainer>
      {citiesList.map(city => (
        <LIContainer>{city.title}</LIContainer>
      ))}
    </ULContainer>
  </>
);

export default CitiesList;
