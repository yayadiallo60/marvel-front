import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./container/Main";
import Header from "./container/Header";
import Character from "./container/Character";
import Comics from "./container/Comics";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/characters">
          <Main />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
