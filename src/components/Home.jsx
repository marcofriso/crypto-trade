import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import get from "lodash.get";
import { Spinner } from "../utils/Others";
import { setOrderVarAction } from "../actions";

const ChangePct24Hours = ({ change }) =>
  change > 0 ? (
    <div className="text-success text-right change-pct-24h">
      <b>{change}% </b>
      <i className="fas fa-arrow-up" />
    </div>
  ) : change < 0 ? (
    <div className="text-danger text-right change-pct-24h">
      <b>{-change}% </b>
      <i className="fas fa-arrow-down" />
    </div>
  ) : (
    <div className="text-secondary text-right change-pct-24h">
      <b>{change}% </b>
      <i className="fas fa-equals" />
    </div>
  );

ChangePct24Hours.propTypes = {
  change: PropTypes.string.isRequired,
};

const Home = ({ currency, isLoading, orderVar, setOrderVar, coins }) => {
  const history = useHistory();

  const order = (coinData) => {
    if (!orderVar.header) {
      return coinData;
    }

    const { header, ord } = orderVar;
    const sortKey =
      header === "Coin"
        ? ["CoinInfo", "FullName"]
        : header === "Price"
        ? ["RAW", currency, "PRICE"]
        : header === "Market Cap"
        ? ["RAW", currency, "MKTCAP"]
        : header === "24h Change"
        ? ["RAW", currency, "CHANGEPCT24HOUR"]
        : ["RAW", currency, "TOTALTOPTIERVOLUME24HTO"];

    return coinData.sort((a, b) => {
      let keyA;
      let keyB;

      if (ord === "asc") {
        keyA = get(a, sortKey);
        keyB = get(b, sortKey);
      } else {
        keyA = get(b, sortKey);
        keyB = get(a, sortKey);
      }

      // order strings
      if (header === "Coin") {
        return keyA.localeCompare(keyB);
      }

      // order numbers
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  };

  const onHeaderClick = (e) => {
    const header = e.target.innerText;

    if (header !== orderVar.header && header !== "#") {
      return setOrderVar({ header, ord: "asc" });
    }
    if (header === orderVar.header && orderVar.ord === "asc") {
      return setOrderVar({ header, ord: "desc" });
    }
    return setOrderVar({ header: "default", ord: "desc" });
  };

  const onCoinClick = (coinName) => () => history.push(`/coins/${coinName}`);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && coins[0] && coins[0].DISPLAY[currency] && (
        <table className="table table-hover">
          <thead>
            <tr onClick={onHeaderClick} className="home-table-order">
              <th scope="col">#</th>
              <th className="text-center" scope="col">
                Coin
              </th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {order(coins).map((coin, i) => (
              <tr
                key={coin.CoinInfo.Name}
                onClick={onCoinClick(coin.CoinInfo.Name)}
              >
                <th scope="col">{i + 1}</th>
                <td>
                  <img
                    src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}?width=35`}
                    alt={coin.CoinInfo.Name}
                  />{" "}
                  {coin.CoinInfo.FullName}
                </td>
                <td>{coin.DISPLAY[currency].PRICE}</td>
                <td>{coin.DISPLAY[currency].MKTCAP}</td>
                <td className="">
                  <ChangePct24Hours
                    change={coin.DISPLAY[currency].CHANGEPCT24HOUR}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Home.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  orderVar: PropTypes.shape({
    header: PropTypes.string.isRequired,
    ord: PropTypes.string.isRequired,
  }).isRequired,
  setOrderVar: PropTypes.func.isRequired,
};

Home.defaultProps = {
  coins: [],
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  isLoading: state.isLoading,
  orderVar: state.orderVar,
  coins: state.coins,
});

const mapDispatchToProps = (dispatch) => ({
  setOrderVar: (data) => dispatch(setOrderVarAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
