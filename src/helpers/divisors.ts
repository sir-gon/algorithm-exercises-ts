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
  let cycles = 0;

  if (top === 1) {
    return {
      factor: 1,
      carry: 1,
      cycles: cycles
    };
  }

  let i = 2;
  while (i < top) {
    cycles += 1;
    if (top % i === 0) {
      return {
        factor: i,
        carry: top / i,
        cycles: cycles
      };
    }
    i += 1;
  }

  return {
    factor: i,
    carry: top / i,
    cycles: cycles + 1
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
    return { factors: [1], cycles: 1 };
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

export default {
  divisors,
  primeFactors,
  nextPrimeFactor
};
