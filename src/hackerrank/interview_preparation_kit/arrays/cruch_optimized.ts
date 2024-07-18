/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 */

export function arrayManipulation(n: number, queries: number[][]): number {
  // why adding 2?
  //   first slot to adjust 1-based index and
  //   last slot for storing accum_sum result
  const LENGTH = n + 2;
  const INITIAL_VALUE = 0;
  const result = Array(LENGTH).fill(INITIAL_VALUE);
  let maximum = 0;

  queries.forEach((query) => {
    const [a_start, b_end, k_value] = query;

    result[a_start] += k_value;
    result[b_end + 1] -= k_value;
  });

  let accum_sum = 0;

  result.forEach((value) => {
    accum_sum += value;
    maximum = Math.max(maximum, accum_sum);
  });

  return maximum;
}
