/**
 * @link Problem definition [[docs/hackerrank/implementation/repeatedString.md]]
 */

import { logger as console } from '../../logger';

function countAs(word: string): number {
  let result = 0;

  const chars = word.split('');

  chars.forEach((char) => {
    if (char === 'a') {
      result += 1;
    }
  });

  return result;
}

function repeatedString(s: string, n: number): number {
  let result = 0;

  const blockSize = s.length;

  const countBlocks = Math.floor(n / blockSize);
  const restSize = Math.floor(n % blockSize);

  console.debug(`countBlocks: ${countBlocks} + rest: ${restSize}`);

  result = countAs(s) * countBlocks + countAs(s.slice(0, restSize));
  return result;
}

export default { countAs, repeatedString };
export { countAs, repeatedString };
