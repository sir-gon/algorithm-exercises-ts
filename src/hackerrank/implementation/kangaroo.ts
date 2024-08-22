/**
 * @link Problem definition [[docs/hackerrank/implementation/kangaroo.md]]
 */

export function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {
  if (v1 === v2) {
    if (x1 !== x2) return 'NO';
    return 'YES';
  }

  const x = (x2 - x1) / (v1 - v2);

  if (Number.isInteger(x)) {
    if (x >= 0) return 'YES';
  }

  return 'NO';
}

export default { kangaroo };
