import logger from '../logger';

import { timeConversion } from './timeConversion';

describe('timeConversion', () => {
  it('timeConversion example', () => {
    const tests = [
      { input: '12:01:00PM', answer: '12:01:00' },
      { input: '12:01:00AM', answer: '00:01:00' }
    ];
    expect.assertions(tests.length);

    for (const test of tests) {
      const calculated = timeConversion(test.input);
      logger.info(`timeConversion(${test.input}) Test case 0: ${calculated}`);
      expect(calculated).toBe(test.answer);
    }
  });

  it('timeConversion test case 0', () => {
    expect.assertions(1);

    const input = '07:05:45PM';
    const solutionFound = '19:05:45';

    const calculated = timeConversion(input);

    logger.info(`timeConversion solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
