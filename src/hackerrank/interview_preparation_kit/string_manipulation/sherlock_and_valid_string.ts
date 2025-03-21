/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/string_manipulation/sherlock-and-valid-string.md]]
 */

const __YES__ = 'YES';
const __NO__ = 'NO';

function isValidCompute(s: string): boolean {
  if (s.length <= 1) {
    return true;
  }

  const stringMap: Record<string, number> = {};

  for (const letter of s.split('')) {
    stringMap[letter] = stringMap?.[letter] ? stringMap[letter] + 1 : 1;
  }

  const frequencies: Record<number, number> = {};

  for (const event of Object.values(stringMap)) {
    frequencies[event] = frequencies?.[event] ? frequencies[event] + 1 : 1;
  }

  const frequenciesSize = Object.entries(frequencies).length;

  if (frequenciesSize === 1) {
    return true;
  }

  if (frequenciesSize === 2) {
    const frequenciesList = Object.entries(frequencies).sort(
      ([, a], [, b]) => a - b
    );
    const __RADIX__ = 10;
    const __TOLERANCE__ = 1;
    const minorFreq: number = parseInt(frequenciesList[0][0], __RADIX__);
    const majorFreq: number = parseInt(frequenciesList[1][0], __RADIX__);

    if (
      frequencies[minorFreq] === __TOLERANCE__ &&
      (minorFreq === __TOLERANCE__ || minorFreq - majorFreq === __TOLERANCE__)
    ) {
      return true;
    }
  }

  return false;
}

function isValid(s: string): string {
  return isValidCompute(s) ? __YES__ : __NO__;
}

export default { isValid };
export { isValid };
