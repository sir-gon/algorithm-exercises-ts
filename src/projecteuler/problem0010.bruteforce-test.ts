/* istanbul ignore file */

import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger';

import { problem0010 } from './problem0010';

describe('problem 0010', () => {
  it('problem 0010 solution found BRUTE FORCE', () => {
    expect.assertions(1);

    const solutionFound = 142913828922;
    const bottom = 1;
    const top = 2000000;

    const calculated = problem0010(bottom, top);

    console.log(`PROBLEM 0010 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
