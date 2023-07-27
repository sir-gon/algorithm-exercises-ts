import { logger as console } from '../logger';

import { problem0016 } from './problem0016';

describe('problem 0016', () => {
  it('problem 0016 solution found', () => {
    expect.assertions(1);

    const base = '2';
    const exponent = 1000;
    const solutionFound = '1366';

    const calculated = problem0016(base, exponent);

    console.log(`PROBLEM 0016 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
