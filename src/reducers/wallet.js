// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  moeda: [],
  despesa: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'DEFAULT':
    return state;
  default:
    return state;
  }
};

export default walletReducer;
