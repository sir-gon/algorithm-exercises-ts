/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

const __RADIX__ = 10;

function whatFlavorsCompute(cost: number[], money: number): number[] {
  let ans1: number | null = null;
  let ans2: number | null = null;

  const CACHE: Record<number, number> = {};

  for (const price of cost) {
    CACHE[price] = Number.isInteger(CACHE[price]) ? CACHE[price] + 1 : 1;
  }

  for (const key of Object.keys(cost)) {
    const i = parseInt(key, __RADIX__);

    const v1 = cost[i];
    const v2 = money - v1;

    if (v1 !== v2 && CACHE?.[v1] && CACHE?.[v2]) {
      ans1 = v1;
      ans2 = v2;
      break;
    }

    if (v1 === v2 && CACHE?.[v1] && CACHE[v1] > 1) {
      ans1 = v1;
      ans2 = v1;
      break;
    }
  }

  const result = new Set<number>();
  for (const key of Object.keys(cost)) {
    const x = parseInt(key, __RADIX__);

    if (cost[x] === ans1 || cost[x] === ans2) {
      result.add(x + 1);
    }
  }

  return Array.from(result);
}

function whatFlavors(cost: number[], money: number): void {
  console.log(whatFlavorsCompute(cost, money)?.join(' '));
}

export default { whatFlavorsCompute, whatFlavors };
export { whatFlavorsCompute, whatFlavors };
