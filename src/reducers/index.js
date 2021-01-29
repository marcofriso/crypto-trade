import { combineReducers } from "redux";

const currency = (state = "USD", action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
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
  orderVar,
  timestamp,
});
