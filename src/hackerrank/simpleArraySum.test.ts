/**
 * Simple Array Sum
 *
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 *
 * Given an array of integers, find the sum of its elements.
 * For example, if the array , , so return .
 *
 * Function Description
 *
 * Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
 * simpleArraySum has the following parameter(s):
 * ar: an array of integers
 *
 * Input Format
 * The first line contains an integer, , denoting the size of the array.
 * The second line contains  space-separated integers representing the array's elements.
 *
 * Constraints
 *
 *
 * Output Format
 * Print the sum of the array's elements as a single integer.
 *
 * Sample Input
 *
 * 6
 * 1 2 3 4 10 11
 *
 * Sample Output
 *
 * 31
 * Explanation
 *
 * We print the sum of the array's elements: .
 */

import logger from '../logger';

import { simpleArraySum } from './simpleArraySum';

describe('problem simpleArraySum', () => {
  it('problem simpleArraySum Test case 0', () => {
    expect.assertions(1);

    const input = [1, 2, 3, 4, 10, 11];
    const solutionFound = 31;

    const calculated = simpleArraySum(input);

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
