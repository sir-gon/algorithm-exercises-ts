import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import CountTriplets from './count_triplets_1_optmized';

import SMALL_TEST_CASES from './count_triplets_1.small.testcases.json';
import BIG_TEST_CASES from './count_triplets_1.big.testcases.json';

describe('count_triplets_1 (optimized)', () => {
  it('countTriplets small test cases', () => {
    expect.assertions(4);

    SMALL_TEST_CASES.forEach((test) => {
      const answer = CountTriplets.countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input.toString()}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });

  it('countTriplets big test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const answer = CountTriplets.countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input.toString()}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
