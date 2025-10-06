/**
 * @link Problem definition [[docs/hackerrank/implementation/sockMerchant.md]]
 */

import { logger as console } from '../../logger';

function sockMerchant(n: number, ar: number[]): number {
  let result = 0;

  type Matches = Record<string, number>;

  const matches: Matches = {};

  for (const v of ar) {
    matches[v] = matches?.[v] ? matches[v] + 1 : 1;
  }

  console.debug(matches);

  for (const match of Object.values(matches)) {
    console.debug(match);

    result += Math.floor(match / 2);
  }

  return result;
}

export default { sockMerchant };
export { sockMerchant };
