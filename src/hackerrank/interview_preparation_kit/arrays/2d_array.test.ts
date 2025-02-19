import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import twoDarray from './2d_array';
import TEST_CASES from './2d_array.testcases_test.json';

describe('arrays: 2d Array hourglassSum', () => {
  it('hourglassSum Test Cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = twoDarray.hourglassSum(test.input);

      console.debug(
        `gethourGlass(${test.input.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
