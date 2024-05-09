/**
 * @link Problem definition [[docs/projecteuler/problem0018.md]]
 */

import { BNodeBuilder } from './lib/BNodeBuilder';
import { logger as console } from '../logger';

const rootCoordinateI = 0;
const rootCoordinateJ = 0;

export function problem0018(_triangle: number[][]): number {
  console.debug(`_triangle: ${_triangle}`);
  console.debug(
    `_triangle: ${JSON.stringify(
      BNodeBuilder.buildBNodeTree(_triangle, 0, 0),
      null,
      4
    )}`
  );

  const leafs: number[] = [];
  const weightsTree = BNodeBuilder.buildBNodeTreeWeight(
    _triangle,
    rootCoordinateI,
    rootCoordinateJ,
    0,
    leafs
  );

  console.debug(`_triangle: ${JSON.stringify(weightsTree, null, 4)}`);
  console.debug(`leafs count: ${leafs.length}`);
  console.debug(`leafs: ${leafs}`);

  const __START_FROM__ = 0;
  const max = leafs.reduce((a, b) => (a > b ? a : b), __START_FROM__);

  return max;
}

export default { problem0018 };
