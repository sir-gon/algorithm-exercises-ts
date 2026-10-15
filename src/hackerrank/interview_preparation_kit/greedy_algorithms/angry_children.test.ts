import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { maxMin } from './angry_children';

import TEST_CASES from './angry_children.testcases.json';

describe('angry_children', () => {
  it('maxMin test cases', () => {
    expect.assertions(5);

    for (const test of TEST_CASES) {
      const answer = maxMin(test.k, test.arr);

      console.debug(
        `maxMin(${test.k}, ${test.arr.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(4);
  });

  it('maxMin edge cases', () => {
    expect.assertions(1);

    expect(() => {
      const k = 0;
      const arr: number[] = [];

      maxMin(k, arr);
    }).toThrow(
      'Invalid input: k must be greater than 0 and arr must not be empty'
    );
  });
});
