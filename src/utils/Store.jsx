import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext(null);
export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const initialOrderVar = { header: "", ord: "asc" };

  const [currency, setCurrency] = useState("USD");
  const [timestamp, setTimestamp] = useState();
  const [orderVar, setOrderVar] = useState(initialOrderVar);

  const store = {
    currency,
    orderVar,
    timestamp,
    setCurrency,
    setOrderVar,
    setTimestamp,
  };

  StoreProvider.propTypes = {
    children: PropTypes.symbol.isRequired,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
