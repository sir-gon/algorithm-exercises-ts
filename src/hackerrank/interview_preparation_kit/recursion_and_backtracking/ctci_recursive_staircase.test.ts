import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import {
  stepPerms,
  step_perms_comput_with_cache
} from './ctci_recursive_staircase';
import TEST_CASES from './ctci_recursive_staircase.testcases.json';
import TEST_CASES_GENERALIZED from './ctci_recursive_staircase_generalized.testcases.json';

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

  it('step_perms_comput_with_cache test cases', () => {
    expect.assertions(3);

    TEST_CASES_GENERALIZED.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const initial_cache: Record<number, number> = {};
        const answer = step_perms_comput_with_cache(
          test.input,
          initial_cache,
          test.limit
        );

        console.debug(
          `step_perms_comput_with_cache(${test.input}, ${initial_cache}, ${test.limit}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
