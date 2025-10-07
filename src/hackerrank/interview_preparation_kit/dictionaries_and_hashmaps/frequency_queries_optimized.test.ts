import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { freqQuery } from './frequency_queries_optimized';
import TEST_CASES from './frequency_queries_testcases.json';

describe('frequency_queries_optimized', () => {
  it('freqQuery test cases', () => {
    expect.assertions(5);

    for (const value of TEST_CASES) {
      const answer = freqQuery(value.input);

      console.debug(
        `freqQuery(${value.input.toString()}) solution found: ${answer.toString()}`
      );

      expect(answer).toStrictEqual(value.expected);
    }

    expect(TEST_CASES).toHaveLength(4);
  });

  it('freqQuery border case', () => {
    expect.assertions(1);

    expect(() => {
      freqQuery([[4, 1]]);
    }).toThrow('Invalid operation');
  });
});
