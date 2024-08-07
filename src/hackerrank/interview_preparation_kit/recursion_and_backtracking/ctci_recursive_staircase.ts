/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

const TOP_LIMIT = 10 ** 10 + 7;
const STEPS_LIMIT = 3;

export function step_perms_comput_with_cache(
  n_steps: number,
  cache: Record<number, number>,
  steps_limit: number
): number {
  if (0 <= n_steps && n_steps <= 2) {
    return n_steps;
  }

  const keys = new Set(Object.values(cache));
  let result = 0;

  for (let i = 1; i <= Math.min(steps_limit, n_steps); i++) {
    const searchKey = n_steps - i;
    if (!keys.has(searchKey)) {
      cache[searchKey] = step_perms_comput_with_cache(
        searchKey,
        cache,
        steps_limit
      );
    }

    result += cache[searchKey];
  }

  return result + (n_steps <= steps_limit ? 1 : 0);
}

export function stepPerms(n: number): number {
  const initial_cache: Record<number, number> = {};
  return (
    step_perms_comput_with_cache(n, initial_cache, STEPS_LIMIT) % TOP_LIMIT
  );
}

export default { stepPerms, step_perms_comput_with_cache };
