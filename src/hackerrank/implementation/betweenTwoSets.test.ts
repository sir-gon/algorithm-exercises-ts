import logger from '../../logger';

import { getTotalX, factorOf, isFactor } from './betweenTwoSets';

describe('Between Two Sets', () => {
  it('Between Two Sets Border cases', () => {
    expect.assertions(5);

    const input = [16, 32, 96];
    const solutionFound = 0;

    const calculatedA = getTotalX([], input);
    logger.info(`Between Two Sets getTotalX([], ${input}): ${calculatedA}`);
    expect(calculatedA).toBe(solutionFound);

    const calculatedB = getTotalX(input, []);
    logger.info(`Between Two Sets getTotalX(${input}, []): ${calculatedB}`);
    expect(calculatedB).toBe(solutionFound);

    const calculatedC = getTotalX([], []);
    logger.info(`Between Two Sets getTotalX([], []): ${calculatedC}`);
    expect(calculatedC).toBe(solutionFound);

    const calculatedD = isFactor(1, []);
    logger.info(`Between Two Sets isFactor(1, []): ${calculatedD}`);
    expect(calculatedD).toBe(false);

    const calculatedE = factorOf(1, []);
    logger.info(`Between Two Sets factorOf(1, []): ${calculatedE}`);
    expect(calculatedE).toBe(false);
  });

  it('Between Two Sets Test case 0', () => {
    expect.assertions(1);

    const a = [2, 4];
    const b = [16, 32, 96];
    const solutionFound = 3;

    const calculated = getTotalX(a, b);

    logger.info(`Between Two Sets Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
