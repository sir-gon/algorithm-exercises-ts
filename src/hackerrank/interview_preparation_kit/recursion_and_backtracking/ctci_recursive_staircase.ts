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

  constructor(top_limit: number, steps_limit: number) {
    this.TOP_LIMIT = top_limit;
    this.STEPS_LIMIT = steps_limit;
  }

  step_perms_comput_with_cache(n_steps: number): number {
    if (n_steps >= 0 && n_steps <= 2) {
      return n_steps;
    }

    const keys = new Set(Object.keys(this.CACHE));
    let result = 0;

    for (let i = 1; i <= Math.min(this.STEPS_LIMIT, n_steps); i++) {
      const searchKey = n_steps - i;
      if (!keys.has(searchKey.toString())) {
        this.CACHE[searchKey] = this.step_perms_comput_with_cache(searchKey);
      }

      result += this.CACHE[searchKey];
    }

    return result + (n_steps <= this.STEPS_LIMIT ? 1 : 0);
  }
}

export function stepPerms(n: number): number {
  const stairs = new StepPerms(TOP_LIMIT, STEPS_LIMIT);

  return stairs.step_perms_comput_with_cache(n) % TOP_LIMIT;
}

export default { stepPerms, StepPerms };
