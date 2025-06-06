/**
 * @link Problem definition [[docs/hackerrank/implementation/dayOfProgrammer.md]]
 */

import { logger as console } from '../../logger';
import { MonthNumbers, daysInMonthNumber } from '../../constants';

const zeroPad = (num: number, places: number): string =>
  String(num).padStart(places, '0');

function dayOfProgrammer(year: number): string {
  const dayToSearch = 256;
  let leap: number;

  const copyOfdaysInMonthNumber: MonthNumbers = {};

  for (let i = 1; i <= 12; i++) {
    copyOfdaysInMonthNumber[i] = daysInMonthNumber[i];
  }

  if (year >= 1700 && year < 1917) {
    leap = year % 4 === 0 ? 1 : 0;
  } else {
    leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;
  }

  copyOfdaysInMonthNumber[2] += leap;

  // transition year
  if (year === 1918) {
    const adjustDaysIn1918 = 13;
    copyOfdaysInMonthNumber[2] -= adjustDaysIn1918;
  }

  let accumDays = 0;

  let month = 0;
  do {
    month += 1;

    accumDays += copyOfdaysInMonthNumber[month];

    console.debug(`accumDays: ${accumDays}`);
  } while (month <= 12 && accumDays <= dayToSearch);

  accumDays -= copyOfdaysInMonthNumber[month];
  const restDays = dayToSearch - accumDays;

  const result = `${zeroPad(restDays, 2)}.${zeroPad(month, 2)}.${year}`;

  return result;
}

export default { dayOfProgrammer };
export { dayOfProgrammer };
