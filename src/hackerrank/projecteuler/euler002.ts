/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler001.md]]
 */

export function fibo_even_sum(n: number): number {
  let total = 0;
  let fibo = 0;
  let fibo1 = 1;
  let fibo2 = 1;

  while (fibo1 + fibo2 < n) {
    fibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo;

    if (fibo % 2 == 0) {
      total += fibo;
    }
  }

  return total;
}

// Function to find the sum of all multiples of a and b below n
export function euler002(n: number): number {
  return fibo_even_sum(n);
}
