/**
 * @link Problem definition [[docs/projecteuler/problem0005.md]]
 */
/// ////////////////////////////////////////////////////////////////////////////
// Using prime factors approach.
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger';
import { primeFactors } from './helpers';

function _increase(
  _element: number,
  _group: Map<number, number>
): Map<number, number> {
  const element = _group.get(_element);

  if (element) {
    _group.set(_element, element + 1);
  } else {
    _group.set(_element, 1);
  }

  return _group;
}

function _replaceMaximum(
  _element: number,
  count: number,
  _group: Map<number, number>
): Map<number, number> {
  const element = _group.get(_element);

  if (element) {
    _group.set(_element, Math.max(count, element));
  } else {
    _group.set(_element, count);
  }

  return _group;
}

function _primeFactorsCollection(_factors: number[]): Map<number, number> {
  let collection = new Map<number, number>();

  for (const factor of _factors) {
    collection = _increase(factor, collection);
  }

  return collection;
}

function problem0005(_bottom: number, _top: number): number {
  let minimumPrimeFactors = new Map<number, number>();
  let result = 1;
  let cycles = 0;

  for (let i = _bottom; i <= _top; i++) {
    const primes = primeFactors(i);
    cycles += primes.cycles;

    const factors = _primeFactorsCollection(primes.factors);
    cycles += primes.factors.length;

    console.debug('Prime Factors of %d list    => %o', i, primes);
    console.debug('Prime Factors of %d grouped => %o', i, factors);

    for (const [factor, quantity] of factors) {
      cycles += 1;
      minimumPrimeFactors = _replaceMaximum(
        factor,
        quantity,
        minimumPrimeFactors
      );
    }

    console.debug('Prime Factors of %d grouped => %o', i, minimumPrimeFactors);
  }

  for (const [factor, quantity] of minimumPrimeFactors) {
    cycles += 1;
    result *= factor ** quantity;
  }

  console.log('Problem 0005: %d in %d cycles', result, cycles);
  return result;
}

export default problem0005;
export { problem0005 };
