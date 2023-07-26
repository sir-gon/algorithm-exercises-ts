export function aVeryBigSum(ar: number[]): number {
  let result = 0;

  for (let i = 0; i < ar.length; i++) {
    result += ar[i];
  }

  return result;
}

export default { aVeryBigSum };
