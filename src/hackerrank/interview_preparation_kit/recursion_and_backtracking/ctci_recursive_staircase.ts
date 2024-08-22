/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

const TOP_LIMIT = 10 ** 10 + 7;
const STEPS_LIMIT = 3;

export class StepPerms {
  TOP_LIMIT = 1;

  STEPS_LIMIT = 1;

  CACHE: Record<number, number> = {};

  constructor(topLimit: number, stepsLimit: number) {
    this.TOP_LIMIT = topLimit;
    this.STEPS_LIMIT = stepsLimit;
  }

  step_perms_comput_with_cache(nSteps: number): number {
    if (nSteps >= 0 && nSteps <= 2) {
      return nSteps;
    }

    const keys = new Set(Object.keys(this.CACHE));
    let result = 0;

    for (let i = 1; i <= Math.min(this.STEPS_LIMIT, nSteps); i++) {
      const searchKey = nSteps - i;
      if (!keys.has(searchKey.toString())) {
        this.CACHE[searchKey] = this.step_perms_comput_with_cache(searchKey);
      }

      result += this.CACHE[searchKey];
    }

    return result + (nSteps <= this.STEPS_LIMIT ? 1 : 0);
  }
}

export function stepPerms(n: number): number {
  const stairs = new StepPerms(TOP_LIMIT, STEPS_LIMIT);

  return stairs.step_perms_comput_with_cache(n) % TOP_LIMIT;
}

export default { stepPerms, StepPerms };
