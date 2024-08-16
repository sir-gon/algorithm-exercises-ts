/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

export function whatFlavorsCompute(cost: number[], money: number): number[] {
  let ans1;
  let ans2;

  const CACHE: Record<number, number> = {};

  for (const price of cost) {
    CACHE[price] = Number.isInteger(CACHE[price]) ? CACHE[price] + 1 : 1;
  }

  for (const i in cost) {
    const v1 = cost[i];
    const v2 = money - v1;

    if (v1 != v2) {
      if (CACHE?.[v1] && CACHE?.[v2]) {
        ans1 = v1;
        ans2 = v2;
        break;
      }
    } else {
      // count of the element must be greater than 1 if they are same
      if (CACHE?.[v1] && CACHE[v1] > 1) {
        ans1 = v1;
        ans2 = v1;
        break;
      }
    }
  }

  const result: Set<number> = new Set();
  for (const i in cost) {
    const x: number = parseInt(i);

    if (cost[x] == ans1 || cost[x] == ans2) {
      result.add(x + 1);
    }
  }

  return Array.from(result);
}

export function whatFlavors(cost: number[], money: number): void {
  console.log(whatFlavorsCompute(cost, money)?.join(' '));
}

export default { whatFlavorsCompute, whatFlavors };
