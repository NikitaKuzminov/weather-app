import React from "react";
import { Switch, Route } from "react-router-dom";

import SearchCities from "./screens/SearchCities";
import Navbar from "./components/Navbar";
import FavoriteCititesList from "./screens/FavoriteCitiesList";

const App = () => (
  <>
    <Navbar />
    <h2>The Weather App</h2>
    <Switch>
      <Route exact path="/" component={SearchCities} />
      <Route path="/weather" component={FavoriteCititesList} />
    </Switch>
  </>
);

export default App;
