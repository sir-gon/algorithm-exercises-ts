/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

'use strict';

export function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  inputLines.forEach((v) => {
    result += parseInt(v);
  });

  return result;
}
