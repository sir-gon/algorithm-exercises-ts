/**
 * Longest Collatz sequence
 *
 * https://projecteuler.net/problem=14
 *
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all
 * starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

import logger from './logger';

import { problem0014 } from './problem0014';

describe('problem 0014', () => {
  it('problem 0014 solution found', () => {
    expect.assertions(1);

    const solutionFound = 837799;
    const top = 1000000;

    const calculated = problem0014(solutionFound, top);

    logger.info(`PROBLEM 0014 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0014 border case bottom is negative', () => {
    expect.assertions(1);

    const bottom = -1;

    expect(() => {
      problem0014(bottom);
    }).toThrow('bottom must be a positive integer');
  });

  it('problem 0014 border case bottom higher than top', () => {
    expect.assertions(1);

    const top = 0;
    const bottom = 10;

    expect(() => {
      problem0014(bottom, top);
    }).toThrow('top must be and integer, higher than bottom');
  });

  it('problem 0014 default values', () => {
    expect.assertions(1);

    const calculated = problem0014();

    logger.info(`PROBLEM 0014 solution found: ${calculated}`);

    expect(calculated).toBe(9);
  });
});
