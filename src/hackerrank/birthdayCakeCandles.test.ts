import logger from '../logger';

import { birthdayCakeCandles } from './birthdayCakeCandles';

describe('birthdayCakeCandles', () => {
  it('miniMaxSum border case', () => {
    expect.assertions(1);

    expect(() => {
      birthdayCakeCandles([]);
    }).toThrow('Empty input');
  });

  it('birthdayCakeCandles Test case 0', () => {
    const tests = [
      { input: [3, 2, 1, 3], answer: 2 },
      { input: [1, 2, 3, 3], answer: 2 }
    ];
    expect.assertions(tests.length);

    for (const test of tests) {
      const calculated = birthdayCakeCandles(test.input);
      logger.info(
        `birthdayCakeCandles(${test.input}) Test case 0: ${calculated}`
      );
      expect(calculated).toBe(test.answer);
    }
  });
});
