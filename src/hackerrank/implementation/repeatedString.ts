/**
 * Repeated String
 *
 * https://www.hackerrank.com/challenges/repeated-string
 *
 * Difficulty: #easy
 * Category: #implementation
 *
 * There is a string, s, of lowercase English letters that is repeated
 * infinitely many times. Given an integer, , find and print the number
 * of letter a's in the first  letters of the infinite string.
 *
 * # Example
 * s = 'abcac'
 * n = 10
 *
 * The substring we consider is abcacabcac, the first 10 characters of the
 * infinite string. There are 4 occurrences of a in the substring.
 *
 * # Function Description
 * Complete the repeatedString function in the editor below.
 *
 * repeatedString has the following parameter(s):
 *
 * * s: a string to repeat
 * * n: the number of characters to consider
 *
 * # Returns
 * * int: the frequency of _a_ in the substring
 *
 * # Input Format
 *
 * The first line contains a single string, s.
 * The second line contains an integer, n.
 *
 * # Constraints
 *
 * 1 <= |s| <= 100
 * 1 <= n <= 10<sup>12</sup>
 * For 25% of the test cases, n <= 10<sup>6</sup>.
 *
 * Sample Input 0
 * ```
 * aba
 * 10
 * ```
 *
 * Sample Output 0
 * ```
 * 7
 * ```
 *
 * # Explanation 0
 * The first n = 10 letters of the infinite string are abaabaabaa.
 * Because there are 7 a's, we return 7.
 *
 * # Sample Input 1
 * ```
 * a
 * 1000000000000
 * ```
 *
 * # Sample Output 1
 *
 * ```
 * 1000000000000
 * ````
 *
 * # Explanation 1
 *
 * Because all of the first n = 1000000000000 letters of the infinite string
 * are a, we return 1000000000000.
 */

import logger from '../../logger';

export function countAs(word: string): number {
  let result = 0;

  const chars = word.split('');

  chars.forEach((char) => {
    if (char === 'a') {
      result += 1;
    }
  });

  return result;
}

export function repeatedString(s: string, n: number): number {
  let result = 0;

  const blockSize = s.length;

  const countBlocks = Math.floor(n / blockSize);
  const restSize = Math.floor(n % blockSize);

  logger.debug(`countBlocks: ${countBlocks} + rest: ${restSize}`);

  result = countAs(s) * countBlocks + countAs(s.substr(0, restSize));
  return result;
}

export default { countAs };
