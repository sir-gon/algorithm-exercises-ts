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

  for (const apple of apples) {
    if (a + apple >= s && a + apple <= t) {
      cApples += 1;
    }
  }

  for (const orange of oranges) {
    if (b + orange >= s && b + orange <= t) {
      cOranges += 1;
    }
  }

  const result: number[] = [];
  result.push(cApples);
  result.push(cOranges);

  return result.join('\n');
}

export default { countApplesAndOranges };
