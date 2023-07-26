import { logger as console } from '../../logger';

export function birthday(s: number[], d: number, m: number): number {
  let result = 0;
  console.debug(`s: ${s}`);

  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    console.debug('-------------------------------');
    for (let j = i; j < i + m; j++) {
      console.debug(`j: s[${j}] => ${s[j]}`);
      sum += s[j];
    }
    console.debug('-------------------------------');
    if (sum === d) result += 1;
  }

  return result;
}

export default { birthday };
