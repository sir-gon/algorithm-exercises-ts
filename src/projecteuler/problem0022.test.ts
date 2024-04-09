// ////////////////////////////////////////////////////////////////////////////
// See:
//    - src/data/p022_names.txt
//    - src/data/p022_names.json
// ////////////////////////////////////////////////////////////////////////////

import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger';

import { problem0022 } from './problem0022';

import inputNames from './data/p022_names.json';

describe('problem 0022', () => {
  it('problem 0022 solution found', () => {
    expect.assertions(1);

    const solutionFound = 871198282;

    const calculated = problem0022(inputNames);

    console.log(`PROBLEM 0022 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
