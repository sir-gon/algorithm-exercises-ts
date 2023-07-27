import { logger as console } from '../../logger';

export function diagonalDifference(arr: number[][]): number {
  let diag1 = 0;
  const last = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag1 += arr[i][j];
      }
    }
  }
  console.log(`diag1 ${String(diag1)}`);

  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag2 += arr[last - i][j];
      }
    }
  }
  console.log(`diag2 ${String(diag2)}`);

  return Math.abs(diag1 - diag2);
}

export default { diagonalDifference };
