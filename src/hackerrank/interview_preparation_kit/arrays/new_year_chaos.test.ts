import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import nyc from './new_year_chaos';

import TEST_CASES from './new_year_chaos.testcases.json';

describe('new_year_chaos', () => {
  it('minimumBribes Test Cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((value) => {
      const answer = nyc.minimumBribesText(value.input);
      nyc.minimumBribes(value.input);

      console.debug(
        `minimumBribesTransform(${value.input.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
