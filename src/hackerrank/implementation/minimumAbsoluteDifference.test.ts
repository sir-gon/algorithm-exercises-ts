import { logger as console } from '../../logger';

import { minimumAbsoluteDifference } from './minimumAbsoluteDifference';

describe('Minimum Absolute Difference in an Array', () => {
  it('Minimum Absolute Difference in an Array border case', () => {
    expect.assertions(1);

    expect(() => {
      minimumAbsoluteDifference([]);
    }).toThrow('Empty input');
  });

  it('Minimum Absolute Difference in an Array Test case 0', () => {
    expect.assertions(1);

    const input = [3, -7, 0];
    const solutionFound = 3;

    const calculated = minimumAbsoluteDifference(input);

    console.log(
      `Minimum Absolute Difference in an Array Test case 0: ${calculated}`
    );

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('Minimum Absolute Difference in an Array Test case 1', () => {
    expect.assertions(1);

    const input = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
    const solutionFound = 1;

    const calculated = minimumAbsoluteDifference(input);

    console.log(
      `Minimum Absolute Difference in an Array Test case 1: ${calculated}`
    );

    expect(calculated).toStrictEqual(solutionFound);
  });
});
