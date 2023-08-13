import { logger as console } from '../logger';

import { problem0013 } from './problem0013';
import { problem0013alt } from './problem0013-alt';
import inputNums from './data/problem0013.json';

describe('problem 0013', () => {
  it('problem 0013 solution found', () => {
    expect.assertions(1);

    const solutionFound = 5537376230;
    const firtsDigits = 10;

    const calculated = problem0013(inputNums, firtsDigits);

    console.log(`PROBLEM 0013 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0013 alt solution found', () => {
    expect.assertions(1);

    const solutionFound = 5537376230;
    const firtsDigits = 10;

    const calculated = problem0013alt(inputNums, firtsDigits);

    console.log(`PROBLEM 0013 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
