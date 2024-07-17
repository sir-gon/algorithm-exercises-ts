/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/minimum_swaps_2.md]]
 */

export function minimumSwaps(arr: number[]): number {
  const indexed_group = arr.map((x) => x - 1);
  let swaps = 0;
  let index = 0;
  const size = indexed_group.length;

  while (index < size) {
    if (indexed_group[index] == index) {
      index += 1;
    } else {
      const temp = indexed_group[index];
      indexed_group[index] = indexed_group[temp];
      indexed_group[temp] = temp;
      swaps += 1;
    }
  }

  return swaps;
}

export default { minimumSwaps };
