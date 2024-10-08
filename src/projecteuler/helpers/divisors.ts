import { logger as console } from '../../logger';
import { sum } from './sum';

export const divisors = (target: number): number[] => {
  let top = Math.abs(target);
  const divs: number[] = [];

  divs.push(1);

  if (target === 1) {
    return divs;
  }

  console.debug(`Find divisors of ${target}`);

  // fast divisors finding loop
  let i = 2;
  while (i <= top) {
    top = target / i;
    const remainder = target % i;

    if (top > 2 && remainder === 0) {
      if (i <= top) {
        divs.push(i);
      }

      if (i < top) {
        divs.push(top);
      }
    }
    i += 1;
  }

  divs.push(target);

  console.debug(`collected divisors {divs}`);

  // sort divisors
  divs.sort((a, b) => a - b);
  console.debug(`sorted divisors {divs}`);

  return divs;
};

export const properDivisors = (target: number): number[] => {
  const theDivisors: number[] = divisors(target);
  theDivisors.pop();

  return theDivisors;
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

  if (top !== 1) {
    do {
      i += 1;
      factor = i;
      carry = top / i;
    } while (i <= top && top % i !== 0);
  }

  return {
    factor,
    carry,
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

  return { factors, cycles };
};

export const isPrime = (target: number): boolean =>
  target !== 1 && target === nextPrimeFactor(target).factor;

export enum ___DIVISORS_ABUNDANCE___ {
  DIVISORS_ABUNDANT = 'abundant',
  DIVISORS_PERFECT = 'perfect',
  DIVISORS_DEFICIENT = 'deficient'
}

export const abundance = (target: number): ___DIVISORS_ABUNDANCE___ => {
  const tDivisors = properDivisors(target);
  const divSum = sum(tDivisors);

  if (divSum > target) {
    return ___DIVISORS_ABUNDANCE___.DIVISORS_ABUNDANT;
  }

  if (divSum < target) {
    return ___DIVISORS_ABUNDANCE___.DIVISORS_DEFICIENT;
  }

  return ___DIVISORS_ABUNDANCE___.DIVISORS_PERFECT;
};

export default {
  abundance,
  divisors,
  primeFactors,
  nextPrimeFactor,
  ___DIVISORS_ABUNDANCE___
};
