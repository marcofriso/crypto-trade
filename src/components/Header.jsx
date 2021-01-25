/* eslint-disable no-unused-vars */
import React from "react";
import { useStoreContext } from "../utils/Store";

const Header = () => {
  const { currency, setCurrency } = useStoreContext();

  const currencyOptions = [
    "USD",
    "USDT",
    "BTC",
    "ETH",
    "EUR",
    "GBP",
    "JPY",
    "KRW",
  ];

  const onClick = (e) => {
    const curr = e.target.innerText;

    setCurrency(curr);
  };

  return (
    <div>
      <h1>Crypto Trade</h1>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {currency}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          onClick={onClick}
          aria-hidden="true"
        >
          {currencyOptions.map((curr) => (
            <a key={curr} value={curr} className="dropdown-item" href="#">
              {curr}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
