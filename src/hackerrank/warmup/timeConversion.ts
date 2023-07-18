/**
 * Time Conversion
 *
 * https://www.hackerrank.com/challenges/time-conversion
 *
 * Difficulty: #easy
 * Category: #warmup
 *
 * Given a time in
 * 12-[hour AM/PM format](https://en.wikipedia.org/wiki/12-hour_clock),
 * convert it to military (24-hour) time.
 *
 * Note:
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * # Example
 * * s = '12:01:00PM'
 *   Return '12:01:00'
 * * s = '12:01:00AM'
 *   Return '00:01:00'
 *
 * # Function Description
 * Complete the timeConversion function in the editor below.
 * It should return a new string representing the input time in 24 hour format
 * timeConversion has the following parameter(s):
 * * string s: a time in 12 hour format
 *
 * # Returns
 * * string: the time in 24 hour format
 *
 * # Input Format
 * A single string s that represents a time in 12-hour clock format
 * (i.e.: hh_mm_ssAM or hh:mm:ssPM).
 *
 * Constraints
 * * All input times are valid
 *
 * Sample Input 0
 * ```
 * 07:05:45PM
 * ```
 * Sample Output 0
 * ```
 * 19:05:45
 * ```
 */

export function timeConversion(s: string): string {
  let meridian = s.substring(s.length - 2, s.length);
  meridian = meridian.toLowerCase();

  const timeStr = s.substring(0, s.length - 2);
  const time = timeStr.split(':');
  let hour = parseInt(time[0], 10);

  if (hour >= 12) {
    hour = 0;
  }

  if (meridian === 'pm') {
    hour += 12;
  }

  time[0] = hour.toString().padStart(2, '0');

  const conversion = time.join(':');

  return conversion;
}

export default { timeConversion };
