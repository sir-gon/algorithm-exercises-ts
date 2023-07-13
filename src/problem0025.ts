/**
 * 1000-digit Fibonacci Number
 *
 * https://projecteuler.net/problem=25
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 *
 * Fn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1
 *
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 * F5 = 5
 * F6 = 8
 * F7 = 13
 * F8 = 21
 * F9 = 34
 * F10 = 55
 * F11 = 89
 * F12 = 144
 *
 * The 12th term, F12 is the first term to contain three digits.
 *
 * What is the index of the first term in the Fibonacci
 * sequence to contain 1000 digits?
 */

import logger from './logger';
import { bigNum, bigSum, bigNumToString } from './helpers';

export function problem0025(_top: number): number {
  let last1 = bigNum('1');
  let last2 = bigNum('1');
  let counter = 2;
  let fibo = '0';

  do {
    fibo = bigSum(bigNumToString(last1), bigNumToString(last2));
    logger.debug(`Fibonacci (${counter}) = ${fibo}`);

    // next keys:
    last2 = last1;
    last1 = bigNum(fibo);
    counter += 1;
  } while (fibo.length < _top);

  logger.info(`RESULT ${counter} => ${fibo}`);
  return counter;
}

export default { problem0025 };
