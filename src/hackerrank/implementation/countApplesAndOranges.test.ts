import logger from '../../logger';

import { countApplesAndOranges } from './countApplesAndOranges';

describe('countApplesAndOranges', () => {
  it('countApplesAndOranges test case 0', () => {
    expect.assertions(1);

    const s: number = 7;
    const t: number = 11;
    const a: number = 5;
    const b: number = 15;
    const apples: number[] = [-2, 2, 1];
    const oranges: number[] = [5, -6];
    const solutionFound = [1, 1].join('\n');

    const calculated = countApplesAndOranges(s, t, a, b, apples, oranges);

    logger.info(`countApplesAndOranges test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
