import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { maxCircle } from './friend_circle_queries';
import TEST_CASES from './friend_circle_queries.testcases.json';

describe('friend_circle_queries', () => {
  it('maxCircle test cases', () => {
    expect.assertions(5);

    for (const test of TEST_CASES) {
      const answer = maxCircle(test.arr);

      console.debug(
        `maxCircle(${test.arr.toString()}) solution found: ${answer.toString()}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(4);
  });
});
