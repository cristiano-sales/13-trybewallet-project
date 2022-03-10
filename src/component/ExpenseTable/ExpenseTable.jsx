// Ref.: Rafael França on GitHub

import { array } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { EXPENSE_TABLE_HEADER } from '../../utils/constants';

const ExpenseTable = ({ expenses }) => (
  <table>

    <thead>
      <tr>
        {EXPENSE_TABLE_HEADER.map((element) => (
          <th key={ element }>{ element }</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {expenses.map((expense) => {
        const currentCurrency = expense.exchangeRates[expense.currency];
        // console.log(expenses);
        console.log(expense.method);
        const convertedValue = Number(expense.value) * Number(currentCurrency.ask);
        return (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{currentCurrency.name}</td>
            <td>{Number(currentCurrency.ask).toFixed(2)}</td>
            <td>{convertedValue.toFixed(2)}</td>
            <td>Real</td>
          </tr>
        );
      })}
    </tbody>

  </table>
);

ExpenseTable.propTypes = {
  expenses: array,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
