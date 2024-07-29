import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { maxSubsetSum } from './max_array_sum';

const TEST_CASES = [
  {
    title: 'Sample Test case 0',
    input: [3, 7, 4, 6, 5],
    expected: 13
  },
  {
    title: 'Sample Test case 1',
    input: [2, 1, 5, 8, 4],
    expected: 11
  },
  {
    title: 'Sample Test case 2',
    input: [3, 5, -7, 8, 10],
    expected: 15
  }
];

describe('max_array_sum', () => {
  it('maxSubsetSum test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = maxSubsetSum(test.input);

      console.debug(`maxSubsetSum(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });

  it('maxSubsetSum edge case zero', () => {
    expect.assertions(1);

    const input: number[] = [];
    const expected: number = 0;

    const answer = maxSubsetSum(input);

    console.debug(`maxSubsetSum(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });

  it('maxSubsetSum edge case one', () => {
    expect.assertions(1);

    const input: number[] = [1];
    const expected: number = 1;

    const answer = maxSubsetSum(input);

    console.debug(`maxSubsetSum(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });
});
