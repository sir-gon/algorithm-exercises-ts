import logger from '../logger';

import { staircase } from './staircase';

describe('staircase', () => {
  it('staircase Test case 1', () => {
    expect.assertions(1);

    const input = 6;
    const solutionFound = [
      '     #',
      '    ##',
      '   ###',
      '  ####',
      ' #####',
      '######'
    ].join('\n');

    const calculated = staircase(input);

    logger.info(`staircase(${input}) solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
