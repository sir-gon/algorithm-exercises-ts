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

import logger from '../logger';

import { problem0005Simple } from './problem0005-simple';

describe('problem 0005 simple', () => {
  it('problem 0005 simple solution found by BRUTE FORCE BASIC', async () => {
    expect.assertions(1);

    const solutionFound = 2520;
    const bottom = 1;
    const top = 10;
    const startFrom = 0;

    const calculated = problem0005Simple(bottom, top, startFrom);

    logger.info(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
