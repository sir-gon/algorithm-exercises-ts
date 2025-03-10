/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/new_year_chaos.md]]
 */

const TOO_CHAOTIC_ERROR = 'Too chaotic';
const NEW_YEAR_CHAOS_TOLERANCE = 2;

function minimumBribesCalculate(q: number[]): number {
  let bribes = 0;
  let i = 0;

  q.forEach((value) => {
    const position = i + 1;
    if (value - position > NEW_YEAR_CHAOS_TOLERANCE) {
      throw new Error(TOO_CHAOTIC_ERROR);
    }

    const fragment = q.slice(
      Math.min(Math.max(value - NEW_YEAR_CHAOS_TOLERANCE, 0), i),
      i
    );

    fragment.forEach((k) => {
      if (k > value) {
        bribes += 1;
      }
    });
    i += 1;
  });

  return bribes;
}

function minimumBribesText(queue: number[]): string {
  let result = '';

  try {
    result = `${minimumBribesCalculate(queue)}`;
  } catch (err: unknown) {
    if (err instanceof Error) {
      result = err.message;
    }
  }

  return result;
}

function minimumBribes(q: number[]): void {
  console.log(minimumBribesText(q));
}

export default { minimumBribes, minimumBribesText, TOO_CHAOTIC_ERROR };
export { minimumBribes, minimumBribesText, TOO_CHAOTIC_ERROR };
