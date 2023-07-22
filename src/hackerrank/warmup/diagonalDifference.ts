/**
 * Diagonal Difference
 *
 * https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
 *
 * Difficulty: #easy
 * Category: #warmup
 *
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 *
 * ```
 * 1 2 3
 * 4 5 6
 * 9 8 9
 * ```
 * The left-to-right diagonal = 1 + 5 + 9 = 15.
 * The right to left diagonal = 3 + 5 + 9 = 17.
 * Their absolute difference is |15 - 17| = 2.
 *
 * # Function description
 * Complete the diagonalDifference function in the editor below.
 * diagonalDifference takes the following parameter.
 * *
 *
 * # Return
 * int: the absolute diagonal difference
 *
 * # Input Format
 *
 * diagonalDifference takes the following parameter:
 *
 * * int arr[n][m]: an array of integers
 *
 * # Return
 * * int: the absolute diagonal difference
 *
 * # Input Format
 *
 * The first line contains a single integer, n, the number of
 * rows and columns in the square matrix arr.
 * Each of the next n lines describes a row, arr[i], and consists of
 * space-separated integers arr[i][j].
 *
 * # Constraints
 * -100 <= arr[i][j] <= 100
 *
 * # Output Format
 * Return the absolute difference between the sums of the matrix's
 * two diagonals as a single integer.
 *
 * # Sample Input
 * ```
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * ```
 * Sample Output
 * ```
 * 15
 * ```
 *
 * # Explanation
 * The primary diagonal is:
 * ```
 * 11
 *    5
 *      -12
 * ```
 *
 * Sum across the primary diagonal: 11 + 5 - 12 = 4
 * The secondary diagonal is:
 * ```
 *      4
 *    5
 * 10
 * ```
 * Sum across the secondary diagonal: 4 + 5 + 10 = 19
 * Difference: |4 - 19| = 15
 *
 * *Note*: |x| is the
 * [absolute value](https://www.mathsisfun.com/numbers/absolute-value.html)
 * of x
 */

import { logger as console } from '../../logger';

export function diagonalDifference(arr: number[][]): number {
  let diag1 = 0;
  const last = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag1 += arr[i][j];
      }
    }
  }
  console.log(`diag1 ${String(diag1)}`);

  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag2 += arr[last - i][j];
      }
    }
  }
  console.log(`diag2 ${String(diag2)}`);

  return Math.abs(diag1 - diag2);
}

export default { diagonalDifference };
