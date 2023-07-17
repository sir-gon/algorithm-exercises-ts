import logger from '../logger';

import { solveMeFirst } from './solveMeFirst';

describe('problem simpleArraySum', () => {
  it('problem simpleArraySum Test case 0', () => {
    expect.assertions(1);

    const input = ['2', '3'];
    const solutionFound = 5;

    const calculated = solveMeFirst(input);

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem simpleArraySum Test case 1', () => {
    expect.assertions(1);

    const input = ['100', '1000'];
    const solutionFound = 1100;

    const calculated = solveMeFirst(input);

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
