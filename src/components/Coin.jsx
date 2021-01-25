import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useStoreContext } from "../utils/Store";

const Coin = (props) => {
  const history = useHistory();
  const { currency } = useStoreContext();
  const [res, setRes] = useState();

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const params = {
      fsyms: id,
      tsyms: currency,
    };

    const fetchData = () =>
      fetch(
        ` https://min-api.cryptocompare.com/data/pricemultifull?${new URLSearchParams(
          params
        )}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.count("COIN");
          setRes(response);
        })
        .catch((error) => console.log("FE2-API ERROR", error));

    fetchData();
    const fetchInterval = setInterval(fetchData, 60000);
    return () => clearInterval(fetchInterval);
  }, [currency, id]);

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          history.goBack();
        }}
      >
        GO BACK
      </button>
      <h2>COIN - {id}</h2>
      {res && (
        <div>
          Market Cap - {res.DISPLAY[id][currency].MKTCAP}
          <br />
          Volume 24 Hours - {res.DISPLAY[id][currency].VOLUME24HOURTO}
          <br />
          Supply - {res.DISPLAY[id][currency].SUPPLY}
        </div>
      )}
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
