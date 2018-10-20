export const getSearchInput = state => state.cities.searchFieldInput;
export const getCitiesList = state =>
  state.cities.searchFieldInput !== "" ? state.cities.citiesList : [];
export const getFavoriteCitiesList = state => state.cities.favorite;
export const getFilteredFavoriteCitiesList = state =>
  state.cities.searchFieldInput !== ""
    ? state.cities.favorite.filter(city =>
        city.title
          .toLowerCase()
          .includes(state.cities.searchFieldInput.toLowerCase())
      )
    : state.cities.favorite;
