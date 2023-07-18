import logger from '../logger';

import { diagonalDifference } from './diagonalDifference';

describe('diagonalDifference Test Case 0', () => {
  it('diagonalDifference solution found', () => {
    expect.assertions(1);

    const input = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ];
    const solutionFound = 15;

    const calculated = diagonalDifference(input);

    logger.info(`diagonalDifference(${input}) solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
