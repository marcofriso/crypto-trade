import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppStyle from "./AppStyle";
import Coin from "./components/Coin";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <AppStyle>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/coins/:id" component={Coin} exact />
      </Switch>
    </AppStyle>
  </BrowserRouter>
);

export default App;
