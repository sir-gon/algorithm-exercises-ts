export function aVeryBigSum(ar: number[]): number {
  let result = 0;

  for (const num of ar) {
    result += num;
  }

  return result;
}

export default { aVeryBigSum };
