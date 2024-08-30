/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/string_manipulation/m]]
 */

function charToDicMap(word: string): Record<string, number> {
  const output: Record<string, number> = {};

  for (const letter of word.split('')) {
    output[letter] = output?.[letter] ? output[letter] + 1 : 1;
  }

  return output;
}

function sum(values: number[]): number {
  return values.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0
  );
}

export function makeAnagram(a: string, b: string): number {
  const aMap = charToDicMap(a);
  const bMap = charToDicMap(b);

  for (const key of Object.keys(aMap)) {
    if (bMap?.[key]) {
      aMap[key] = Math.abs(aMap[key] - bMap[key]);
      bMap[key] = 0;
    }
  }

  return sum(Object.values(aMap)) + sum(Object.values(bMap));
}

export default { makeAnagram };
