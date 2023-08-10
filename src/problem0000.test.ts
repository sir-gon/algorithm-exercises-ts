import { logger as console } from './logger';

import { problem0000 } from './problem0000';

describe('problem 00XX', () => {
  it('problem 00XX solution found', () => {
    expect.assertions(1);

    console.debug('LOG: DEBUG LEVEL ENABLED');
    console.error('LOG: ERROR LEVEL ENABLED');
    console.warn('LOG: WARN ENABLED');
    console.info('LOG: INFO LEVEL ENABLED');
    console.info(`LOG: Instantiated at: ${new Date().toLocaleString()}`);
    console.info(`LOG LEVEL: ${console.levelVal}`);

    const solutionFound = null;

    const calculated = problem0000();

    console.log(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
