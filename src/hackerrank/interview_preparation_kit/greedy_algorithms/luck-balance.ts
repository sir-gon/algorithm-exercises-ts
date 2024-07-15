/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/luck-balance.md]]
 */

class Contest {
  luck: number;
  important: number;

  constructor(luck: number, important: number) {
    this.luck = luck;
    this.important = important;
  }
}

type SortOrder = 'asc' | 'desc';

interface SortBy<T> {
  property: keyof T;
  order?: SortOrder;
}

function dynamicSort<T>(array: T[], sortBy: SortBy<T>[]): T[] {
  const initialValue = 0;
  return array.sort((a, b) =>
    sortBy.reduce((_, current) => {
      const { property, order = 'asc' } = current;

      let comparison = 0;
      if (a[property] > b[property]) {
        comparison = 1;
      } else if (a[property] < b[property]) {
        comparison = -1;
      }

      if (order === 'desc') {
        comparison *= -1;
      }

      return comparison;
    }, initialValue)
  );
}

export function luckBalance(k: number, contests: number[][]): number {
  let importantContests: Contest[] = [];
  const nonimportantContests: Contest[] = [];

  contests.forEach((contest) => {
    const [luck, important] = [...contest];
    const theContest = new Contest(luck, important);

    if (important === 1) {
      importantContests.push(theContest);
    } else {
      nonimportantContests.push(theContest);
    }
  });

  importantContests = dynamicSort(importantContests, [
    { property: 'important', order: 'desc' },
    { property: 'luck', order: 'desc' }
  ]);

  let total = 0;
  const size = importantContests.length;
  const cut = Math.min(k, size);

  for (let i = 0; i < cut; i++) {
    total += importantContests[i].luck;
  }

  for (let i = cut; i < size; i++) {
    total -= importantContests[i].luck;
  }

  nonimportantContests.forEach((contest) => {
    total += contest.luck;
  });

  return total;
}

export default { luckBalance };
