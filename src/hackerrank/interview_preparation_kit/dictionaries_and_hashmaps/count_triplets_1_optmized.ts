/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1-solution-notes.md]]
 */

function countTriplets(arr: number[], ratio: number): number {
  let triplets = 0;

  const aCounter: Record<number, number> = arr.reduce(
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

  const bCounter: Record<number, number> = {};

  arr.forEach((x) => {
    const j = Math.floor(x / ratio);
    const k = x * ratio;
    aCounter[x] -= 1;
    if (bCounter[j] && aCounter[k] && x % ratio === 0) {
      triplets += bCounter[j] * aCounter[k];
    }

    if (x in bCounter) {
      bCounter[x] += 1;
    } else {
      bCounter[x] = 1;
    }
  });

  return triplets;
}

export default { countTriplets };
