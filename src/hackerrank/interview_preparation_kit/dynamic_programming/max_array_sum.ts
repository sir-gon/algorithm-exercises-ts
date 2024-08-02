/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum-solution-notes.md]]
 */

const bigIntMax = (...args: bigint[]): bigint =>
  args.reduce((m, e) => (e > m ? e : m), BigInt(0));

export function maxSubsetSum(arr: number[]): number {
  const arrCopy: bigint[] = arr.map((x: number): bigint => BigInt(x));

  if (arrCopy.length == 0) {
    return 0;
  }

  const total = arrCopy.length;

  if (total == 1) {
    return Number(arrCopy[0]);
  }

  let t_max = bigIntMax(arrCopy[0], arrCopy[1]);
  arrCopy[1] = t_max;

  for (let i = 2; i < total; i++) {
    t_max = bigIntMax(arrCopy[i - 2] + arrCopy[i], t_max);
    t_max = bigIntMax(arrCopy[i], t_max);
    arrCopy[i] = t_max;
  }

  return Number(t_max);
}

export default { maxSubsetSum };
