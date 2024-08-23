import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { rotLeft, rotLeftOne } from './ctci_array_left_rotation';

import ROT_LEFT_ONE_TEST_CASES from './ctci_array_left_rotation.testcases.json';

describe('ctci_array_left_rotation', () => {
  it('rotLeftOne Test Cases', () => {
    expect.assertions(5);

    ROT_LEFT_ONE_TEST_CASES.forEach((test) => {
      const input = test.numbers;
      const answer = rotLeftOne(input);

      console.debug(
        `rotLeftOne(${test.numbers.toString()}) solution found: ${answer.toString()}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });

  it('rotLeft Test cases', () => {
    expect.assertions(1);

    const ROT_LEFT_TEST_CASES = [
      { numbers: [1, 2, 3, 4, 5], d_rotations: 4, expected: [5, 1, 2, 3, 4] }
    ];

    ROT_LEFT_TEST_CASES.forEach((value) => {
      const answer = rotLeft(value.numbers, value.d_rotations);

      console.debug(
        `rotLeft(${value.numbers.toString()}) solution found: ${answer.toString()}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
