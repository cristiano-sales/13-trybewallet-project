import React from 'react';
import Header from '../component/Header/Header';
import FormNewExpense from '../component/FormNewExpense/FormNewExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormNewExpense />
      </>
    );
  }
}

export default Wallet;
