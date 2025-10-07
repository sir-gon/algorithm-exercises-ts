import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import luckBalance from './luck-balance';

import TEST_CASES from './luck-balance.testcases.json';

describe('luck-balance', () => {
  it('luckBalance test cases', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const answer = luckBalance.luckBalance(test.k, test.contests);

      console.debug(
        `luckBalance(${test.k}, ${test.contests.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
