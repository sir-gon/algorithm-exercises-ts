import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger';

import { problem0021 } from './problem0021';

describe('problem 0021', () => {
  it('problem 0021 solution found', () => {
    expect.assertions(1);

    const solutionFound = '31626';
    const inputStart = 1;
    const inputLimit = 10000;

    const calculated = problem0021(inputStart, inputLimit);

    console.log(`PROBLEM 0021 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
