/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

const __RADIX__ = 10;

export function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  inputLines.forEach((v) => {
    result += parseInt(v, __RADIX__);
  });

  return result;
}

export default { solveMeFirst };
