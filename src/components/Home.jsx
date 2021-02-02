import React from "react";
import get from "lodash.get";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { sortCoins, Spinner } from "../utils/Others";
import { setOrderVar as setOrderVarAction } from "../actions";

// ChangePct24Hours component
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
  change: PropTypes.string,
};

ChangePct24Hours.defaultProps = {
  change: "",
};

// TableCoin component
const TableCoin = ({ coins, index }) => {
  const history = useHistory();
  const currency = useSelector((state) => state.currency);

  const coinName = get(coins, [index, "CoinInfo", "Name"]);
  const coinFullName = get(coins, [index, "CoinInfo", "FullName"]);
  const coinImageUrl = get(coins, [index, "CoinInfo", "ImageUrl"]);
  const displayCoinPrice = get(coins, [index, "DISPLAY", currency, "PRICE"]);
  const displayCoinMktcap = get(coins, [index, "DISPLAY", currency, "MKTCAP"]);
  const displayCoinChangePct24Hour = get(coins, [
    index,
    "DISPLAY",
    currency,
    "CHANGEPCT24HOUR",
  ]);

  const onCoinClick = (coinName) => () => history.push(`/coins/${coinName}`);

  return (
    <tr key={coinName} onClick={onCoinClick(coinName)}>
      <th scope="col">{index + 1}</th>
      <td>
        <img
          src={`https://www.cryptocompare.com${coinImageUrl}?width=35`}
          alt={coinName}
        />{" "}
        {coinFullName}
      </td>
      <td>{displayCoinPrice}</td>
      <td>{displayCoinMktcap}</td>
      <td className="">
        <ChangePct24Hours change={displayCoinChangePct24Hour} />
      </td>
    </tr>
  );
};

TableCoin.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number.isRequired,
};

TableCoin.defaultProps = {
  coins: [],
};

// Home component
const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  const currency = useSelector((state) => state.currency);
  const isLoading = useSelector((state) => state.isLoading);
  const orderVar = useSelector((state) => state.orderVar);

  const sortedCoins = sortCoins(coins, currency, orderVar);

  const setOrderVar = (data) => dispatch(setOrderVarAction(data));

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

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && coins[0] && (
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
            {sortedCoins.map((_, i) => (
              <TableCoin key={coins[i].CoinInfo.Name} coins={coins} index={i} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
