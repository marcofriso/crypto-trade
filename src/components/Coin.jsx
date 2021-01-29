import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Spinner } from "../utils/Others";
import { setIsLoadingAction, setTimestampAction } from "../actions";

const Coin = ({ currency, isLoading, match, setTimestamp, setIsLoading }) => {
  const history = useHistory();
  const [res, setRes] = useState();
  const { id } = match.params;

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
  }, [currency, id, setIsLoading, setTimestamp]);

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
  currency: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any),
  setIsLoading: PropTypes.func.isRequired,
  setTimestamp: PropTypes.func.isRequired,
};

Coin.defaultProps = {
  match: {},
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (data) => dispatch(setIsLoadingAction(data)),
  setTimestamp: (data) => dispatch(setTimestampAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
