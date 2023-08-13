/**
 * @link Problem definition [[docs/projecteuler/problem0004.md]]
 */
/// ///////////////////////////////////////////////////////////////////////////
// NOTES ABOUT THE SOLUTION:
// This solution cycles to test all pairs of factors between 111 and 999 that
// meet the condition of generating a palindrome and saves the largest found.
// I think there must be another optimal solution to avoid testing all cases
// cutting the loop around the largest factor pair
// That's why I thought about doing the loop from highest to lowest.
/// ///////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger';

import { nullable, isPalindrome } from './helpers/index';

function problem0004(_bottom: number, _top: number): nullable<number> {
  let i;
  let j;
  let foundi;
  let foundj;
  let foundPalindrome;

  // Find all cases
  let cycles = 0;

  i = _top;
  while (i >= _bottom) {
    j = i;
    while (j >= _bottom && (!foundj || j >= foundj)) {
      cycles += 1;

      if (isPalindrome(j * i)) {
        console.debug(`FOUND: ${i} x ${j} = ${j * i} is Palindrome`);

        if (!foundPalindrome || i * j > foundPalindrome) {
          foundi = i;
          foundj = j;
          foundPalindrome = i * j;
        }
      }

      j -= 1;
    }

    i -= 1;
  }

  console.log(
    `Problem 0004 Largest Palindrome  => ${foundi} 𝗑 ${foundj} = ${foundPalindrome} in ${cycles} cycles`
  );

  return foundPalindrome;
}

export default problem0004;
export { problem0004 };
