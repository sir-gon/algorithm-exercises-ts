/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

export function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  inputLines.forEach((v) => {
    result += parseInt(v);
  });

  return result;
}
