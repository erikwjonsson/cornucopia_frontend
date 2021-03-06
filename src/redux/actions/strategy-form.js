import {
  CHANGE_AMOUNT,
  SELECT_CURRENCY_PAIR,
  SELECT_STRATEGY,
  SELECT_START_DATE,
  SELECT_END_DATE
} from "../actions/actionTypes";

export const changeAmount = event => {
  return {
    type: CHANGE_AMOUNT,
    amount: parseInt(event.target.value, 10)
  };
};

export const selectCurrencyPair = option => {
  return {
    type: SELECT_CURRENCY_PAIR,
    currencyPair: option
  };
};

export const selectStrategy = option => {
  return {
    type: SELECT_STRATEGY,
    strategy: option
  };
};

export const selectStartDate = date => {
  return {
    type: SELECT_START_DATE,
    startDate: date
  };
};

export const selectEndDate = date => {
  return {
    type: SELECT_END_DATE,
    endDate: date
  };
};
