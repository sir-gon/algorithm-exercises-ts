/**
 * 10001st prime
 *
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

import { logger as console } from '../logger';
import { isPrime } from './helpers/index';

function problem0007(_top: number): number {
  const primes = [];

  let i = 0;
  let j = 2;
  while (primes.length < _top) {
    i += 1;
    if (isPrime(j)) {
      primes.push(j);

      console.debug(`Prime found ${j} put in position: ${primes.length}`);
    }

    j = 2 * i + 1;
  }

  console.log(`primes count: ${primes.length}`);

  const answer = primes[primes.length - 1];

  const cycles = i;
  console.log(`${_top} prime number is: ${answer} in ${cycles} cycles`);

  return answer;
}

export default problem0007;
export { problem0007 };
