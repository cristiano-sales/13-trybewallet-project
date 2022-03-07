// Ref.: Leonardo Vogel on GitHub

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH } from '../utils/constants';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoginButtonDisabled: true,
  }

  handleInputChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value }, this.validateLoginButton);
  }

  validateLoginButton = () => {
    const { email, password } = this.state;

    const isEmailValid = EMAIL_REGEX.test(email);
    const isPasswordValid = password.length >= MIN_PASSWORD_LENGTH;

    if (isEmailValid && isPasswordValid) {
      this.setState({ isLoginButtonDisabled: false });
    } else {
      this.setState({ isLoginButtonDisabled: true });
    }
  }

  handleLoginClick = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;

    dispatch(userLogin(email));

    history.push('/carteira');
  }

  render() {
    const { email, password, isLoginButtonDisabled } = this.state;

    return (
      <form>
        <label htmlFor="emial">
          email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            onChange={ this.handleInputChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          password
          <input
            data-testid="password-input"
            typr="password"
            id="password"
            onChange={ this.handleInputChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ isLoginButtonDisabled }
          onClick={ this.handleLoginClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.shape.isRequired,
  dispatch: PropTypes.func.isRequired,
};

//------------------------------------------------------------------------------------------------
// Comentário
//------------------------------------------------------------------------------------------------
