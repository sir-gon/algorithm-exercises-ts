import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node';
import {
  build_tree,
  flat_tree,
  swap_branch,
  swapNodes,
  __INITIAL_LEVEL__
} from './swap_nodes_algo';
import TEST_CASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('test_build_tree_empty', () => {
    expect.assertions(1);

    const t_input: number[][] = [];
    const t_to_test = build_tree(t_input);
    const t_result = flat_tree(t_to_test);
    const expected = [1];

    expect(t_result).toStrictEqual(expected);
  });

  it('test_build_malformed_tree', () => {
    expect.assertions(1);

    const t_input: number[][] = [[], []];
    const t_to_test = build_tree(t_input);
    const t_result = flat_tree(t_to_test);
    const expected = [1];

    expect(t_result).toStrictEqual(expected);
  });

  it('test_swap_branch empty', () => {
    expect.assertions(1);

    const t_input: null = null;
    const t_result: Node<number> | null = swap_branch(t_input);
    const expected = null;

    expect(t_result).toStrictEqual(expected);
  });

  it('test_swap_branch', () => {
    expect.assertions(1);

    const t_input: Node<number> = new Node<number>(__INITIAL_LEVEL__);
    t_input.left = new Node<number>(2);
    t_input.right = new Node<number>(3);
    const t_result: number[] = flat_tree(swap_branch(t_input));
    const expected: number[] = [3, 1, 2];

    expect(t_result).toStrictEqual(expected);
  });

  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const t_to_test = build_tree(test.nodes);
      const t_result = flat_tree(t_to_test);

      expect(t_result).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const t_result: number[][] = swapNodes(test.nodes, test.queries);

      expect(t_result).toStrictEqual(test.expected);
    });
  });
});
