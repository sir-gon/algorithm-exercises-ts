/**
 * Counting Sundays
 *
 * https://projecteuler.net/problem=19
 *
 * You are given the following information, but you may prefer
 * to do some research for yourself.
 *
 * *  1 Jan 1900 was a Monday.
 * *  Thirty days has September,
 *    April, June and November.
 *    All the accumulatedRemainder have thirty-one,
 *    Saving February alone,
 *    Which has twenty-eight, rain or shine.
 *    And on leap years, twenty-nine.
 * *  A leap year occurs on any year evenly divisible by 4,
 *    but not on a century unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the
 * twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

import { logger as console } from '../logger';

import { daysInMonth, __SUNDAY__ } from './constants';

export function problem0019(
  _dayOfWeek = __SUNDAY__,
  _sinceYear = 1901,
  _untilYear = 2000
): number {
  let resultCount = 0;
  let accumulatedRemainder = 0;
  let excess = 0;

  for (let y = 1900; y <= _untilYear; y++) {
    const leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 1 : 0;
    daysInMonth['FEBRUARY'] = 28 + leap;

    Object.entries(daysInMonth).forEach(([month, days], index) => {
      console.debug(`Month(${index}): ${month} | days: ${days}`);

      accumulatedRemainder += days % 7;
      if (accumulatedRemainder % 7 === _dayOfWeek) {
        if (y <= _sinceYear) {
          excess += 1;
        }
        resultCount += 1;
      }
    });
  }

  console.log(`result ${String(resultCount)}`);

  return resultCount - excess;
}

export default { problem0019 };
