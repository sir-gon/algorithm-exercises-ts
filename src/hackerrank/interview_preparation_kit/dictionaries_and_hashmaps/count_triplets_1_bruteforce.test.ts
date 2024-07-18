import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { countTriplets } from './count_triplets_1_bruteforce';

const SMALL_TEST_CASES = [
  {
    title: 'Sample Test Case 0',
    input: [1, 2, 2, 4],
    r: 2,
    expected: 2
  },
  {
    title: 'Sample Test Case 1',
    input: [1, 3, 9, 9, 27, 81],
    r: 3,
    expected: 6
  },
  {
    title: 'Sample Test Case 1 (unsorted)',
    input: [9, 3, 1, 81, 9, 27],
    r: 3,
    expected: 1
  },
  {
    title: 'Sample Test Case 12',
    input: [1, 5, 5, 25, 125],
    r: 5,
    expected: 4
  }
];

describe('count_triplets_1', () => {
  it('countTriplets test cases', () => {
    expect.assertions(4);

    SMALL_TEST_CASES.forEach((test) => {
      const answer = countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
