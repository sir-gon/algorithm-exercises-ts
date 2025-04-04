/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

function whatFlavorsBruteforceCompute(cost: number[], money: number): number[] {
  const RADIX = 10;

  for (const key of Object.keys(cost)) {
    const i: number = parseInt(key, RADIX);
    const x: number = cost[i];

    const budget = money - x;

    for (let j = i + 1; j < cost.length; j++) {
      if (budget - cost[j] === 0) {
        console.log(`${i + 1} ${j + 1}`);
        return [i + 1, j + 1];
      }
    }
  }

  return [];
}

function whatFlavors(cost: number[], money: number): void {
  console.log(whatFlavorsBruteforceCompute(cost, money)?.join(' '));
}

export default { whatFlavorsBruteforceCompute, whatFlavors };
export { whatFlavorsBruteforceCompute, whatFlavors };
