/**
 * Solve Me First
 *
 * https://www.hackerrank.com/challenges/solve-me-first
 *
 * Difficulty: #easy
 * Category: #warmup
 *
 * Complete the function solveMeFirst to compute the sum of two integers.
 *
 * # Example
 * a = 7
 * b = 3
 *
 * Return 10.
 *
 * # Function Description
 *
 * Complete the solveMeFirst function in the editor below.
 * solveMeFirst has the following parameters:
 *
 * * int a: the first value
 * * int b: the second value
 *
 * # Constraints
 *
 * 1 <= a, b <= 1000
 *
 * # Sample Input
 *
 * ```
 * a = 2
 * b = 3
 * ```
 *
 * # Sample Output
 *
 * ```
 * 5
 * ```
 *
 * # Explanation
 * ```
 * 2 + 3 = 5
 * ```
 */

'use strict';

export function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  inputLines.forEach((v) => {
    result += parseInt(v);
  });

  // console.log(result);
  return result;
}
