import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/Store";

const Home = () => {
  const { currency } = useStoreContext();
  const [res, setRes] = useState();

  useEffect(() => {
    const params = {
      limit: 10,
      tsym: currency,
    };

    const fetchData = () =>
      fetch(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?${new URLSearchParams(
          params
        )}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.count("HOME");
          setRes(response);
        })
        .catch((error) => console.log("FE-API ERROR", error));

    fetchData();
    const fetchInterval = setInterval(fetchData, 60000);
    return () => clearInterval(fetchInterval);
  }, [currency]);

  return (
    <div>
      <h2>Home</h2>
      {res && res.Message === "Success" && res.Data[0].DISPLAY[currency] && (
        <ul>
          Crypto Currency - Price - Market Cap - 24h % Change
          {res.Data.map((coin) => (
            <li key={coin.CoinInfo.Name}>
              <Link to={`/coins/${coin.CoinInfo.Name}`}>
                {coin.CoinInfo.FullName} - {coin.DISPLAY[currency].PRICE} -{" "}
                {coin.DISPLAY[currency].MKTCAP} -{" "}
                {coin.DISPLAY[currency].CHANGEPCT24HOUR}%
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
