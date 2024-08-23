import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { luckBalance } from './luck-balance';

import TEST_CASES from './luck-balance.testcases.json';

describe('luck-balance', () => {
  it('luckBalance test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = luckBalance(test.k, test.contests);

      console.debug(
        `luckBalance(${test.k}, ${test.contests.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
