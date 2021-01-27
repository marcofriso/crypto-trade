import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useStoreContext } from "../utils/Store";
import { Spinner } from "../utils/Others";

const Coin = (props) => {
  const history = useHistory();
  const { currency, setTimestamp } = useStoreContext();
  const [res, setRes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const {
    match: {
      params: { id },
    },
  } = props;

  const onClick = () => {
    history.goBack();
  };

  useEffect(() => {
    const params = {
      fsyms: id,
      tsyms: currency,
    };

    const fetchData = () => {
      setIsLoading(true);
      fetch(
        ` https://min-api.cryptocompare.com/data/pricemultifull?${new URLSearchParams(
          params
        )}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.count("COIN");
          setIsLoading(false);
          setRes(response);
          setTimestamp(new Date().toLocaleString());
        })
        .catch((error) => {
          console.log("FE2-API ERROR", error);
          setIsLoading(false);
        });
    };

    fetchData();
    const fetchInterval = setInterval(fetchData, 60000);
    return () => clearInterval(fetchInterval);
  }, [currency, id, setTimestamp]);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && res && res.DISPLAY[id][currency] && (
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
              <td>{res.DISPLAY[id][currency].MKTCAP}</td>
              <td>{res.DISPLAY[id][currency].VOLUME24HOURTO}</td>
              <td>{res.DISPLAY[id][currency].SUPPLY}</td>
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
  match: PropTypes.objectOf(PropTypes.any),
};

Coin.defaultProps = {
  match: {},
};

export default Coin;
