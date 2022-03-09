// Ref.: Leonardo Vogel on GitHub

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const updateTotalExpense = (expenses) => expenses
  .reduce((acc, { value, currency, exchangeRates }) => {
    // console.log(exchangeRates[currency].ask);
    acc += Number(value) * Number(exchangeRates[currency].ask);
    return acc;
  }, 0);

class Header extends Component {
  render() {
    // console.log(this.props);
    const { email, wallet: { expenses } } = this.props;

    return (
      <>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{updateTotalExpense(expenses).toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.obj),
  }),
}.isRequired;
