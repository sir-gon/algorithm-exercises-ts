/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

const __RADIX__ = 10;

function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  for (const v of inputLines) {
    result += Number.parseInt(v, __RADIX__);
  }

  return result;
}

export default { solveMeFirst };
export { solveMeFirst };
