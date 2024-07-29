/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum-solution-notes.md]]
 */

export function maxSubsetSum(arr: number[]): number {
  const arrCopy = [...arr];

  if (arrCopy.length == 0) {
    return 0;
  }

  const total = arrCopy.length;

  if (total == 1) {
    return arrCopy[0];
  }

  let t_max = Math.max(arrCopy[0], arrCopy[1]);
  arrCopy[1] = t_max;

  for (let i = 2; i < total; i++) {
    t_max = Math.max(arr[i - 2] + arr[i], t_max);
    t_max = Math.max(arr[i], t_max);
    arr[i] = t_max;
  }

  return t_max;
}

export default { maxSubsetSum };
