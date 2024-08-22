import { describe, expect, it } from '@jest/globals';

import {
  abundance,
  divisors,
  isPrime,
  nextPrimeFactor,
  primeFactors,
  properDivisors,
  ___DIVISORS_ABUNDANCE___
} from '.';

describe('divisors of a number', () => {
  it('divisors of one', () => {
    expect.assertions(1);

    expect(divisors(1)).toStrictEqual([1]);
  });

  it('divisors of a number', () => {
    expect.assertions(5);

    expect(divisors(1)).toStrictEqual([1]);
    expect(divisors(2)).toStrictEqual([1, 2]);
    expect(divisors(8)).toStrictEqual([1, 2, 4, 8]);
    expect(divisors(9)).toStrictEqual([1, 3, 9]);
    expect(divisors(16)).toStrictEqual([1, 2, 4, 8, 16]);
  });

  it('divisors of a number border cases', () => {
    expect.assertions(2);

    expect(divisors(110)).toStrictEqual([1, 2, 5, 10, 11, 22, 55, 110]);
    expect(divisors(18632)).toStrictEqual([
      1, 2, 4, 8, 17, 34, 68, 136, 137, 274, 548, 1096, 2329, 4658, 9316, 18632
    ]);
  });

  it('proper divisors of a number', () => {
    expect.assertions(5);

    expect(properDivisors(1)).toStrictEqual([]);
    expect(properDivisors(2)).toStrictEqual([1]);
    expect(properDivisors(8)).toStrictEqual([1, 2, 4]);
    expect(properDivisors(9)).toStrictEqual([1, 3]);
    expect(properDivisors(16)).toStrictEqual([1, 2, 4, 8]);
  });

  it('next prime factor of a target number', () => {
    expect.assertions(5);

    expect(nextPrimeFactor(1)).toStrictEqual({
      factor: 1,
      carry: 1,
      cycles: 0
    });
    expect(nextPrimeFactor(2)).toStrictEqual({
      factor: 2,
      carry: 1,
      cycles: 1
    });
    expect(nextPrimeFactor(4)).toStrictEqual({
      factor: 2,
      carry: 2,
      cycles: 1
    });
    expect(nextPrimeFactor(9)).toStrictEqual({
      factor: 3,
      carry: 3,
      cycles: 2
    });
    expect(nextPrimeFactor(7)).toStrictEqual({
      factor: 7,
      carry: 1,
      cycles: 6
    });
  });

  it('prime factors of number', () => {
    expect.assertions(5);

    expect(primeFactors(1)).toStrictEqual({ factors: [1], cycles: 0 });
    expect(primeFactors(2)).toStrictEqual({ factors: [2], cycles: 1 });
    expect(primeFactors(6)).toStrictEqual({ factors: [2, 3], cycles: 3 });
    expect(primeFactors(12)).toStrictEqual({
      factors: [2, 2, 3],
      cycles: 4
    });
    expect(primeFactors(120)).toStrictEqual({
      factors: [2, 2, 2, 3, 5],
      cycles: 9
    });
  });

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

  it('abundance of a integer number compared to constants', () => {
    expect.assertions(3);

    expect(abundance(10)).toStrictEqual(
      ___DIVISORS_ABUNDANCE___.DIVISORS_DEFICIENT
    );
    expect(abundance(12)).toStrictEqual(
      ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT
    );
    expect(abundance(28)).toStrictEqual(
      ___DIVISORS_ABUNDANCE___.DIVISORS_PERFECT
    );
  });

  it('abundance of first 12 numbers', () => {
    expect.assertions(11);

    for (let i = 1; i < 12; i++) {
      expect(abundance(28)).not.toStrictEqual(
        ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT
      );
    }
  });

  it('conflict abundance', () => {
    expect.assertions(2);

    expect(abundance(110)).not.toStrictEqual(
      ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT
    );
    expect(abundance(18632)).not.toStrictEqual(
      ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT
    );
  });
});
