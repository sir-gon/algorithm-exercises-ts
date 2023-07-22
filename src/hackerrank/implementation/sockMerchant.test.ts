import { logger as console } from '../../logger';

import { sockMerchant } from './sockMerchant';

describe('Sales by Match', () => {
  it('Sales by Match solution found', () => {
    expect.assertions(1);

    const input = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const solutionFound = 3;

    const calculated = sockMerchant(input.length, input);

    console.log(`Sales by Match solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
