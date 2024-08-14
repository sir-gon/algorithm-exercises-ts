/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

export function what_flavors_bruteforce_compute(
  cost: number[],
  money: number
): number[] | null {
  for (const _i in cost) {
    const i: number = parseInt(_i);
    const x: number = cost[i];

    const budget = money - x;

    for (let j = i + 1; j < cost.length; j++) {
      if (budget - cost[j] == 0) {
        console.log(`${i + 1} ${j + 1}`);
        return [i + 1, j + 1];
      }
    }
  }

  return null;
}

export function whatFlavors(cost: number[], money: number): void {
  console.log(what_flavors_bruteforce_compute(cost, money)?.join(' '));
}

export default { what_flavors_bruteforce_compute, whatFlavors };
