export function miniMaxSum(arr: number[]): string {
  if (arr.length == 0) {
    throw new Error('Empty input');
  }

  let sum = 0;
  let min = arr[0];
  let max = arr[1];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return `${sum - max} ${sum - min}`;
}

export default { miniMaxSum };
