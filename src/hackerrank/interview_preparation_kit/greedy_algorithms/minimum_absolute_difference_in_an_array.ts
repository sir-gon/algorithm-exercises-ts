/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/minimum-absolute-difference-in-an-array.md]]
 */

export function minimumAbsoluteDifference(arr: number[]): number {
  const sorted_nums = arr
    .map((x: number): number => x)
    .sort((a: number, b: number): number => b - a);

  let result = Math.abs(sorted_nums[sorted_nums.length - 1] - sorted_nums[0]);

  for (let i = 0; i < sorted_nums.length - 1; i++) {
    const a_value = sorted_nums[i];
    const b_value = sorted_nums[i + 1];

    const diff = Math.abs(a_value - b_value);

    result = Math.min(result, diff);
  }

  return result;
}

export default { minimumAbsoluteDifference };
