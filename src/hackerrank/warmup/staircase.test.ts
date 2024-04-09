import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

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

    console.log(`staircase(${input}) solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
