import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext(null);
export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [timestamp, setTimestamp] = useState();

  const store = {
    currency,
    setCurrency,
    timestamp,
    setTimestamp,
  };

  StoreProvider.propTypes = {
    children: PropTypes.symbol.isRequired,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
