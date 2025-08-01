import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

import { miniMaxSum } from './miniMaxSum';

describe('miniMaxSum', () => {
  it('miniMaxSum test case 0', () => {
    expect.assertions(1);

    expect(() => {
      miniMaxSum([]);
    }).toThrow('Empty input');
  });

  it('miniMaxSum test case 1', () => {
    expect.assertions(3);

    const tests = [
      { input: [1, 2, 3, 4, 5], answer: '10 14' },
      { input: [5, 4, 3, 2, 1], answer: '10 14' }
    ];

    for (const test of tests) {
      const solutionFound = miniMaxSum(test.input);
      console.log(
        `miniMaxSum(${test.input.toString()}) solution found: ${solutionFound}`
      );

      expect(solutionFound).toBe(test.answer);
    }

    expect(tests).toHaveLength(2);
  });
});
