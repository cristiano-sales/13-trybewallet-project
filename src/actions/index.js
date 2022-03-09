// Ref.: Leonardo Vogel on GitHub

import getTaxasDeCambio from '../services/API';

export const USER_LOGIN = 'USER_LOGIN';
export const NEW_EXPENSE = 'NEW_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const newExpense = (expense) => ({
  type: NEW_EXPENSE,
  newExpense: expense,
});

export const fetchExchangeRates = (newExpenseObject) => async (dispatch) => {
  const exchangeRates = await getTaxasDeCambio();
  const newExpenseWithExchangeRates = { ...newExpenseObject, exchangeRates };
  dispatch(newExpense(newExpenseWithExchangeRates));
};
