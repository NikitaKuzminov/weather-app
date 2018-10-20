import { connect } from "react-redux";

import { updateSearchFieldInput, requestCitiesList } from "../actions";
import { getSearchInput } from "../selectors";
import InputField from "../components/InputField";

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
)(InputField);
