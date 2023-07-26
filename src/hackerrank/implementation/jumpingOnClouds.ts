import { logger as console } from '../../logger';

export function jumpingOnClouds(c: number[]): number {
  let result = 0;
  const end = false;
  let key = 0;

  console.debug(c);

  while (key < c.length || end) {
    if (key + 2 < c.length && c[key + 2] === 0) {
      result += 1;
      key += 2;
    } else if (key + 1 < c.length && c[key + 1] === 0) {
      result += 1;
      key += 1;
    } else {
      key += 1;
    }
  }

  return result;
}

export default { jumpingOnClouds };
