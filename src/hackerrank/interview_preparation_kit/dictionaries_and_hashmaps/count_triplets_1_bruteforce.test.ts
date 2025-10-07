import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import CountTriplets from './count_triplets_1_bruteforce';

import SMALL_TEST_CASES from './count_triplets_1.small.testcases.json';

describe('count_triplets_1', () => {
  it('countTriplets test cases', () => {
    expect.assertions(5);

    for (const test of SMALL_TEST_CASES) {
      const answer = CountTriplets.countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input.toString()}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(SMALL_TEST_CASES).toHaveLength(4);
  });
});
