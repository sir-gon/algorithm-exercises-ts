import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { superDigit } from './recursive_digit_sum';
import TEST_CASES from './recursive_digit_sum.bruteforce.testcases.json';

describe('recursive_digit_sum bruteforce', () => {
  it('superDigit test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = superDigit(test.n, test.k);

      console.debug(`superDigit(${test.n}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
