/**
 * @link Problem definition [[docs/hackerrank/implementation/sockMerchant.md]]
 */

import { logger as console } from '../../logger';

export function sockMerchant(n: number, ar: number[]): number {
  let result = 0;

  interface Matches {
    [key: string]: number;
  }

  const matches: Matches = {};

  ar.forEach((v) => {
    matches[v] = matches?.[v] ? matches[v] + 1 : 1;
  });

  console.debug(matches);

  for (const k in matches) {
    console.debug(matches[k]);

    result += Math.floor(matches[k] / 2);
  }

  return result;
}

export default { sockMerchant };
