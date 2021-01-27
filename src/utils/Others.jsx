import React from "react";

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

export { currencyOptions, Spinner };
