import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import frequencyQueries from './frequency_queries_optimized';
import TEST_CASES from './frequency_queries_testcases.json';

describe('frequency_queries_optimized', () => {
  it('freqQuery test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((value) => {
      const answer = frequencyQueries.freqQuery(value.input);

      console.debug(
        `freqQuery(${value.input.toString()}) solution found: ${answer.toString()}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });

  it('freqQuery border case', () => {
    expect.assertions(1);

    expect(() => {
      frequencyQueries.freqQuery([[4, 1]]);
    }).toThrow('Invalid operation');
  });
});
