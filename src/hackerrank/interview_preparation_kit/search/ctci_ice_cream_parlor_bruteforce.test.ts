import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import {
  whatFlavors,
  what_flavors_bruteforce_compute
} from './ctci_ice_cream_parlor_bruteforce';
import TEST_CASES from './ctci_ice_cream_parlor.testcases.json';
import TEST_CASES_BORDER_CASES from './ctci_ice_cream_parlor.border_testcases.json';

describe('recursive_digit_sum', () => {
  it('stepPerms test cases', () => {
    expect.assertions(10);

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const answer = what_flavors_bruteforce_compute(test.costs, test.money);

        console.debug(
          `${testSet.title} stepPerms(${test.costs}, ${test.money}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
        expect(whatFlavors(test.costs, test.money)).toBeUndefined();
      });
    });
  });

  it('stepPerms border test cases', () => {
    expect.assertions(2);

    TEST_CASES_BORDER_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        expect(
          what_flavors_bruteforce_compute(test.costs, test.money)
        ).toStrictEqual(test.expected);
        expect(whatFlavors(test.costs, test.money)).toBeUndefined();
      });
    });
  });

  it('stepPerms test caller function', () => {
    expect.assertions(1);

    const cost: number[] = [];
    const money = 100;

    expect(whatFlavors(cost, money)).toBeUndefined();
  });
});
