import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { minimumSwaps } from './minimum_swaps_2';

import TEST_CASES from './minimum_swaps_2.testcases.json';

describe('minimum swaps 2', () => {
  it('minimumSwaps', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = minimumSwaps(test.input);

      console.debug(
        `minimumSwaps(${test.input.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
