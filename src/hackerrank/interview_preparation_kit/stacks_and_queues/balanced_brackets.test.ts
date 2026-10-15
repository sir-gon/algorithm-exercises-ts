import { describe, expect, it } from '@jest/globals';

import { isBalanced } from './balanced_brackets';
import TEST_CASES from './balanced_brackets.testcases.json';

const __YES__ = 'YES';
const __NO__ = 'NO';

describe('isBalanced', () => {
  it('test cases', () => {
    expect.assertions(10);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const result = isBalanced(test.input) === __YES__;

        expect(result).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });

  it('wrong case', () => {
    expect.assertions(1);

    const result = isBalanced(')]}{[(');

    expect(result).toStrictEqual(__NO__);
  });
});
