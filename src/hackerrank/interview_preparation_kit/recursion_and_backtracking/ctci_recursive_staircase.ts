/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

function step_perms_comput_with_cache(
  n_steps: number,
  cache: Record<number, number>
): number {
  if (0 <= n_steps && n_steps <= 2) {
    return n_steps;
  }

  if (n_steps == 3) {
    return 4;
  }

  const keys = new Set(Object.values(cache));
  let result = 0;

  for (let i = 1; i < 4; i++) {
    const searchKey = n_steps - i;
    if (!keys.has(searchKey)) {
      cache[n_steps - i] = step_perms_comput_with_cache(searchKey, cache);
    }

    result += cache[searchKey];
  }

  return result;
}

export function stepPerms(n: number): number {
  const initial_cache: Record<number, number> = {};
  return step_perms_comput_with_cache(n, initial_cache) % (10 ** 10 + 7);
}

export default { stepPerms };
