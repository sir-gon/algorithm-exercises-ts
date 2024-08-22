import { describe, expect, it } from '@jest/globals';

import { Tree, swapNodes } from './swap_nodes_algo';
import BIG_TEST_CASES from './swap_nodes_algo.big.testcases.json';

describe('swap_nodes_algo', () => {
  it('buildTree and plain test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const tree: Tree = new Tree(test.nodes);
      const tresult: number[] = tree.flatTree();

      expect(tresult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const tResult = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    });
  });
});
