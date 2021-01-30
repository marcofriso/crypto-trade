import React from "react";
import get from "lodash.get";

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

const Spinner = () => (
  <div className="text-center">
    <div
      className="spinner-border text-primary mx-auto mt-5 mx-auto"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const sortCoins = (coinsData, currency, orderVar) => {
  if (!orderVar.header) {
    return coinsData;
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

  return coinsData.sort((a, b) => {
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

export { currencyOptions, sortCoins, Spinner };
