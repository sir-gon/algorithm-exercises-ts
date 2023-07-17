import logger from '../logger';

import { aVeryBigSum } from './aVeryBigSum';

describe('aVeryBigSum', () => {
  it('aVeryBigSum solution found', () => {
    expect.assertions(1);

    const input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    const solutionFound = 5000000015;

    const calculated = aVeryBigSum(input);

    logger.info(`aVeryBigSum solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
