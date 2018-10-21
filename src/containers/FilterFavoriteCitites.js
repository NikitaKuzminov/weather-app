import { connect } from "react-redux";

import {
  getFilteredFavoriteCitiesList,
  getFavoriteCitiesList
} from "../selectors/";
import { toggleFavorite, requestWeather } from "../actions";

import CitiesList from "../components/CitiesList";

const mapStateToProps = state => ({
  citiesList: getFilteredFavoriteCitiesList(state),
  favoriteCitiesList: getFavoriteCitiesList(state)
});

const mapDispatchToProps = {
  toggleFavorite,
  requestWeather
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList);
