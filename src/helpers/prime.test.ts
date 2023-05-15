import { isPrime } from './prime';

describe('number is prime', () => {
  it('some numbers are prime', () => {
    expect.assertions(4);

    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  it('some numbers are not prime', () => {
    expect.assertions(4);

    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(3000)).toBe(false);
  });
});
