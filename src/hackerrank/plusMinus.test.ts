import logger from '../logger';

import { plusMinus } from './plusMinus';

describe('Plus Minus', () => {
  it('Plus Minus Test case 1', () => {
    expect.assertions(1);

    const input = [-4, 3, -9, 0, 4, 1];
    const solutionFound = ['0.500000', '0.333333', '0.166667'].join('\n');

    const calculated = plusMinus(input);

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
