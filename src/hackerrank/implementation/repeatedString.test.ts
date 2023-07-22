import { logger as console } from '../../logger';

import { repeatedString } from './repeatedString';

describe('Repeated String', () => {
  it('Repeated String Test case 0', () => {
    expect.assertions(1);

    const word = 'aba';
    const n = 10;
    const solutionFound = 7;

    const calculated = repeatedString(word, n);

    console.log(`Repeated String Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('Repeated String Test case 1', () => {
    expect.assertions(1);

    const word = 'a';
    const n = 1000000000000;
    const solutionFound = 1000000000000;

    const calculated = repeatedString(word, n);

    console.log(`Repeated String Test case 1: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
