/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/recursive-digit-sum.md]]
 */

const __RADIX__ = 10;

export function superDigitCompute(n: string): number {
  if (n.length === 1) {
    return parseInt(n, __RADIX__);
  }

  let partial = 0;
  for (const digit of n) {
    partial += parseInt(digit, __RADIX__);
  }

  return superDigitCompute(`${partial}`);
}

export function superDigit(n: string, k: number): number {
  const accumulator: string = `${superDigitCompute(n)}`;

  let result: string = '';
  for (let i = 0; i < k; i++) {
    result = `${result}${accumulator}`;
  }

  return superDigitCompute(result);
}

export default { superDigit };
