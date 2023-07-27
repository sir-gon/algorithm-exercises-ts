export function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): string {
  let cApples = 0;
  let cOranges = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      cApples += 1;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      cOranges += 1;
    }
  }

  const result: number[] = [];
  result.push(cApples);
  result.push(cOranges);

  return result.join('\n');
}

export default { countApplesAndOranges };
