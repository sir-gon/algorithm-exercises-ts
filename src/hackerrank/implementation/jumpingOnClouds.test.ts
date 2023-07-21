import logger from '../../logger';

import { jumpingOnClouds } from './jumpingOnClouds';

describe('Jumping on the Clouds', () => {
  it('Jumping on the Clouds Test case 0', () => {
    expect.assertions(1);

    const input = [0, 0, 1, 0, 0, 1, 0];
    const solutionFound = 4;

    const calculated = jumpingOnClouds(input);

    logger.info(`Jumping on the Clouds Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('Jumping on the Clouds Test case 1', () => {
    expect.assertions(1);

    const input = [0, 0, 0, 1, 0, 0];
    const solutionFound = 3;

    const calculated = jumpingOnClouds(input);

    logger.info(`Jumping on the Clouds Test case 1: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});