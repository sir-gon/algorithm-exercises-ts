import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { minimumBribes, minimumBribesText } from './new_year_chaos';

import TEST_CASES from './new_year_chaos.testcases.json';

describe('new_year_chaos', () => {
  it('minimumBribes Test Cases', () => {
    expect.assertions(6);

    TEST_CASES.forEach((value) => {
      const answer = minimumBribesText(value.input);
      minimumBribes(value.input);

      console.debug(
        `minimumBribesTransform(${value.input.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    });

    expect(TEST_CASES).toHaveLength(5);
  });
});
