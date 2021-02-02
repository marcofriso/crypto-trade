import { createSelector } from "reselect";
import get from "lodash.get";

const selectCoins = (state) => state.coins;
const selectCurrency = (state) => state.currency;

const coinRoute = (_, props) => props.match.params.id;

export const coinData = createSelector(
  selectCoins,
  coinRoute,
  (coinsData, coin) =>
    coinsData.filter((data) => data.CoinInfo.Name === coin)[0]
);

export const displayCurrencyMktcap = createSelector(
  coinData,
  selectCurrency,
  (coinData, currency) => get(coinData, ["DISPLAY", currency, "MKTCAP"])
);

export const displayCurrencyVolume24HourTo = createSelector(
  coinData,
  selectCurrency,
  (coinData, currency) => get(coinData, ["DISPLAY", currency, "VOLUME24HOURTO"])
);

export const displayCurrencySupply = createSelector(
  coinData,
  selectCurrency,
  (coinData, currency) => get(coinData, ["DISPLAY", currency, "SUPPLY"])
);
