const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a função retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('testa se a função retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('testa se a função retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('testa se a função retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('testa se a função retorna a quantidade de elefantes', () => {
    expect(handlerElephants('popularity')).toStrictEqual(5);
  });
  it('testa se a função retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('testa se a função retorna undefined, quando não se é passado argumentos para a função', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('testa se a função retorna que o parâmetro é inválido, quando se é passado um objeto vazio de argumentos para a função', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('testa se a função retorna null, quando é passada uma string que não contempla uma funcionalidade', () => {
    expect(handlerElephants('opa')).toEqual(null);
  });
});
