import logger from '../../logger';

import { migratoryBirds } from './migratoryBirds';

describe('Migratory Birds', () => {
  it('Migratory Birds border case', () => {
    expect.assertions(1);

    expect(() => {
      migratoryBirds([]);
    }).toThrow('Empty input');
  });

  it('Migratory Birds Test case 0', () => {
    expect.assertions(1);

    const input = [1, 4, 4, 4, 5, 3];
    const solutionFound = 4;

    const calculated = migratoryBirds(input);

    logger.info(`Migratory Birds Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('Migratory Birds Test case 5', () => {
    expect.assertions(1);

    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
    const solutionFound = 3;

    const calculated = migratoryBirds(input);

    logger.info(`Migratory Birds Test case 5: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});