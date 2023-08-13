/**
 * @link Problem definition [[docs/hackerrank/warmup/simpleArraySum.md]]
 */

'use strict';

export function simpleArraySum(ar: number[]): number {
  let acum = 0;

  for (const num of ar) {
    acum += num;
  }

  return acum;
}
