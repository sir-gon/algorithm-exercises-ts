/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler003.md]]
 */

import { BigIntMath } from '../lib/BigIntMath';

export function primeFactor(n: bigint): bigint {
  if (n < 2) {
    throw new Error('n must be greater than 2');
  }

  let divisor: bigint = n;
  let maxPrimeFactor: bigint = divisor;
  let mpfInitialized = false;

  let i = 2n;

  while (i <= BigIntMath.sqrt(divisor)) {
    if (divisor % i === 0n) {
      divisor /= i;
      maxPrimeFactor = divisor;
      mpfInitialized = true;
    } else {
      i += 1n;
    }
  }

  if (!mpfInitialized) {
    return n;
  }

  return maxPrimeFactor;
}

export function euler003(n: number): bigint {
  return primeFactor(BigInt(n));
}

export default { euler003 };
