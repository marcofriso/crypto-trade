export const setCurrency = (currency) => ({
  type: "SET_CURRENCY",
  payload: currency,
});

export const setOrderVar = (orderVar) => ({
  type: "SET_ORDERVAR",
  payload: orderVar,
});

export const setTimestamp = (date) => ({
  type: "SET_TIMESTAMP",
  payload: date,
});

export const fetchCoinsPending = (bool) => ({
  type: "FETCH_COINS_PENDING",
  payload: bool,
});

export const fetchCoinsSuccess = (coins) => ({
  type: "FETCH_COINS_SUCCESS",
  payload: coins,
});

export const fetchCoinsFailure = (error) => ({
  type: "FETCH_COINS_FAILURE",
  payload: error,
});

export const fetchCoins = () => (dispatch, getState) => {
  const { currency, fetchError } = getState();
  const params = {
    limit: 10,
    tsym: currency,
  };

  if (fetchError) dispatch(fetchCoinsFailure(""));
  dispatch(fetchCoinsPending(true));
  fetch(
    `https://min-api.cryptocompare.com/data/top/totalvolfull?${new URLSearchParams(
      params
    )}`
  )
    .then((response) => response.json())
    .then((response) => {
      dispatch(fetchCoinsPending(false));
      dispatch(fetchCoinsSuccess(response.Data));
      dispatch(setTimestamp(new Date().toLocaleString()));
    })
    .catch((error) => {
      dispatch(fetchCoinsPending(false));
      dispatch(fetchCoinsFailure(error.toString()));
    });
};
