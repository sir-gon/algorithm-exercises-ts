import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { stepPerms, StepPerms } from './ctci_recursive_staircase';
import TEST_CASES from './ctci_recursive_staircase.testcases.json';
import TEST_CASES_GENERALIZED from './ctci_recursive_staircase_generalized.testcases.json';

describe('ctci_recursive_staircase', () => {
  it('stepPerms test cases', () => {
    expect.assertions(9);

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const answer = stepPerms(test.n_steps);

        console.debug(`stepPerms(${test.n_steps}) solution found: ${answer}`);

        expect(answer).toStrictEqual(test.expected);
      }
    }

    expect(TEST_CASES).toHaveLength(3);
  });

  it('step_perms_comput_with_cache test cases', () => {
    expect.assertions(4);

    const TOP_LIMIT = 10 ** 10 + 7;

    for (const testSet of TEST_CASES_GENERALIZED) {
      for (const test of testSet.tests) {
        const stairs = new StepPerms(TOP_LIMIT, test.steps_limit);

        const answer = stairs.step_perms_comput_with_cache(test.n_steps);

        console.debug(
          `step_perms_comput_with_cache(${test.n_steps}, ${test.steps_limit}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      }
    }

    expect(TEST_CASES_GENERALIZED).toHaveLength(3);
  });
});
