import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node';
import { swapNodes, build_tree, flat_tree } from './swap_nodes_algo';
import BIG_TEST_CASES from './swap_nodes_algo.big.testcases.json';

describe('swap_nodes_algo', () => {
  it('build_tree and plain test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const t_to_test: Node<number> = build_tree(test.nodes);
      const t_result: number[] = flat_tree(t_to_test);

      expect(t_result).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const t_result: number[][] = swapNodes(test.nodes, test.queries);

      expect(t_result).toStrictEqual(test.expected);
    });
  });
});
