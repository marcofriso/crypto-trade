import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Spinner } from "../utils/Others";
import {
  coinData,
  displayCurrencyMktcap,
  displayCurrencyVolume24HourTo,
  displayCurrencySupply,
} from "../selectors/index";

const Coin = ({
  isLoading,
  coinData,
  displayCurrencyMktcap,
  displayCurrencyVolume24HourTo,
  displayCurrencySupply,
}) => {
  const history = useHistory();
  const [res, setRes] = useState();

  const onClick = () => {
    history.push("/");
  };

  useEffect(() => {
    setRes(coinData);
  }, [coinData]);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && res && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume 24 Hours</th>
              <th scope="col">Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{displayCurrencyMktcap}</td>
              <td>{displayCurrencyVolume24HourTo}</td>
              <td>{displayCurrencySupply}</td>
            </tr>
          </tbody>
        </table>
      )}
      <nav className="pagination justify-content-center fixed-bottom bg-white pt-2 pb-4">
        <button className="page-link text-dark" type="submit" onClick={onClick}>
          HOME
        </button>
      </nav>
    </div>
  );
};

Coin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  coinData: PropTypes.objectOf(PropTypes.any),
  displayCurrencyMktcap: PropTypes.string,
  displayCurrencyVolume24HourTo: PropTypes.string,
  displayCurrencySupply: PropTypes.string,
};

Coin.defaultProps = {
  coinData: {},
  displayCurrencyMktcap: "",
  displayCurrencyVolume24HourTo: "",
  displayCurrencySupply: "",
};

const mapStateToProps = (state, props) => ({
  coins: state.coins,
  isLoading: state.isLoading,
  coinData: coinData(state, props),
  displayCurrencyMktcap: displayCurrencyMktcap(state, props),
  displayCurrencyVolume24HourTo: displayCurrencyVolume24HourTo(state, props),
  displayCurrencySupply: displayCurrencySupply(state, props),
});

export default connect(mapStateToProps)(Coin);
