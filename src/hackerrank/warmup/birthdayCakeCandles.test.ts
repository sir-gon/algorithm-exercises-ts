import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

import { birthdayCakeCandles } from './birthdayCakeCandles';

describe('birthdayCakeCandles', () => {
  it('birthdayCakeCandles border case', () => {
    expect.assertions(1);

    expect(() => {
      birthdayCakeCandles([]);
    }).toThrow('Empty input');
  });

  it('birthdayCakeCandles Test case 0', () => {
    expect.assertions(3);

    const tests = [
      { input: [3, 2, 1, 3], answer: 2 },
      { input: [1, 2, 3, 3], answer: 2 }
    ];

    for (const test of tests) {
      const calculated = birthdayCakeCandles(test.input);
      console.log(
        `birthdayCakeCandles(${test.input.toString()}) Test case 0: ${calculated}`
      );

      expect(calculated).toBe(test.answer);
    }

    expect(tests).toHaveLength(2);
  });
});
