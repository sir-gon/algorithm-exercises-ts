/**
 * @link Problem definition [[docs/hackerrank/warmup/simpleArraySum.md]]
 */

function simpleArraySum(ar: number[]): number {
  let acum = 0;

  for (const num of ar) {
    acum += num;
  }

  return acum;
}

export default { simpleArraySum };
export { simpleArraySum };
