import { connect } from "react-redux";

import { updateSearchFieldInput } from "../actions";
import { getSearchInput } from "../selectors";

import InputField from "../components/InputField";

const mapStateToProps = state => ({
  inputValue: getSearchInput(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(updateSearchFieldInput(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
