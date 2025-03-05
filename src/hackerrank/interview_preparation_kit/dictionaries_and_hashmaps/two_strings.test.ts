import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import twoStrings from './two_strings';

import TEST_CASES from './two_strings.testcases.json';

describe('two_strings', () => {
  it('twoStrings test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testCase) => {
      testCase?.test.forEach((test) => {
        const answer = twoStrings.twoStrings(test.s1, test.s2);

        console.debug(
          `twoStrings(${test.s1}, ${test.s2}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
