import React from "react";
import styled from "styled-components";

const InputField = styled.input.attrs({
  type: "text"
})`
  width: 80%;
  max-width: 500px;
  height: 35px;
  padding-left: 2%;
  font-size: 20px;
  border: 2px solid rgba(26, 113, 177, 0.2);
  border-radius: 15px;
  margin-bottom: 20px;

  :focus {
    outline: none;
    border: 2px solid rgba(26, 113, 177, 1);
  }
`;

const SearchInputField = ({
  inputValue,
  updateSearchFieldInput,
  requestCitiesList
}) => {
  const handleChange = value => {
    updateSearchFieldInput(value);
    requestCitiesList();
  };

  return (
    <InputField
      placeholder="Lol kek"
      value={inputValue}
      onChange={e => handleChange(e.target.value)}
    />
  );
};

export default SearchInputField;
