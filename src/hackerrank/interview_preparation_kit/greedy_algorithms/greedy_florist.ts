/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/greedy-florist.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/greedy-florist-solution-notes.md]]
 */

function getMinimumCost(k: number, c: number[]): number {
  const flowers = c
    .map((x: number): number => x)
    .sort((a: number, b: number): number => b - a);

  let total = 0;

  let i = 0;
  for (const flowerCost of flowers) {
    const position = Math.floor(i / k);

    total += (position + 1) * flowerCost;
    i += 1;
  }

  return total;
}

export default { getMinimumCost };
export { getMinimumCost };
