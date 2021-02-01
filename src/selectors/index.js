import { createSelector } from "reselect";

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
  (coinData, currency) =>
    coinData && coinData.DISPLAY[currency] && coinData.DISPLAY[currency].MKTCAP
);

export const displayCurrencyVolume24HourTo = createSelector(
  coinData,
  selectCurrency,
  (coinData, currency) =>
    coinData &&
    coinData.DISPLAY[currency] &&
    coinData.DISPLAY[currency].VOLUME24HOURTO
);

export const displayCurrencySupply = createSelector(
  coinData,
  selectCurrency,
  (coinData, currency) =>
    coinData && coinData.DISPLAY[currency] && coinData.DISPLAY[currency].SUPPLY
);