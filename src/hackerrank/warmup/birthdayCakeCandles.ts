export function birthdayCakeCandles(ar: number[]): number {
  if (ar.length == 0) {
    throw new Error('Empty input');
  }

  let counter = 0;
  let max = ar[0];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
      counter = 1;
    } else if (ar[i] === max) {
      counter += 1;
    }
  }

  return counter;
}

export default { birthdayCakeCandles };
