import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger';

import { sherlockAndAnagrams } from './sherlock_and_anagrams';

const TEST_CASES = [
  {
    title: 'Sample Test Case 0',
    tests: [
      {
        input: 'abba',
        expected: 4
      },
      {
        input: 'abcd',
        expected: 0
      }
    ]
  },
  {
    title: 'Sample Test Case 1',
    tests: [
      {
        input: 'ifailuhkqq',
        expected: 3
      },
      {
        input: 'kkkk',
        expected: 10
      }
    ]
  },
  {
    title: 'Sample Test Case 1',
    tests: [
      {
        input: 'cdcd',
        expected: 5
      }
    ]
  }
];

describe('sherlock_and_anagrams', () => {
  it('sherlockAndAnagrams test cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((testSet) => {
      testSet.tests.forEach((test) => {
        const answer = sherlockAndAnagrams(test.input);

        console.debug(
          `sherlockAndAnagrams(${test.input}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
