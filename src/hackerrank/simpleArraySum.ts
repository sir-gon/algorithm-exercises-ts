/**
 * Simple Array Sum
 *
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

'use strict';

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

export function simpleArraySum(ar: number[]): number {
  /*
   * Write your code here.
   */

  let acum = 0;

  for (let i = 0; i < ar.length; i++) {
    acum += ar[i];
  }

  return acum;
}
