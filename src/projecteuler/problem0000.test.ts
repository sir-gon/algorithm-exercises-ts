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

import logger from '../logger';

import { problem0000 } from './problem0000';

describe('problem 00XX', () => {
  it('problem 00XX solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0000();

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
