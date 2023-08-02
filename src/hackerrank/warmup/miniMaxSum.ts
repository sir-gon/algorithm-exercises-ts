export function miniMaxSum(arr: number[]): string {
  if (arr.length == 0) {
    throw new Error('Empty input');
  }

  let sum = 0;
  let min = arr[0];
  let max = arr[1];

  for (const num of arr) {
    sum += num;

    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  return `${sum - max} ${sum - min}`;
}

export default { miniMaxSum };
