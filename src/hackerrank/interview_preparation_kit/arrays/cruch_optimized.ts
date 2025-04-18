/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 */

function arrayManipulation(n: number, queries: number[][]): number {
  // why adding 2?
  //   first slot to adjust 1-based index and
  //   last slot for storing accumSum result
  const LENGTH = n + 2;
  const INITIAL_VALUE = 0;
  const result = Array(LENGTH).fill(INITIAL_VALUE);
  let maximum = 0;

  queries.forEach((query) => {
    const [aStart, bEnd, kValue] = query;

    result[aStart] += kValue;
    result[bEnd + 1] -= kValue;
  });

  let accumSum = 0;

  result.forEach((value) => {
    accumSum += value;
    maximum = Math.max(maximum, accumSum);
  });

  return maximum;
}

export default { arrayManipulation };
export { arrayManipulation };
