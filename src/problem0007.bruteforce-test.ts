/* istanbul ignore file */
/**
 * 10001st prime
 *
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

import logger from './logger.js';

import { problem0007 } from './problem0007.js';

describe('problem 0007 BRUTEFORCE', () => {
  it('problem 0007 BRUTEFORCE large', () => {
    expect.assertions(1);

    const solutionFound = 104743;
    const top = 10001;

    const calculated = problem0007(top);

    logger.info(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
