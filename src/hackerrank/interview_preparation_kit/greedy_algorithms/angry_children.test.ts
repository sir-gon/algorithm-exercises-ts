import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { maxMin } from './angry_children';

import TEST_CASES from './angry_children.testcases.json';

describe('angry_children', () => {
  it('angry_children test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = maxMin(test.k, test.arr);

      console.debug(`maxMin(${test.k}, ${test.arr}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
