/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/miscellaneous/friend-circle-queries.md]]
 */

class GropingFriends {
  _friendship: Record<number, number> = {};

  _large_friendship: number = 0;

  constructor() {
    this._friendship = {};
    this._large_friendship = 0;
  }

  add(point_a: number): void {
    if (!this._friendship?.[point_a]) {
      this._friendship[point_a] = -1;
    }
  }

  find(point_a: number): number {
    if (this._friendship[point_a] < 0) {
      return point_a;
    }
    return this.find(this._friendship[point_a]);
  }

  unite(point_a: number, point_b: number): boolean {
    this.add(point_a);
    this.add(point_b);

    let _a = this.find(point_a);
    let _b = this.find(point_b);

    if (_a == _b) {
      return false;
    }

    if (_a > _b) {
      [_a, _b] = [_b, _a];
    }

    this._friendship[_a] += this._friendship[_b];
    this._friendship[_b] = _a;

    // large group is the root node with "high" value
    this._large_friendship = Math.max(
      this._large_friendship,
      -1 * this._friendship[_a]
    );
    return true;
  }

  count_groups(): number {
    return this._large_friendship;
  }
}

export function maxCircle(queries: number[][]): number[] {
  const result: number[] = [];
  const friends = new GropingFriends();

  queries.forEach((query) => {
    // Computing friendship
    friends.unite(query[0], query[1]);

    // Counting friends groups
    result.push(friends.count_groups());
  });

  return result;
}

export default { maxCircle };
