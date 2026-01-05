import { describe, expect, it } from '@jest/globals';

import { countSwaps, SortableGroup } from './ctci_bubble_sort';
import TEST_CASES from './ctci_bubble_sort.testcases.json';

describe('countSwaps', () => {
  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const sortable = new SortableGroup(test.input);
      const resultSort = sortable.bubble_sort().group;
      countSwaps(test.input);

      expect(resultSort).toStrictEqual(test.sorted);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
