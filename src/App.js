import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./container/Main";
import Header from "./container/Header";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/characters">
            <Main />
          </Route>
          <Route path="/character/:id">
            <Main />
          </Route>
        </Switch>
      </Router>
      <Main />
    </div>
  );
};

export default App;
