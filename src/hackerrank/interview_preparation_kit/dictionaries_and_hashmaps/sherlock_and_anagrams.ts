/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams-solution-notes.md]]
 */

import { logger as console } from '../../../logger';

function extraLongFactorials(n: number): bigint {
  const rs = [...Array(n)].reduce((a, b, i) => a * BigInt(i + 1), 1n);
  return rs;
}

export function sherlockAndAnagrams(s: string): number {
  const candidates: Record<string, string[]> = {};
  const size = s.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      const substr = s.substring(i, size - j);
      console.debug(
        `i: ${i}, size: ${size}, size - j: ${size - j} | substr: ${substr}`
      );

      // Add substrings to a candidate list.
      // two strings are anagrams if sorted strings are the same.

      const anagram_candidate = substr
        .split('')
        .sort((a: string, b: string) => a.localeCompare(b))
        .join('');
      if (anagram_candidate in candidates) {
        candidates[anagram_candidate].push(substr);
      } else {
        candidates[anagram_candidate] = [substr];
      }
    }
  }

  let total: bigint = BigInt(0);
  let q_candidates = 0;
  // Final Anagram list
  for (const word of Object.keys(candidates)) {
    const quantity_of_anagrams = candidates[word].length;
    const k = 2;

    if (quantity_of_anagrams <= 1) {
      delete candidates[word];
    } else {
      // Binomial coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
      q_candidates += quantity_of_anagrams;

      const count =
        extraLongFactorials(quantity_of_anagrams) /
        (extraLongFactorials(k) *
          extraLongFactorials(quantity_of_anagrams - k));
      total += count;

      console.debug(`'Partial anagrams of ${word}: ${count}`);
    }
  }
  console.debug(
    `'sherlockAndAnagrams(${s}) Filtered # candidates: ${q_candidates}`
  );
  console.debug(`'sherlockAndAnagrams(${s}) # anagrams: ${total}`);

  return Number(total);
}

export default { sherlockAndAnagrams };
