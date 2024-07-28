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

      const anagram_candidate = substr.split('').sort().join('');
      if (anagram_candidate in candidates) {
        candidates[anagram_candidate].push(substr);
      } else {
        candidates[anagram_candidate] = [substr];
      }
    }
  }

  // 4 => 6
  // 3 => 1
  // 2 => 3
  let count = 0;
  // Final Anagram list
  for (const i of Object.keys(candidates)) {
    const total = candidates[i].length;
    const k = 2;

    if (total <= 1) {
      delete candidates[i];
    } else {
      // Binomial coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
      count += Math.floor(
        factorial(total) / (factorial(k) * factorial(total - k))
      );
    }
  }
  console.debug(`filtered candidates: ${count}`);

  return count;
}

export default { sherlockAndAnagrams };
