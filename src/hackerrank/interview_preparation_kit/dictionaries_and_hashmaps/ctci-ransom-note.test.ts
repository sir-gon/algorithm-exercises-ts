import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { checkMagazine } from './ctci-ransom-note';

import TEST_CASES from './ctci-ransom-note.testcases.json';

describe('ctci_ransom_note', () => {
  it('checkMagazine test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((value) => {
      const answer = checkMagazine(value.magazine, value.note);

      console.debug(
        `checkMagazine(${value.magazine.toString()}, ${value.note.toString()}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
