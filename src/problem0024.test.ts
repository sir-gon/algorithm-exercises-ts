/**
 *
 * <TITLE>
 *
 * https://projecteuler.net/problem=XX
 *
 * <DESCRIPTION>
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger';

import { problem0024 } from './problem0024';

describe('problem 0024', () => {
  it('problem 0024 solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0024();

    logger.info(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
