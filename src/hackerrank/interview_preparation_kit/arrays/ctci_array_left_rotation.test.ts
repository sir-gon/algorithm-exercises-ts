import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import arrayLeftRotation from './ctci_array_left_rotation';

import ROT_LEFT_TEST_CASES from './ctci_array_left_rotation.testcases.json';

describe('ctci_array_left_rotation', () => {
  it('rotLeft Test cases', () => {
    expect.assertions(8);

    ROT_LEFT_TEST_CASES.forEach((test) => {
      const numbers = test.input as number[];

      const answer = arrayLeftRotation.rotLeft(
        numbers,
        Number(test.d_rotations)
      );

      console.debug(
        `rotLeft(${numbers.toString()}) solution found: ${test.expected.toString()}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
