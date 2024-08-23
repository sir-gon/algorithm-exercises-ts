/**
 * @link Problem definition [[docs/projecteuler/problem0021.md]]
 */

// ////////////////////////////////////////////////////////////////////////////
// Result found: 31626
//
// Amicable numbers found:
// amicableNumbers [
//      '220',  '284',
//      '1184', '1210',
//      '2620', '2924',
//      '5020', '5564',
//      '6232', '6368'
//    ]
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger';

import { properDivisors, bigSumMany } from './helpers';

export function problem0021(_start: number, _limit: number): string {
  const properDivisorsOf: number[] = [];

  for (let i = _start; i <= _limit; i++) {
    properDivisorsOf[i] = properDivisors(i).reduce((x, y) => x + y, 0);
  }

  const amicableNumbers: string[] = [];

  Object.entries(properDivisorsOf).forEach((value, index) => {
    if (
      value &&
      properDivisorsOf[index] &&
      properDivisorsOf[properDivisorsOf[index]] &&
      index !== properDivisorsOf[index] &&
      index === properDivisorsOf[properDivisorsOf[index]]
    ) {
      amicableNumbers.push(`${index}`);
    }
  });

  console.log(`result: ${properDivisorsOf.toString()}`);
  console.log(`amicableNumbers: ${amicableNumbers.toString()}`);

  return bigSumMany(amicableNumbers);
}

export default { problem0021 };
