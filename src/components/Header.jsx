/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { currencyOptions } from "../utils/Others";
import { useStoreContext } from "../utils/Store";

const Header = () => {
  const { currency, setCurrency, timestamp } = useStoreContext();
  const crypto = useLocation().pathname.replace(/\/coins\/|\//, "");

  const onClick = (e) => {
    const curr = e.target.innerText;

    setCurrency(curr);
  };

  return (
    <div className="text-center">
      <h1>{crypto || "Crypto Trade"}</h1>
      <p>Last update: {timestamp}</p>
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
            <a key={curr} className="dropdown-item" href="#">
              {curr}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
