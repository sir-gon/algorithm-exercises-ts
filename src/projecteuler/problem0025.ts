import { logger as console } from '../logger';
import { bigNum, bigSum, bigNumToString } from './helpers';

export function problem0025(_top: number): number {
  let last1 = bigNum('1');
  let last2 = bigNum('1');
  let counter = 2;
  let fibo = '0';

  do {
    fibo = bigSum(bigNumToString(last1), bigNumToString(last2));
    console.debug(`Fibonacci (${counter}) = ${fibo}`);

    // next keys:
    last2 = last1;
    last1 = bigNum(fibo);
    counter += 1;
  } while (fibo.length < _top);

  console.log(`RESULT ${counter} => ${fibo}`);
  return counter;
}

export default { problem0025 };
