const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se a função retorna todos horários caso o parametro esteja vazio', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('testa se a função retorna que o zoologico está fechado, caso o parametro seja monday', () => {
    expect(getOpeningHours('monday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('testa se a função retorna que o zoologico está aberto, caso o parametro seja tuesday', () => {
    expect(getOpeningHours('tuesday', '08:00-AM')).toEqual('The zoo is open');
  });
  it('testa se a função retorna que o zoologico está fechado, caso o parametro seja Wednesday às 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('testa se a função retorna mensagem de erro, caso o parametro referente ao dia não corresponda a uma opção valida', () => {
    expect(() => getOpeningHours('invalid', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se a função retorna mensagem de erro, caso a abreviatura referente ao horario não corresponda a uma opção valida', () => {
    expect(() => getOpeningHours('Monday', '09:00-AX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testa se a função retorna mensagem de erro, caso as horas não correspondam a uma opção valida', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });
  it('testa se a função retorna mensagem de erro, caso os minutos não correspondam a uma opção valida', () => {
    expect(() => getOpeningHours('Saturday', '09:C0-AM')).toThrow(/^The minutes should represent a number$/);
  });
  it('testa se a função retorna mensagem de erro, quando não corresponder as regras ultilizadas para o horario', () => {
    expect(() => getOpeningHours('Saturday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('testa se a função retorna mensagem de erro, quando for passado 60 minutos como parametro', () => {
    expect(() => getOpeningHours('tuesday', '08:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
