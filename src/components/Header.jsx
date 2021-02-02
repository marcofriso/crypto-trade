import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currencyOptions } from "../utils/Others";
import { setCurrency as setCurrencyAction } from "../actions/index";

const Header = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const timestamp = useSelector((state) => state.timestamp);
  const setCurrency = (data) => dispatch(setCurrencyAction(data));

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
