import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { stepPerms } from './ctci_recursive_staircase';
import TEST_CASES from './ctci_recursive_staircase.testcases.json';

describe('ctci_recursive_staircase', () => {
  it('stepPerms test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const answer = stepPerms(test.input);

        console.debug(`stepPerms(${test.input}) solution found: ${answer}`);

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
