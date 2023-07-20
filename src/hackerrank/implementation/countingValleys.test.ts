import logger from '../../logger';

import { countingValleys } from './countingValleys';

describe('Counting Valleys', () => {
  it('Counting Valleys Test case 0', () => {
    expect.assertions(1);

    const input = 'UDDDUDUU';
    const solutionFound = 1;

    const calculated = countingValleys(input.length, input);

    logger.info(`Counting Valleys Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('Counting Valleys Test case 1', () => {
    expect.assertions(1);

    const input = 'DDUUDDUDUUUD';
    const solutionFound = 2;

    const calculated = countingValleys(input.length, input);

    logger.info(`Counting Valleys Test case 1: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});