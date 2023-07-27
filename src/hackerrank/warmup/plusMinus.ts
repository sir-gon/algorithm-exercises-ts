export function plusMinus(arr: number[]): string {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives += 1;
    } else if (arr[i] < 0) {
      negatives += 1;
    } else if (arr[i] === 0) {
      zeros += 1;
    }
  }

  const result: string[] = [];

  result.push((positives / arr.length).toFixed(6));
  result.push((negatives / arr.length).toFixed(6));
  result.push((zeros / arr.length).toFixed(6));

  return result.join(`\n`);
}

export default { plusMinus };
