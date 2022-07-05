const { internet } = require('faker/lib/locales/pt_BR');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a função retorna a quantidade de elefantes', () => {
    expect(handlerElephants(handlerElephants('count')).toEqual(4));
  });
  it('testa se a função retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
  });
  it('testa se a função retorna a média de idade dos elefantes', () => {
    expect(handlerElephants(handlerElephants('averageAge'))).toEqual(10.5);
  });
  it('testa se a função retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('testa se a função retorna a quantidade de elefantes', () => {
    expect(handlerElephants('popularity')).toStrictEqual(5);
  });
  it('testa se a função retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual([ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ]);
  });
});
