/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler003.md]]
 */

import { BigIntMath } from '../lib/BigIntMath';

function primeFactor(n: bigint): bigint {
  if (n < 2) {
    throw new Error('n must be greater than 2');
  }

  let divisor: bigint = n;
  let maxPrimeFactor: bigint = divisor;

  let i = 2n;

  while (i <= BigIntMath.sqrt(divisor)) {
    if (divisor % i === 0n) {
      divisor /= i;
      maxPrimeFactor = divisor;
    } else {
      i += 1n;
    }
  }

  return maxPrimeFactor;
}

function euler003(n: number): bigint {
  return primeFactor(BigInt(n));
}

export default { euler003 };
export { euler003 };
