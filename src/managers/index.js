export const getCitiesOnSearch = value =>
  fetch(`https://www.metaweather.com/api/location/search/?query=${value}`)
    .then(response => response.json())
    .then(json => json.map(x => ({ title: x.title, id: x.woeid })));
