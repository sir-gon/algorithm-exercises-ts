import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger';

import { breakingRecords } from './breakingRecords';

describe('breakingRecords', () => {
  it('breakingRecords Border case', () => {
    expect.assertions(1);

    expect(() => {
      breakingRecords([]);
    }).toThrow('Empty input');
  });

  it('breakingRecords Test case 0', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    console.log(
      `breakingRecords(${input.toString()}) Test case 0: ${calculated.toString()}`
    );

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('breakingRecords Test case 1', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    console.log(
      `breakingRecords(${input.toString()}) Test case 1: ${calculated.toString()}`
    );

    expect(calculated).toStrictEqual(solutionFound);
  });
});
