import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Spinner } from "../utils/Others";
import { useStoreContext } from "../utils/Store";

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

const Home = () => {
  const history = useHistory();
  const { currency, setTimestamp } = useStoreContext();
  const [res, setRes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (coinName) => () => history.push(`/coins/${coinName}`);

  useEffect(() => {
    const params = {
      limit: 10,
      tsym: currency,
    };

    const fetchData = () => {
      setIsLoading(true);
      // from the data I see that "totalvolfull" represents the total market cap better than "mktcapfull"
      fetch(
        `https://min-api.cryptocompare.com/data/top/totalvolfull?${new URLSearchParams(
          params
        )}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.count("HOME");
          setIsLoading(false);
          setRes(response);
          setTimestamp(new Date().toLocaleString());
        })
        .catch((error) => {
          console.log("FE-API ERROR", error);
          setIsLoading(false);
        });
    };

    fetchData();
    const fetchInterval = setInterval(fetchData, 60000);
    return () => clearInterval(fetchInterval);
  }, [currency, setTimestamp]);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading &&
        res &&
        res.Message === "Success" &&
        res.Data[0].DISPLAY[currency] && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Crypto Currency</th>
                <th scope="col">Price</th>
                <th scope="col">Market Cap</th>
                <th scope="col">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {res.Data.map((coin, i) => (
                <tr
                  key={coin.CoinInfo.Name}
                  onClick={onClick(coin.CoinInfo.Name)}
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

export default Home;
