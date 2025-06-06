/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/two-strings.md]]
 */

const __YES__ = 'YES';
const __NO__ = 'NO';

function twoStringsCompute(s1: string, s2: string): boolean {
  for (const char of s1) {
    if (s2.includes(char)) {
      return true;
    }
  }
  return false;
}

function twoStrings(s1: string, s2: string): string {
  return twoStringsCompute(s1, s2) ? __YES__ : __NO__;
}

export default { twoStrings };
export { twoStrings };
