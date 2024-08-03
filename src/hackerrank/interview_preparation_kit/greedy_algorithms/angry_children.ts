/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/angry-children.md]]
 */

export function maxMin(k: number, arr: number[]): number {
  // const copyArr: bigint[] = arr.map((x: number): bigint => BigInt(x));
  // const sortedlist = copyArr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  const sortedlist = arr.sort((a: number, b: number) => a - b);

  let result = sortedlist[sortedlist.length - 1] - sortedlist[0];

  for (let i = 0; i < sortedlist.length - k + 1; i++) {
    const tmin = sortedlist[i];
    const tmax = sortedlist[i + k - 1];
    result = Math.min(result, tmax - tmin);
  }

  return result;
}
