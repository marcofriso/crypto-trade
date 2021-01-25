import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppStyle from "./AppStyle";
import Currency from "./Components/Currency";
import Home from "./Components/Home";

const App = () => (
  <BrowserRouter>
    <AppStyle>
      <h1>Crypto Trade</h1>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/crypto/:id" component={Currency} exact />
      </Switch>
    </AppStyle>
  </BrowserRouter>
);

export default App;
