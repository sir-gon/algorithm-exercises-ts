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

const permutations = (
  inputElements: string[] = [],
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

      permutations(restOfElements, newBranchCollector, resultCollector);
    } else {
      logger.debug(`FINISH BRANCH: ${newBranchCollector}`);

      resultCollector.push(newBranchCollector);
    }
  }

  return resultCollector;
};

export function problem0024(): null {
  const result = null;

  const inputElements = 'ABCD'.split('');

  const totalPermutations = permutations(inputElements);

  logger.debug(`result ${String(result)}`);

  return result;
}

export default { problem0024 };
