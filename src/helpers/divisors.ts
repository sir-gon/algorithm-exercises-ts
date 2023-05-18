import logger from '../logger';

export const divisors = (target: number): number[] => {
  let top = Math.abs(target);
  const divs = [];

  divs.push(1);

  if (target === 1) {
    return divs;
  }

  logger.debug(`Find divisors of ${target}`);

  // fast divisors finding loop
  let i = 2;
  while (i <= top) {
    top = target / i;

    if (top > 2 && target % i === 0) {
      divs.push(i);

      if (i < top) {
        divs.push(target / i);
      }
    }
    i += 1;
  }

  divs.push(target);

  logger.debug(`collected divisors {divs}`);

  // sort divisors
  divs.sort((a, b) => a - b);
  logger.debug(`sorted divisors {divs}`);

  return divs;
};

export default {
  divisors
};
