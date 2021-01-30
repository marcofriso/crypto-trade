import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import AppStyle from "./AppStyle";
import Coin from "./components/Coin";
import Header from "./components/Header";
import Home from "./components/Home";
import { fetchCoins } from "./actions";

const App = ({ currency, fetchCoins, fetchError }) => {
  useEffect(() => {
    fetchCoins();

    const timer = setInterval(() => {
      fetchCoins();
    }, 60000);
    return () => clearTimeout(timer);
  }, [currency, fetchCoins]);

  return (
    <BrowserRouter>
      <AppStyle>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/coins/:id" component={Coin} exact />
        </Switch>
        {fetchError && (
          <div className="text-center mt-3">
            <h3>{fetchError}</h3>
          </div>
        )}
      </AppStyle>
    </BrowserRouter>
  );
};

App.propTypes = {
  currency: PropTypes.string.isRequired,
  fetchCoins: PropTypes.func.isRequired,
  fetchError: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  fetchError: state.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
