/**
 * Lexicographic Permutations
 *
 * https://projecteuler.net/problem=24
 *
 * A permutation is an ordered arrangement of objects.
 * For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * If all of the permutations are listed numerically or alphabetically,
 * we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

import logger from './logger';

export const lexicographicPermutationFind = (
  inputElements: string[],
  permutationToFind: number
): string[] => {
  type counter = {
    count: number;
  };

  // "inner global variable" to catch the result shared acroos recursive branch calls.
  let lastBranchCollector: string[] = [];

  const computePermutations = (
    inputElements: string[] = [],
    stopAtCycle: number,
    resultCycle: counter,
    branchCollector: string[] = []
  ): undefined => {
    if (resultCycle.count >= stopAtCycle) {
      return;
    }

    for (let i = 0; i < inputElements.length; i++) {
      const rootElement = inputElements[i];
      const restOfElements: string[] = [];

      logger.debug(`root element: ${i} -> ${rootElement}`);

      for (let j = 0; j < inputElements.length; j++) {
        if (i != j) {
          restOfElements.push(inputElements[j]);
        }
      }

      const [...newBranchCollector] = branchCollector;
      newBranchCollector.push(rootElement);

      // finally...
      if (restOfElements.length > 0) {
        logger.debug(`REST: ${restOfElements}`);

        computePermutations(
          restOfElements,
          stopAtCycle,
          resultCycle,
          newBranchCollector
        );
      } else {
        resultCycle.count += 1;
        lastBranchCollector = newBranchCollector;

        logger.debug(
          `FINISH BRANCH: ${resultCycle.count} -> ${lastBranchCollector}`
        );
      }
    }
  };
  const counter = { count: 0 };
  const branchCollector: string[] = [];

  computePermutations(
    inputElements,
    permutationToFind,
    counter,
    branchCollector
  );

  return lastBranchCollector;
};

export function problem0024(
  inputElements: string[],
  inputPermutationToFind: number
): string[] {
  const permutationFound = lexicographicPermutationFind(
    inputElements,
    inputPermutationToFind
  );

  logger.debug(`result ${String(permutationFound)}`);

  return permutationFound;
}

export default { problem0024 };
