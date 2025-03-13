class Player {
  name = '';

  score = 0;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  toString(): string {
    return `${this.name} ${this.score}`;
  }
}

export default { Player };
export { Player };
