import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Spinner } from "../utils/Others";

const Coin = ({ coins, currency, isLoading, match }) => {
  const history = useHistory();
  const [res, setRes] = useState();
  const { id } = match.params;

  const onClick = () => {
    history.goBack();
  };

  useEffect(() => {
    setRes(coins.filter((data) => data.CoinInfo.Name === id)[0]);
  }, [coins, id]);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && res && res.DISPLAY[currency] && (
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
              <td>{res.DISPLAY[currency].MKTCAP}</td>
              <td>{res.DISPLAY[currency].VOLUME24HOURTO}</td>
              <td>{res.DISPLAY[currency].SUPPLY}</td>
            </tr>
          </tbody>
        </table>
      )}
      <nav className="pagination justify-content-center fixed-bottom bg-white pt-2 pb-4">
        <button className="page-link text-dark" type="submit" onClick={onClick}>
          GO BACK
        </button>
      </nav>
    </div>
  );
};

Coin.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any),
};

Coin.defaultProps = {
  coins: [],
  match: {},
};

const mapStateToProps = (state) => ({
  coins: state.coins,
  currency: state.currency,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(Coin);
