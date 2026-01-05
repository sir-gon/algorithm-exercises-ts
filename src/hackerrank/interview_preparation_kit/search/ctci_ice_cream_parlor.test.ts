import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { whatFlavors, whatFlavorsCompute } from './ctci_ice_cream_parlor';
import TEST_CASES from './ctci_ice_cream_parlor.testcases.json';
import TEST_CASES_BORDER_CASES from './ctci_ice_cream_parlor.border_testcases.json';

describe('ctci_ice_cream_parlor', () => {
  it('whatFlavorsCompute test cases', () => {
    expect.assertions(7);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const answer = whatFlavorsCompute(test.costs, test.money);

        console.debug(
          `whatFlavorsCompute(${test.costs.toString()}, ${test.money}) solution found: ${answer?.toString()}`
        );

        expect(answer).toStrictEqual(test.expected);

        whatFlavors(test.costs, test.money);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(5);
  });

  it('whatFlavors border test cases', () => {
    expect.assertions(3);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES_BORDER_CASES) {
      for (const test of testSet.tests) {
        expect(whatFlavorsCompute(test.costs, test.money)).toStrictEqual(
          test.expected
        );

        whatFlavors(test.costs, test.money);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES_BORDER_CASES).toHaveLength(1);
    expect(totalTestsCount).toBe(1);
  });

  it('whatFlavors test caller function', () => {
    expect.assertions(1);

    const cost: number[] = [];
    const money = 100;

    expect(() => whatFlavors(cost, money)).not.toThrow();
  });
});
