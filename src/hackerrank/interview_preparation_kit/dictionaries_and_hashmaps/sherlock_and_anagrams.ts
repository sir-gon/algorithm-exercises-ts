/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams.md]]
 */

function factorial(n: number): number {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export function sherlockAndAnagrams(s: string): number {
  const candidates: Record<string, string[]> = {};
  const size = s.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      const substr = s.substring(i, size - j);

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

  let count = 0;
  // Final Anagram list
  for (const word of Object.keys(candidates)) {
    const quantity_of_anagrams = candidates[word].length;
    const k = 2;

    if (quantity_of_anagrams <= 1) {
      delete candidates[word];
    } else {
      // Binomial coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
      count += Math.floor(
        factorial(quantity_of_anagrams) /
          (factorial(k) * factorial(quantity_of_anagrams - k))
      );
    }
  }
  console.debug(`filtered candidates: ${count}`);

  return count;
}

export default { sherlockAndAnagrams };
