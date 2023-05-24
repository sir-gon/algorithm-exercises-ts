import logger from '../logger';

export const divisors = (target: number): number[] => {
  let top = Math.abs(target);
  const divs: number[] = [];

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

export interface PrimeFactor {
  factor: number;
  carry: number;
  cycles: number;
}

export const nextPrimeFactor = (_target: number): PrimeFactor => {
  const top = Math.abs(_target);

  // default
  let factor = top;
  let carry = 1;

  const init = 1;
  let i = init;

  if (top != 1) {
    do {
      i += 1;
      factor = i;
      carry = top / i;
    } while (i <= top && top % i !== 0);
  }

  return {
    factor: factor,
    carry: carry,
    cycles: i - init
  };
};

export interface PrimeFactors {
  factors: number[];
  cycles: number;
}

export const primeFactors = (target: number): PrimeFactors => {
  const factors: number[] = [];

  let cycles = 0;

  if (target === 1) {
    return { factors: [1], cycles: 0 };
  }

  let factor = target;
  while (factor !== 1) {
    const partial = nextPrimeFactor(factor);
    cycles += partial.cycles;

    factors.push(partial.factor);
    factor = partial.carry;
  }

  return { factors: factors, cycles: cycles };
};

export const isPrime = (target: number): boolean => {
  return target != 1 && target === nextPrimeFactor(target).factor;
};

export default {
  divisors,
  primeFactors,
  nextPrimeFactor
};
