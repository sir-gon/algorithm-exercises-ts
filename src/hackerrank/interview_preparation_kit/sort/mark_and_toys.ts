/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/sort/mark-and-toys.md]]
 */

function maximumToys(prices: number[], k: number): number {
  const group = [...prices];
  group.sort((a: number, b: number) => a - b);

  let budget = k;
  const shoppingCart: number[] = [];

  while (group.length > 0 && budget >= 0) {
    const currentItem = group.shift();
    budget -= currentItem!;
    if (budget >= 0) {
      shoppingCart.push(currentItem!);
    }
  }

  return shoppingCart.length;
}

export default { maximumToys };
export { maximumToys };
