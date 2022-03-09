// Ref.: Leonardo Vogel on GitHub

const getTaxasDeCambio = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  // console.log('responseJson no getTaxasDeCambio: ', responseJson);
  delete responseJson.USDT;
  return responseJson;
};

export const getMoedas = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  // console.log(responseJson);
  return Object.keys(responseJson).filter((moeda) => moeda !== 'USDT');
};

export default getTaxasDeCambio;