import { logger as console } from '../logger';

import { problem0005Simple } from './problem0005-simple';

import { describe, expect, it } from '@jest/globals';
describe('problem 0005 simple', () => {
  it('problem 0005 simple solution found by BRUTE FORCE FULL', async () => {
    expect.assertions(1);

    const solutionFound = 232792560;
    const bottom = 1;
    const top = 20;
    const startFrom = solutionFound - 1000;

    const calculated = problem0005Simple(bottom, top, startFrom);

    console.log(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
