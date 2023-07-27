'use strict';

export function simpleArraySum(ar: number[]): number {
  let acum = 0;

  for (let i = 0; i < ar.length; i++) {
    acum += ar[i];
  }

  return acum;
}
