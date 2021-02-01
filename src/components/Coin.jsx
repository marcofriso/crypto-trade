import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Spinner } from "../utils/Others";
import {
  coinData as coinDataSelector,
  displayCurrencyMktcap as displayCurrencyMktcapSelector,
  displayCurrencyVolume24HourTo as displayCurrencyVolume24HourToSelector,
  displayCurrencySupply as displayCurrencySupplySelector,
} from "../selectors/index";

const Coin = ({ match }) => {
  const history = useHistory();
  const [res, setRes] = useState();

  const coinData = useSelector((state) => coinDataSelector(state, { match }));
  const isLoading = useSelector((state) => state.isLoading);
  const displayCurrencyMktcap = useSelector((state) =>
    displayCurrencyMktcapSelector(state, { match })
  );
  const displayCurrencyVolume24HourTo = useSelector((state) =>
    displayCurrencyVolume24HourToSelector(state, { match })
  );
  const displayCurrencySupply = useSelector((state) =>
    displayCurrencySupplySelector(state, { match })
  );

  const onClick = () => {
    history.push("/");
  };

  useEffect(() => {
    setRes(coinData);
  }, [coinData]);

  return (
    <div className="mx-3">
      {isLoading && <Spinner />}
      {!isLoading && res && (
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
              <td>{displayCurrencyMktcap}</td>
              <td>{displayCurrencyVolume24HourTo}</td>
              <td>{displayCurrencySupply}</td>
            </tr>
          </tbody>
        </table>
      )}
      <nav className="pagination justify-content-center fixed-bottom bg-white pt-2 pb-4">
        <button className="page-link text-dark" type="submit" onClick={onClick}>
          HOME
        </button>
      </nav>
    </div>
  );
};

Coin.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Coin;
