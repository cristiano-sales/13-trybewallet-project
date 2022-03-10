// Ref.: Leonardo Vogel on GitHub

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputNewExpense from '../InputNewExpense/InputNewExpense';
import { fetchExchangeRates } from '../../actions';
import { getMoedas } from '../../services/API';

class FormNewExpense extends Component {
  state = {
    currencies: [],
    newExpenseObject: {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    },
  }

  async componentDidMount() {
    const currenciesArray = await getMoedas();
    this.setState({ currencies: currenciesArray });
  }

  //----------------------------------------------------------------------------------------------
  //  handleInputChange altera o estado com base no estado anterior, setando em newExpenseObject
  // os valores digitados no input. Assim, o valor digitado no input de id="value" é setado para newExpenseObject.value, assim como
  // o valor escolhido no input de id="method" é setado em newExpenseObject.method
  //----------------------------------------------------------------------------------------------

  handleInputChange = ({ target: { id, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      newExpenseObject: {
        ...prevState.newExpenseObject,
        [id]: value,
      },
    }));
  }

  //----------------------------------------------------------------------------------------------
  // Ao clicar em Adicionar Despesa, salva as informações da despesa no estado global
  // handleNewExpenseClick despacha fetchExchangeRates passando para ela newExpenseObject do estado deste form, o objeto contendo os dados da nova despesa
  // fetchExchangeRates é responsável por trazer o fetch da taxa de câmbio, por meio da getTaxasDeCambio
  // Ela faz o dispatch da action creator newExpense passando newExpenseObject do estado deste form mais a taxa de cambio resultante do getTaxasDeCambio
  // Assim é criado um NEW_EXPENSE no estado global
  //----------------------------------------------------------------------------------------------

  handleNewExpenseClick = () => {
    const { newExpenseObject } = this.state;
    const { dispatch } = this.props;

    dispatch(fetchExchangeRates(newExpenseObject));

    this.setState((prevState) => (
      {
        ...prevState,

        newExpenseObject: {
          ...prevState.newExpenseObject,
          // O id da despesa deve ser um número sequencial, começando em 0
          id: prevState.newExpenseObject.id + 1,
          value: 0,
          description: '' },
      }
    ));
  }

  render() {
    const {
      currencies,
      newExpenseObject: { value, description, currency, method, tag },
    } = this.state;
    return (
      <form>

        <InputNewExpense
          // Um campo para adicionar valor da despesa
          id="value"
          type="text"
          label="Valor"
          onInputChange={ this.handleInputChange }
          value={ value }
        />

        <InputNewExpense
          // Um campo para adicionar a descrição da despesa
          id="description"
          type="text"
          label="Descrição"
          onInputChange={ this.handleInputChange }
          value={ description }
        />

        <InputNewExpense
          // Um campo para selecionar em qual moeda será registrada a despesa
          id="currency"
          type="select"
          label="Moeda"
          options={ currencies }
          onInputChange={ this.handleInputChange }
          value={ currency }
        />

        <InputNewExpense
          // Um campo para adicionar qual método de pagamento será utilizado
          id="method"
          type="select"
          label="Método"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onInputChange={ this.handleInputChange }
          value={ method }
        />

        <InputNewExpense
          // Um campo para selecionar uma categoria (tag) para a despesa
          id="tag"
          type="select"
          label="Tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onInputChange={ this.handleInputChange }
          value={ tag }
        />

        <button
          // Um botão com o texto 'Adicionar despesa'
          type="button"
          onClick={ this.handleNewExpenseClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default connect()(FormNewExpense);

FormNewExpense.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;
