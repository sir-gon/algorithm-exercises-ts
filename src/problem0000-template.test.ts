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

import { problem0000template } from './problem0000-template';

describe('problem 00XX', () => {
  it('problem 00XX solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0000template();

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
