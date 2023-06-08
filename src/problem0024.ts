/**
 *
 * <TITLE>
 *
 * https://projecteuler.net/problem=XX
 *
 * <DESCRIPTION>
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger';

type counter = {
  count: number;
};

const permutations = (
  inputElements: string[] = [],
  stopAtCycle: number,
  resultCycle: counter,
  branchCollector: string[] = [],
  resultCollector: string[][] = []
): string[][] => {
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

      permutations(
        restOfElements,
        stopAtCycle,
        resultCycle,
        newBranchCollector,
        resultCollector
      );
    } else {
      resultCycle.count += 1;
      logger.debug(
        `FINISH BRANCH: ${resultCycle.count} -> ${newBranchCollector}`
      );

      resultCollector.push(newBranchCollector);
    }
  }

  return resultCollector;
};

export function problem0024(): null {
  const result = null;

  const inputElements = 'ABCD'.split('');
  const counter = { count: 0 };
  const permutationToFind = 12;

  const totalPermutations = permutations(
    inputElements,
    permutationToFind,
    counter
  );

  logger.debug(`result ${String(result)}`);

  return result;
}

export default { problem0024 };
