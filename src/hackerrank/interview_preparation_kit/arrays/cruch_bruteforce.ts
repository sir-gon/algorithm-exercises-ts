/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/arrays/crush_optimized-solution-notes.md]]
 */

import { logger as console } from '../../../logger';

function arrayManipulation(n: number, queries: number[][]): number {
  const LENGTH = n + 1;
  const SURROGATE_VALUE = 0;
  const result: number[] = new Array<number>(LENGTH).fill(SURROGATE_VALUE);
  let maximum = 0;

  queries.forEach((query) => {
    const [aStart, bEnd, kValue] = query;
    console.debug(`start -> ${result.toString()}`);

    for (let i = aStart; i <= bEnd; i++) {
      result[i] += kValue;
      console.debug(`result -> ${result.toString()}`);
    }
  });

  result.forEach((value) => {
    maximum = Math.max(value, maximum);
  });

  return maximum;
}

export default { arrayManipulation };
export { arrayManipulation };
