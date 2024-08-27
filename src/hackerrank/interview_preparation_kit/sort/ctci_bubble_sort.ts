/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/sort/ctci-bubble-sort.md]]
 */

const SEPARATOR = '\n';

export class SortableGroup {
  group: number[];

  count: number;

  constructor(group: number[]) {
    this.count = 0;
    this.group = group;
  }

  bubble_sort(): this {
    const group = [...this.group];
    const size: number = group.length;
    let count = 0;
    let i = 0;

    while (i < size) {
      for (let j = 0; j < size - 1; j++) {
        if (group[j] > group[j + 1]) {
          [group[j], group[j + 1]] = [group[j + 1], group[j]];

          count += 1;
        }
      }
      i += 1;
    }

    this.count = count;
    this.group = group;

    return this;
  }
}

export function countSwaps(a: number[]): void {
  const sortableGroup = new SortableGroup(a);
  sortableGroup.bubble_sort();

  const last = sortableGroup.group.length - 1;

  const output =
    `Array is sorted in ${sortableGroup.count} swaps.${SEPARATOR}` +
    `First Element: ${sortableGroup.group[0]}${SEPARATOR}` +
    `Last Element: ${sortableGroup.group[last]}${SEPARATOR}`;

  console.log(output);
}

export default { countSwaps, SortableGroup };
