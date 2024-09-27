/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler002.md]]
 */

export function fiboEvenSum(n: bigint): bigint {
  let fibo1 = 1n;
  let fibo2 = 1n;
  let total = 0n;

  while (fibo1 + fibo2 < n) {
    const fibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo;

    if (fibo % 2n === 0n) {
      total += fibo;
    }
  }

  return total;
}

export function euler002(n: number): bigint {
  return fiboEvenSum(BigInt(n));
}

export default { euler002 };
