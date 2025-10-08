/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/sort/ctci-comparator-sorting.md]]
 */

import { Player } from './ctci_comparator_sorting.Player';

class SortablePlayer extends Player {
  name = '';

  score = 0;

  constructor(name: string, score: number) {
    super(name, score);

    this.name = name;
    this.score = score;
  }

  comparator(bPlayer: this): number {
    if (this.score > bPlayer.score) {
      return -1;
    }
    if (this.score < bPlayer.score) {
      return 1;
    }
    if (this.name < bPlayer.name) {
      return -1;
    }
    if (this.name > bPlayer.name) {
      return 1;
    }

    return 0;
  }
}

function comparatorSorting(players: SortablePlayer[]): string[] {
  const sortedPlayers = [...players].sort(
    (a: SortablePlayer, b: SortablePlayer): number => a.comparator(b)
  );

  return sortedPlayers.map((player: SortablePlayer) => player.toString());
}

function comparatorSortingPrint(players: SortablePlayer[]): void {
  console.log(comparatorSorting(players)?.join('\n'));
}

export default {
  Player,
  SortablePlayer,
  comparatorSorting,
  comparatorSortingPrint
};

export { Player } from './ctci_comparator_sorting.Player';
export { SortablePlayer, comparatorSorting, comparatorSortingPrint };
