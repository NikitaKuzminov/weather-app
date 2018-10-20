import { connect } from "react-redux";

import {
  getFilteredFavoriteCitiesList,
  getFavoriteCitiesList
} from "../selectors/";
import { toggleFavorite } from "../actions";

import CitiesList from "../components/CitiesList";

const mapStateToProps = state => ({
  citiesList: getFilteredFavoriteCitiesList(state),
  favoriteCitiesList: getFavoriteCitiesList(state)
});

const mapDispatchToProps = {
  toggleFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList);
