// Ref.: Leonardo Vogel on GitHub

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputNewExpense extends Component {
  render() {
    const { id, type, label, options, onInputChange, value } = this.props;

    if (type === 'select') {
      return (
        <label htmlFor={ id }>
          { label }
          <select
            data-testid={ `${id}-input` }
            id={ id }
            onChange={ onInputChange }
            value={ value }
          >
            { options.map((option) => <option key={ option }>{option}</option>)}
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ `${id}-input` }
          type={ type }
          id={ id }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

InputNewExpense.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onInputChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
