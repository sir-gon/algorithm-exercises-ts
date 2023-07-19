import logger from '../../logger';

import { breakingRecords } from './breakingRecords';

describe('Breaking the Records', () => {
  it('Breaking the Records Border case', () => {
    expect.assertions(1);

    expect(() => {
      breakingRecords([]);
    }).toThrow('Empty input');
  });

  it('Breaking the Records Test case 0', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    logger.info(`breakingRecords(${input}) Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('Breaking the Records Test case 1', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    logger.info(`breakingRecords(${input}) Test case 1: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
