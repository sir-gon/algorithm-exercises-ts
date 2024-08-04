import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { getMinimumCost } from './greedy_florist';

import TEST_CASES from './greedy_florist.testcases.json';

describe('greedy_florist', () => {
  it('greedy_florist test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = getMinimumCost(test.k, test.contests);

      console.debug(
        `getMinimumCost(${test.k}, ${test.contests}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
