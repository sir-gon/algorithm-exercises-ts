import { logger as console } from '../logger';
import { problem0020 } from './problem0020';

describe('problem 0020', () => {
  it('problem 0020 solution small found', () => {
    expect.assertions(1);

    const solutionFound = '27';
    const inputLimit = 10;

    const calculated = problem0020(inputLimit);

    console.log(`PROBLEM 0020 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0020 full solution found', () => {
    expect.assertions(1);

    const solutionFound = '648';
    const inputLimit = 100;

    const calculated = problem0020(inputLimit);

    console.log(`PROBLEM 0020 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
