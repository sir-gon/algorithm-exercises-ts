/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries-solution-notes.md]]
 */

// Complete the freqQuery function below.
function freqQuery(queries: number[][]): number[] {
  const result: number[] = [];
  const dataMap: Record<number, number> = {};

  const __INITIAL__ = 0;
  const __INSERT__ = 1;
  const __DELETE__ = 2;
  const __SELECT__ = 3;

  const __NOT_FOUND__ = 0;
  const __FOUND__ = 1;

  queries.forEach((query) => {
    const [operation, data] = query;

    const current = dataMap?.[data] ?? __INITIAL__;

    switch (operation) {
      case __INSERT__:
        dataMap[data] = current + 1;
        break;
      case __DELETE__:
        dataMap[data] = Math.max(0, current - 1);
        break;
      case __SELECT__: {
        const uniqueDatavalues = new Set(Object.values(dataMap));
        if (uniqueDatavalues.has(data)) {
          result.push(__FOUND__);
        } else {
          result.push(__NOT_FOUND__);
        }
        break;
      }
      default:
        throw new Error('Invalid operation');
    }
  });

  return result;
}

export default { freqQuery };
export { freqQuery };
