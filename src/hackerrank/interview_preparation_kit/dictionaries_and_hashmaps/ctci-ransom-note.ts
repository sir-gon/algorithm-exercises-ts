/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/ctci-ransom-note.md]]
 */

const __YES__ = 'Yes';
const __NO__ = 'No';

function checkMagazineCompute(magazine: string[], note: string[]): boolean {
  const dictionary: Record<string, number> = {};

  for (const word of magazine) {
    if (word in dictionary) {
      dictionary[word] += 1;
    } else {
      dictionary[word] = 1;
    }
  }

  for (const word of note) {
    if (word in dictionary && dictionary[word] > 0) {
      dictionary[word] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function checkMagazine(magazine: string[], note: string[]): string {
  return checkMagazineCompute(magazine, note) ? __YES__ : __NO__;
}

export default { checkMagazine };
export { checkMagazine };
