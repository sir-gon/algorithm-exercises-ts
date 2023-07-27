'use strict';

export function solveMeFirst(inputLines: string[]): number {
  let result = 0;

  inputLines.forEach((v) => {
    result += parseInt(v);
  });

  // console.log(result);
  return result;
}
