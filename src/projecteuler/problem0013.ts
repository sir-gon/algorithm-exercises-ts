/**
 * Large sum
 *
 * https://projecteuler.net/problem=13
 *
 * Work out the first ten digits of the sum of the following
 * one-hundred 50-digit numbers.
 *
 * See: src/data/problem0013.json
 */

import { logger as console } from '../logger';
import { bigSumMany } from './helpers';

function problem0013(arrayOfNumbers: string[], _firtsDigits: number): number {
  const radix = 10;

  const sum = bigSumMany(arrayOfNumbers);

  console.debug(`Sum: ${sum}`);

  const first = parseInt(sum.slice(0, _firtsDigits), radix);

  console.log(`First ${_firtsDigits} digits of huge sume are ${first}`);

  return first;
}

export default problem0013;
export { problem0013 };
