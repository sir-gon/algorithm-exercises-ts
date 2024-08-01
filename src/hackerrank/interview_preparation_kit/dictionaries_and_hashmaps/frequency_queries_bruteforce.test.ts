import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { freqQuery } from './frequency_queries_bruteforce';
import SMALL_TEST_CASES from './frequency_queries_testcases.json';

describe('frequency_queries_bruteforce', () => {
  it('freqQuery test cases', () => {
    expect.assertions(4);

    SMALL_TEST_CASES.forEach((value) => {
      const answer = freqQuery(value.input);

      console.debug(`freqQuery(${value.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(value.expected);
    });
  });

  it('freqQuery border case', () => {
    expect.assertions(1);

    expect(() => {
      freqQuery([[4, 1]]);
    }).toThrow('Invalid operation');
  });
});
