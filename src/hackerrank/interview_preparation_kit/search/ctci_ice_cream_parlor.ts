/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

const __RADIX__ = 10;

function whatFlavorsCompute(cost: number[], money: number): number[] | null {
  const cache: Record<number, number> = {};

  for (const [key, price] of Object.entries(cost)) {
    const i = parseInt(key, __RADIX__);
    const diff = money - price;

    if (Number.isInteger(cache?.[diff])) {
      return [i + 1, cache[diff] + 1].sort((a, b) => a - b);
    }

    cache[price] = i;
  }

  return [];
}

function whatFlavors(cost: number[], money: number): void {
  console.log(whatFlavorsCompute(cost, money)?.join(' '));
}

export default { whatFlavorsCompute, whatFlavors };
export { whatFlavorsCompute, whatFlavors };
