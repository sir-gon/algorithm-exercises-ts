import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

import { euler002 } from './euler002';

describe('euler002', () => {
  it('euler002 Test case 0', () => {
    expect.assertions(2);

    const tests = [
      { n: 10, answer: 10 },
      { n: 100, answer: 44 }
    ];

    tests.forEach((test) => {
      const calculated = euler002(test.n);
      console.log(`euler002(${test.n}) solution found: ${test.answer}`);
      expect(calculated).toStrictEqual(test.answer);
    });
  });
});
