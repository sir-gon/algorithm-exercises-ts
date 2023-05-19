/**
 * Smallest multiple
 *
 * https://projecteuler.net/problem=5
 *
 *
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/// ////////////////////////////////////////////////////////////////////////////
// NOTE: I think a better way to solve problem 0005.
// If I got prime numbers in beetwen [1,20], can I test them as
// prime factors, testing a combinatorial exponents that satisfies
// the condition that the number found is divisible by all
// the numbers in beetwen [1,20],
// Instead, this solution is brute force.

/// ////////////////////////////////////////////////////////////////////////////
// Solution found after a LONG TIME running this routine:
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger';
import { primeFactors } from './helpers/index';

function _increase(_element: number, _group: Map<number, number>) {
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
) {
  const element = _group.get(_element);

  if (element) {
    _group.set(_element, count > element ? count : element);
  } else {
    _group.set(_element, count);
  }

  return _group;
}

function _primeFactorsCollection(_factors: number[]): Map<number, number> {
  let collection = new Map<number, number>();

  _factors.forEach((factor) => {
    collection = _increase(factor, collection);
  });

  return collection;
}

function problem0005(_bottom: number, _top: number) {
  let minimumPrimeFactors = new Map<number, number>();
  let result = 1;
  let cycles = 0;

  for (let i = _bottom; i <= _top; i++) {
    const primes = primeFactors(i);
    cycles += primes.cycles;

    const factors = _primeFactorsCollection(primes.factors);
    cycles += primes.factors.length;

    logger.debug('Prime Factors of %d list    => %o', i, primes);
    logger.debug('Prime Factors of %d grouped => %o', i, factors);

    for (const [factor, quantity] of factors) {
      cycles += 1;
      minimumPrimeFactors = _replaceMaximum(
        factor,
        quantity,
        minimumPrimeFactors
      );
    }

    logger.debug('Prime Factors of %d grouped => %o', i, minimumPrimeFactors);
  }

  for (const [factor, quantity] of minimumPrimeFactors) {
    cycles += 1;
    result *= factor ** quantity;
  }

  logger.info('Problem 0005: %d in %d cycles', result, cycles);
  return result;
}

export default problem0005;
export { problem0005 };
