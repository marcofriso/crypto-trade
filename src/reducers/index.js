import { combineReducers } from "redux";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case "FETCH_COINS_PENDING":
      return action.payload;
    default:
      return state;
  }
};

const coins = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COINS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

const fetchError = (state = "", action) => {
  switch (action.type) {
    case "FETCH_COINS_FAILURE":
      return action.payload;
    default:
      return state;
  }
};

const currency = (state = "USD", action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

const orderVar = (state = { header: "", ord: "asc" }, action) => {
  switch (action.type) {
    case "SET_ORDERVAR":
      return action.payload;
    default:
      return state;
  }
};

const timestamp = (state = "", action) => {
  switch (action.type) {
    case "SET_TIMESTAMP":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  currency,
  isLoading,
  coins,
  fetchError,
  orderVar,
  timestamp,
});
