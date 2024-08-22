import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node';
import { swapNodes, buildTree, flatTree } from './swap_nodes_algo';
import BIG_TEST_CASES from './swap_nodes_algo.big.testcases.json';

describe('swap_nodes_algo', () => {
  it('buildTree and plain test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const tToTest: Node<number> = buildTree(test.nodes);
      const tResult: number[] = flatTree(tToTest);

      expect(tResult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const tResult: number[][] = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    });
  });
});
