import { describe, expect, it } from '@jest/globals';

import { build_tree, flat_tree, swapNodes } from './swap_nodes_algo';
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
