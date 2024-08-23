import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

import { aVeryBigSum } from './aVeryBigSum';

describe('aVeryBigSum', () => {
  it('aVeryBigSum Test case 0', () => {
    expect.assertions(1);

    const input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    const solutionFound = 5000000015;

    const calculated = aVeryBigSum(input);

    console.log(
      `aVeryBigSum(${input.toString()}) solution found: ${calculated.toString()}`
    );

    expect(calculated).toStrictEqual(solutionFound);
  });
});
