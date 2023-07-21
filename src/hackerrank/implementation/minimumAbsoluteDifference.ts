/**
 * Minimum Absolute Difference in an Array
 *
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array
 *
 * The absolute difference is the positive difference between two values
 * a and b, is written |a - b| or |b - a| and they are equal. If a = 3 and
 * b = 2, |3 - 2| = |2 - 3| = 1. Given an array of integers, find the minimum
 * absolute difference between any two elements in the array.
 *
 * # Example.
 * arr = [-2, 2, 4]
 *
 * There are 3 pairs of numbers: [-2, 2], [-2, 4] and [2, 4]. The absolute
 * differences for these pairs are |(-2)| - 2| = 4, |(-2) - 4| and |2 - 4| = 2.
 * The minimum absolute difference is 2.
 *
 * # Function Description
 *
 * Complete the minimumAbsoluteDifference function in the editor below.
 * It should return an integer that represents the minimum absolute difference
 * between any pair of elements.
 *
 * minimumAbsoluteDifference has the following parameter(s):
 *
 * * int arr[n]: an array of integers
 *
 * # Returns
 *
 * * int: the minimum absolute difference found
 * Input Format
 *
 * The first line contains a single integer n, the size of arr.
 * The second line contains n space-separated integers, arr[i].
 *
 * # Constraints
 * 2 <= n < 10<sup>5</sup>
 * -10<sup>9</sup> <= arr[i] <= 10<sup>9</sup>
 *
 * Sample Input 0
 * ```
 * 3
 * 3 -7 0
 * ```
 *
 * # Sample Output 0
 * ```
 * 3
 * ```
 *
 * # Explanation 0
 *
 * The first line of input is the number of array elements. The array,
 * arr = [3, -7, 0] There are three pairs to test: (3, -7), (3, 0), and
 * (-7, 0). The absolute differences are:
 *
 * |3 - -7| => 10
 * |3 - 0| => 3
 * |-7 0| => 7
 *
 * Remember that the order of values in the subtraction does not influence
 * the result. The smallest of these absolute differences is 3.
 *
 * # Sample Input 1
 * ```
 * 10
 * -59 -36 -13 1 -53 -92 -2 -96 -54 75
 * ```
 *
 * # Sample Output 1
 * ```
 * 1
 * ```
 *
 * # Explanation 1
 *
 * The smallest absolute difference is |-54 - -53| = 1.
 *
 * # Sample Input 2
 * ```
 * 5
 * 1 -3 71 68 17
 * ```
 *
 * # Sample Output 2
 * ```
 * 3
 * ```
 *
 * # Explanation 2
 *
 * The minimum absolute difference is |71 - 68| = 3.
 */

import { logger as console } from '../../logger';

export function minimumAbsoluteDifference(arr: number[]): number {
  if (arr.length == 0) {
    throw new Error('Empty input');
  }

  const sortedNums = arr.splice(0).sort();
  console.log(`sortedNums: ${sortedNums}`);

  let result: number = Math.abs(sortedNums[0] - sortedNums[1]);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    const a = sortedNums[i];
    const b = sortedNums[i + 1];

    const diff = Math.abs(a - b);

    console.debug(
      `(i: ${i}, i+1: ${i + 1}) => |a - b| = |${a} - ${b}| = ${diff}`
    );

    result = Math.min(result, diff);
  }

  return result;
}

export default { minimumAbsoluteDifference };
