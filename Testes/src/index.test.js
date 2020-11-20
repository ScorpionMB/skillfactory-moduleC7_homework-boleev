const rev = require('./index.js');

describe('test func reverseString', () => {
  it('reverse string right', () => {
    expect(rev('test')).toBe('tset');
  }),
  it('reverse string error empty string', () => {
    expect(rev('')).toBe('Некорректные данные');
  }),
  it('reverse string error the type is not string', () => {
    expect(rev(12345)).toBe('Некорректные данные');
  })
});


