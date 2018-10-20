export const getSearchInput = state => state.cities.searchFieldInput;
export const getCitiesList = state =>
  state.cities.searchFieldInput !== "" ? state.cities.citiesList : [];
export const getFavoriteCitiesList = state => state.cities.favorite;
