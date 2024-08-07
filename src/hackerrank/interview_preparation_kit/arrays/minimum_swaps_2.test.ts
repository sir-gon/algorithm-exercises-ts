import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { minimumSwaps } from './minimum_swaps_2';

const TEST_CASES = [
  { title: 'Sample input 0', input: [4, 3, 1, 2], expected: 3 },
  { title: 'Sample input 1', input: [2, 3, 4, 1, 5], expected: 3 },
  { title: 'Sample input 2', input: [1, 3, 5, 2, 4, 6, 7], expected: 3 }
];

describe('minimum swaps 2', () => {
  it('minimumSwaps', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = minimumSwaps(test.input);

      console.debug(`minimumSwaps(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
