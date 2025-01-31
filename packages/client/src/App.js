import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/";
import { HomePageContainer } from "./pages/home/";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomePageContainer} />
    </Switch>
  </main>
);

const App = () => (
  <div className="app">
    <Main />
  </div>
);

export default App;
