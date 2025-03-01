/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/new_year_chaos.md]]
 */

export const TOO_CHAOTIC_ERROR = 'Too chaotic';
export const NEW_YEAR_CHAOS_TOLERANCE = 2;

export function minimumBribes(q: number[]): number {
  let bribes = 0;
  let i = 0;

  q.forEach((value) => {
    const position = i + 1;
    if (value - position > NEW_YEAR_CHAOS_TOLERANCE) {
      throw new Error(TOO_CHAOTIC_ERROR);
    }

    const fragment = q.slice(Math.max(value - NEW_YEAR_CHAOS_TOLERANCE, 0), i);

    fragment.forEach((k) => {
      if (k > value) {
        bribes += 1;
      }
    });
    i += 1;
  });

  return bribes;
}

export function minimumBribesTransform(queue: number[]): number | string {
  let result: number | string = '';

  try {
    result = minimumBribes(queue);
  } catch (err: unknown) {
    if (err instanceof Error) {
      result = err.message;
    }
  }

  return result;
}

export default { minimumBribes, minimumBribesTransform, TOO_CHAOTIC_ERROR };
