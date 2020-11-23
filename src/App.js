import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./container/Main";
import Header from "./container/Header";
import Character from "./container/Character";
import Comics from "./container/Comics";
import SearchBar from "./container/SearchBar";
import Favories from "./container/Favories";

// Fontawsome

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowAltCircleRight, faArrowAltCircleLeft, faHeart);

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/favories">
          <Favories />
        </Route>
        <Route path="/characters">
          <Main />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
