import { describe, expect, it } from '@jest/globals';

import { isBalanced } from './balanced_brackets';
import TEST_CASES from './balanced_brackets.testcases.json';

describe('isBalanced', () => {
  it('isBalanced test cases', () => {
    expect.assertions(10);

    const __YES__ = 'YES';

    let totalTestsCount = 0;

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const result = isBalanced(test.input) === __YES__;

        expect(result).toStrictEqual(test.expected);

        totalTestsCount += 1;
      });
    });

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });
});
