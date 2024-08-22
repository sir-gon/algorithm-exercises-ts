/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/minimum-absolute-difference-in-an-array.md]]
 */

export function minimumAbsoluteDifference(arr: number[]): number {
  const sortedNums = arr
    .map((x: number): number => x)
    .sort((a: number, b: number): number => b - a);

  let result = Math.abs(sortedNums[sortedNums.length - 1] - sortedNums[0]);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    const aValue = sortedNums[i];
    const bValue = sortedNums[i + 1];

    const diff = Math.abs(aValue - bValue);

    result = Math.min(result, diff);
  }

  return result;
}

export default { minimumAbsoluteDifference };
