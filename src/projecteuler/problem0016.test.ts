import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger';

import { problem0016 } from './problem0016';
import { problem0016alt } from './problem0016-alt';

describe('problem 0016', () => {
  it('problem 0016 solution found', () => {
    expect.assertions(2);

    const base = '2';
    const exponent = 1000;
    const solutionFound = '1366';

    let calculated: string;

    calculated = problem0016(base, exponent);
    console.log(`PROBLEM 0016 solution found: ${calculated}`);
    expect(calculated).toBe(solutionFound);

    calculated = problem0016alt(base, exponent);
    console.log(`PROBLEM 0016 alternative solution found: ${calculated}`);
    expect(calculated).toBe(solutionFound);
  });
});
