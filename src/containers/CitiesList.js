import { connect } from "react-redux";

import { getCitiesList } from "../selectors/cities";

import CitiesList from "../components/CitiesList";

const mapStateToProps = state => ({
  citiesList: getCitiesList(state)
});

export default connect(mapStateToProps)(CitiesList);
