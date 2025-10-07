import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { rotLeft } from './ctci_array_left_rotation';

import ROT_LEFT_TEST_CASES from './ctci_array_left_rotation.testcases.json';

interface RotLeftTestCase {
  title: string;
  input: number[];
  d_rotations: number;
  expected: number[];
}

const TEST_CASES: RotLeftTestCase[] = ROT_LEFT_TEST_CASES as RotLeftTestCase[];

describe('ctci_array_left_rotation', () => {
  it('rotLeft Test cases', () => {
    expect.assertions(9);

    for (const test of TEST_CASES) {
      const answer = rotLeft(test.input, Number(test.d_rotations));

      console.debug(
        `rotLeft(${test.input.toString()}) solution found: ${test.expected.toString()}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(8);
  });
});
