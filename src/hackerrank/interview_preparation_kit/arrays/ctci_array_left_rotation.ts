/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/ctci_array_left_rotation.md]]
 */

export function rotLeftOne(a_numbers: number[]): number[] {
  const first = a_numbers.shift();
  if (first != undefined) {
    a_numbers.push(first);
  }

  return a_numbers;
}

export function rotLeft(a_numbers: number[], d_rotations: number): number[] {
  let output = [...a_numbers];

  for (let i = 0; i < d_rotations; i++) {
    output = rotLeftOne(output);
  }

  return output;
}

export default { rotLeft, rotLeftOne };
