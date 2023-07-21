/**
 * Between Two Sets
 *
 * https://www.hackerrank.com/challenges/between-two-sets
 *
 * Difficulty: #easy
 * Category: #implementation
 *
 * There will be two arrays of integers. Determine all integers that satisfy
 * the following two conditions:
 *
 * 1. The elements of the first array are all factors of the integer being
 * considered
 * 2. The integer being considered is a factor of all elements of the second
 * array
 * These numbers are referred to as being between the two arrays. Determine
 * how many such numbers exist.
 *
 * # Example
 * a = [2, 6]
 * b = [24, 36]
 *
 * There are two numbers between the arrays: 6 and 12.
 * 6%2 = 0, 6%6 = 0, 24%6 = 0 and 36%6 = 0 for the first value.
 * 12%2 = 0, 12%6 = 0, and 24%12 = 0, 36%12 = 0 for the second value. Return 2.
 *
 * # Function Description
 * Complete the getTotalX function in the editor below. It should return the
 * number of integers that are betwen the sets.
 *
 * getTotalX has the following parameter(s):
 *
 * * int a[n]: an array of integers
 * * int b[m]: an array of integers
 *
 * # Returns
 * * int: the number of integers that are between the sets
 *
 * # Input Format
 * The first line contains two space-separated integers, n and m, the number
 * of elements in arrays a and b.
 * The second line contains n distinct space-separated integers a[i] where
 * 0 <= i < n.
 * The third line contains m distinct space-separated integers b[j] where
 * 0 <= j < m.
 *
 * # Constraionts
 * * 1 <= n, m < 10
 * * 1 <= a[i] <= 100
 * * 1 <= b[j] <= 100
 *
 * # Sample Input
 * ```
 * 2 3
 * 2 4
 * 12 32 96
 * ```
 *
 * # Sample Output
 * ```
 * 3
 * ```
 * # Explanation
 * 2 and 4 divide evenly into 4, 8, 12 and 16.
 * 4, 8 and 16 divide evenly into 16, 32, 96.
 * 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
 */

// import { logger as console } from '../../logger';

export function isFactor(n: number, group: number[]): boolean {
  let result = true;
  let i = 0;

  if (group.length === 0) return false;

  do {
    if (n % group[i] !== 0) {
      result = false;
    }

    i++;
  } while (i < group.length && result);

  return result;
}

export function factorOf(n: number, group: number[]): boolean {
  let result = true;
  let i = 0;

  if (group.length === 0) return false;

  do {
    if (group[i] % n !== 0) {
      result = false;
    }

    i++;
  } while (i < group.length && result);

  return result;
}

export function getTotalX(a: number[], b: number[]): number {
  let max = 0;
  for (const j of b) {
    // console.log('b:', j);
    if (j > max) max = j;
  }

  const result = [];

  for (let i = 1; i <= max; i++) {
    if (isFactor(i, a) && factorOf(i, b)) {
      result.push(i);
    }
  }

  return result.length;
}

export default { getTotalX };
