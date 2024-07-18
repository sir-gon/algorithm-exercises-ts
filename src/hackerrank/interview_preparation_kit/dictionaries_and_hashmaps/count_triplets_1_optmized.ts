/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1-solution-notes.md]]
 */

export function countTriplets(arr: number[], ratio: number): number {
  let triplets = 0;

  const a_counter: Record<number, number> = arr.reduce(
    (accumulator: Record<number, number>, entry: number) => {
      if (entry in accumulator) {
        accumulator[entry] += 1;
      } else {
        accumulator[entry] = 1;
      }
      return accumulator;
    },
    {}
  );

  const b_counter: Record<number, number> = {};

  arr.forEach((x) => {
    const j = Math.floor(x / ratio);
    const k = x * ratio;
    a_counter[x] -= 1;
    if (b_counter[j] && a_counter[k] && x % ratio == 0) {
      triplets += b_counter[j] * a_counter[k];
    }

    if (x in b_counter) {
      b_counter[x] += 1;
    } else {
      b_counter[x] = 1;
    }
  });

  return triplets;
}

export default { countTriplets };
