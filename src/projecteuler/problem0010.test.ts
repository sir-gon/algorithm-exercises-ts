import { logger as console } from '../logger';

import { problem0010 } from './problem0010';

describe('problem 0010', () => {
  it('problem 0010 small case', () => {
    expect.assertions(1);

    const solutionFound = 17;
    const bottom = 1;
    const top = 10;

    const calculated = problem0010(bottom, top);

    console.log(`PROBLEM 0010 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
