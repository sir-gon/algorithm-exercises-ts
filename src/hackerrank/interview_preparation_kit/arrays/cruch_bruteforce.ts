/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/arrays/crush_optimized-solution-notes.md]]
 */

import { logger as console } from '../../../logger';

export function arrayManipulation(n: number, queries: number[][]): number {
  const LENGTH = n + 1;
  const SURROGATE_VALUE = 0;
  const result = Array(LENGTH).fill(SURROGATE_VALUE);
  let maximum = 0;

  queries.forEach((query) => {
    const [a_start, b_end, k_value] = query;
    console.debug(`start -> ${result}`);

    for (let i = a_start; i <= b_end; i++) {
      result[i] += k_value;
      console.debug(`result -> ${result}`);
    }
  });

  result.forEach((value) => {
    maximum = Math.max(value, maximum);
  });

  return maximum;
}
