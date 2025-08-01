import { describe, expect, it } from '@jest/globals';

import { alternatingCharacters } from './alternating_characters';
import TEST_CASES from './alternating_characters.testcases.json';

describe('alternatingCharacters', () => {
  it('alternatingCharacters test cases', () => {
    expect.assertions(11);

    let totalTestsCount = 0;

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const result = alternatingCharacters(test.input);

        expect(result).toStrictEqual(test.expected);

        totalTestsCount += 1;
      });
    });

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(9);
  });
});
