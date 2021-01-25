import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext(null);
export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [coin, setCoin] = useState("BTC");

  const store = {
    currency,
    coin,
    setCurrency,
    setCoin,
  };

  StoreProvider.propTypes = {
    children: PropTypes.symbol.isRequired,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
