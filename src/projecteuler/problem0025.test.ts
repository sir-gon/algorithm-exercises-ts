/**
 * 1000-digit Fibonacci Number
 *
 * https://projecteuler.net/problem=25
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 *
 * Fn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1
 *
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 * F5 = 5
 * F6 = 8
 * F7 = 13
 * F8 = 21
 * F9 = 34
 * F10 = 55
 * F11 = 89
 * F12 = 144
 *
 * The 12th term, F12 is the first term to contain three digits.
 *
 * What is the index of the first term in the Fibonacci
 * sequence to contain 1000 digits?
 */

import logger from '../logger';

import { problem0025 } from './problem0025';

describe('problem 0025', () => {
  it('problem 0025 small case', () => {
    expect.assertions(1);

    const solutionFound = 12; // 12 => 144

    const calculated = problem0025(3);

    logger.info(`PROBLEM 0025 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0025 solution found', () => {
    expect.assertions(1);

    const solutionFound = 4782; // 12 => 144

    const calculated = problem0025(1000);

    logger.info(`PROBLEM 0025 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
