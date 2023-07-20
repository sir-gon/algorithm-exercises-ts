/**
 * Migratory Birds
 *
 * https://www.hackerrank.com/challenges/migratory-birds
 *
 * Given an array of bird sightings where every element represents a bird type
 * id, determine the id of the most frequently sighted type. If more than 1
 * type has been spotted that maximum amount, return the smallest of their ids.
 *
 * # Example
 * arr = [1, 1, 2, 2, 3]
 *
 * There are two each of types  and , and one sighting of type . Pick the lower
 * of the two types seen twice: type .
 *
 * # Function Description
 * Complete the migratoryBirds function in the editor below.
 *
 * migratoryBirds has the following parameter(s):
 * * int arr[n]: the types of birds sighted
 *
 * # Returns
 * * int: the lowest type id of the most frequently sighted birds
 *
 * # Input Format
 * The first line contains an integer, n, the size of arr.
 * The second line describes arr as n space-separated integers, each a type
 * number of the bird sighted.
 *
 * # Constraints
 * * 5 <= n <= 2 × 10<sup>5</sup>
 * * It is guaranteed that each type is 1, 2, 3, 4, or 5.
 *
 * # Sample Input 0
 * ```
 * 6
 * 1 4 4 4 5 3
 * ```
 * # Sample Output 0
 * ```
 * 4
 * ```
 *
 * # Explanation 0
 *
 * The different types of birds occur in the following frequencies:
 *
 * * Type 1: 1 bird
 * * Type 2: 0 birds
 * * Type 3: 1 bird
 * * Type 4: 3 birds
 * * Type 5: 1 bird
 *
 * The type number that occurs at the highest frequency is type 4, so we print
 * 4 as our answer.
 *
 * # Sample Input 1
 * ```
 * 11
 * 1 2 3 4 5 4 3 2 1 3 4
 * ```
 *
 * # Sample Output 1
 * ```
 * 3
 * ```
 *
 * # Explanation 1
 *
 * The different types of birds occur in the following frequencies:
 *
 * * Type 1: 2
 * * Type 2: 2
 * * Type 3: 3
 * * Type 4: 3
 * * Type 5: 1
 *
 * Two types have a frequency of 3, and the lower of those is type 3.
 */

import logger from '../../logger';

interface Birds {
  [name: string]: number;
}

export function migratoryBirds(arr: number[]): number {
  if (arr.length == 0) {
    throw new Error('Empty input');
  }

  const map: Birds = {};
  let max = arr[0];

  for (const bird of arr) {
    logger.debug(`bird ${bird}`);

    if (!map[bird]) {
      map[bird] = 1;
    } else {
      map[bird] += 1;
    }

    logger.debug(`bird = ${bird} ~> map[bird] = ${map[bird]}`);
    logger.debug(`max = ${max} ~> map[max] = ${map[max]}`);

    if (map[bird] > map[max] || (map[bird] == map[max] && bird < max))
      max = bird;
  }

  logger.debug(`map: ${map}`);

  return max;
}

export default { migratoryBirds };
