import { logger as console } from '../logger';

import { abundance, sum, ___DIVISORS_ABUNDANCE___ } from './helpers';

export function problem0023(_underLimit: number, _superLimit: number): number {
  // const allNumsList = [];
  const abundantNumberList = [];

  // Produce a list of abundant numbers below limit
  for (let i = _underLimit; i <= _superLimit; i++) {
    const abundancyOf = abundance(i);

    if (abundancyOf === ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT) {
      abundantNumberList.push(i);
    }
  }

  console.debug(
    `abundant nums list: ${abundantNumberList.length} => ${abundantNumberList}`
  );

  let sumsAbundantNums = [];

  // Produce a list of sums of pair of abundant numbers below limit
  for (let i = 0; i < abundantNumberList.length; i++) {
    for (
      let j = 0;
      abundantNumberList[i] + abundantNumberList[j] <= _superLimit &&
      j < abundantNumberList.length;
      j++
    ) {
      sumsAbundantNums.push(abundantNumberList[i] + abundantNumberList[j]);
    }
  }

  // filter duplicates
  sumsAbundantNums = [...new Set(sumsAbundantNums)];

  console.debug(
    `sumsAbundantNums size: ${sumsAbundantNums.length}. result => ${sumsAbundantNums}`
  );

  // All numbers below limit that not present in list of sums of pair of abundant numbers
  const found: number[] = [];

  for (let i = 1; i < _superLimit; i++) {
    if (!sumsAbundantNums.includes(i)) {
      found.push(i);
    }
  }

  console.debug(`found size: ${found.length}, found => ${found}`);

  const result = sum(found);

  console.log(`result ${result}`);

  return result;
}

export default { problem0023 };
