import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { hourglassSum } from './2d_array';
import TEST_CASES from './2d_array.testcases_test.json';

describe('arrays: 2d Array hourglassSum', () => {
  it('hourglassSum Test Cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = hourglassSum(test.input);

      console.debug(
        `gethourGlass(${test.input.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
