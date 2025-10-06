import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { twoStrings } from './two_strings';

import TEST_CASES from './two_strings.testcases.json';

describe('two_strings', () => {
  it('twoStrings test cases', () => {
    expect.assertions(10);

    let totalTestsCount = 0;

    for (const testCase of TEST_CASES) {
      for (const test of testCase.test) {
        const answer = twoStrings(test.s1, test.s2);

        console.debug(
          `twoStrings(${test.s1}, ${test.s2}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });
});
