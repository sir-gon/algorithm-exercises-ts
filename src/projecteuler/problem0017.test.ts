import { logger as console } from '../logger';

import { problem0017 } from './problem0017';

describe('problem 0017', () => {
  it('problem 0017 solution found', () => {
    expect.assertions(1);

    const init = 1;
    const last = 1000;
    const solutionFound = 21124;

    const calculated = problem0017(init, last);

    console.log(`PROBLEM 0017 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
