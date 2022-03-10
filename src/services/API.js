// Ref.: Leonardo Vogel on GitHub

const getTaxasDeCambio = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  delete responseJson.USDT;
  return responseJson;
};

export const getMoedas = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  return Object.keys(responseJson).filter((moeda) => moeda !== 'USDT');
};

export default getTaxasDeCambio;
