import React from "react";
import { connect } from "react-redux";

import { updateSearchFieldInput, requestCitiesList } from "../actions";
import { getSearchInput } from "../selectors";
import InputField from "../components/InputField";

const SearchCities = ({
  inputValue,
  updateSearchFieldInput,
  requestCitiesList
}) => {
  const handleChange = e => {
    updateSearchFieldInput(e);
    requestCitiesList();
  };

  return <InputField inputValue={inputValue} handleChange={handleChange} />;
};

const mapStateToProps = state => ({
  inputValue: getSearchInput(state)
});

const mapDispatchToProps = {
  updateSearchFieldInput,
  requestCitiesList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCities);
