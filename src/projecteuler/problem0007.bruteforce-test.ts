/* istanbul ignore file */
/**
 * @link Problem definition [[docs/projecteuler/problem0007.md]]
 */
import { logger as console } from '../logger';

import { problem0007 } from './problem0007';

import { describe, expect, it } from '@jest/globals';
describe('problem 0007 BRUTEFORCE', () => {
  it('problem 0007 BRUTEFORCE large', () => {
    expect.assertions(1);

    const solutionFound = 104743;
    const top = 10001;

    const calculated = problem0007(top);

    console.log(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
