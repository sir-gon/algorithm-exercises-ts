/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler001.md]]
 */

// Function to return gcd of a and b
export function gcd(a: number, b: number): number {
  if (a == 0) return b;
  return gcd(b % a, a);
}

export function sum_ap(n: number, d: number): number {
  // Number of terms
  n = Math.floor(n / d);

  return Math.floor((n * (1 + n) * d) / 2);
}

// Function to find the sum of all multiples of a and b below n
export function euler001(a: number, b: number, n: number): number {
  // Since, we need the sum of multiples less than N
  n -= 1;
  const lcm = Math.floor((a * b) / gcd(a, b));

  return sum_ap(n, a) + sum_ap(n, b) - sum_ap(n, lcm);
}
