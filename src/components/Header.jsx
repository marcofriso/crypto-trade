import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { currencyOptions } from "../utils/Others";
import { setCurrency } from "../actions/index";

const Header = ({ currency, timestamp, setCurrency }) => {
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

Header.propTypes = {
  currency: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  setCurrency: PropTypes.func.isRequired,
};

Header.defaultProps = {
  timestamp: "",
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  timestamp: state.timestamp,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (data) => dispatch(setCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
