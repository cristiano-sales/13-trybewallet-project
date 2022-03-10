import React from 'react';
import Header from '../component/Header/Header';
import FormNewExpense from '../component/FormNewExpense/FormNewExpense';
import ExpenseTable from '../component/ExpenseTable/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormNewExpense />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
