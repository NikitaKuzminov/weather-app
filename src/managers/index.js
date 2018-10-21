export const getCitiesOnSearch = value =>
  fetch(`https://www.metaweather.com/api/location/search/?query=${value}`)
    .then(response => response.json())
    .then(json => json.map(x => ({ title: x.title, id: x.woeid })));

export const getWeather = id =>
  fetch(`https://www.metaweather.com/api/location/${id}/`)
    .then(response => response.json())
    .then(json => ({ weather: json.consolidated_weather, title: json.title }));
