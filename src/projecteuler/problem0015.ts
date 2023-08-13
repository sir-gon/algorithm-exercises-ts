/**
 * @link Problem definition [[docs/projecteuler/problem0015.md]]
 */

import { logger as console } from '../logger';
import { matrix } from './helpers';

function problem0015(gridSide = 20): number {
  const vertexMatrix = matrix(gridSide + 1, gridSide + 1, 1);

  for (let i = 1; i <= gridSide; i++) {
    for (let j = 1; j <= gridSide; j++) {
      const upperParent = vertexMatrix[i - 1][j];
      const leftParent = vertexMatrix[i][j - 1];

      vertexMatrix[i][j] = upperParent + leftParent;
    }
  }

  console.log(`Paths found: ${vertexMatrix[gridSide][gridSide]}`);
  console.debug(vertexMatrix);

  return vertexMatrix[gridSide][gridSide];
}

export default problem0015;
export { problem0015 };
