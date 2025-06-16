import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node';
import { Tree, swapNodes, __INITIAL_LEVEL__ } from './swap_nodes_algo';
import TEST_CASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('test_buildTree_empty', () => {
    expect.assertions(4);

    const input: number[][] = [];
    const tree: Tree = new Tree(input);
    const expected: number[] = [1];

    expect(tree.flatTree()).toStrictEqual(expected);
    expect(tree.getRoot()).not.toBeNull();
    expect(tree.getRoot()).toBeInstanceOf(Node);
    expect(tree.getRoot().data).toBe(__INITIAL_LEVEL__);
  });

  it('test_build_malformed_tree', () => {
    expect.assertions(4);

    const input: number[][] = [[], []];
    const tree: Tree = new Tree(input);
    const tresult: number[] = tree.flatTree();
    const expected: number[] = [__INITIAL_LEVEL__];

    expect(tresult).toStrictEqual(expected);
    expect(tree.getRoot()).not.toBeNull();
    expect(tree.getRoot()).toBeInstanceOf(Node);
    expect(tree.getRoot().data).toBe(__INITIAL_LEVEL__);
  });

  it('build tree and flattened tree test cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((test) => {
      const tree = new Tree(test.nodes);
      const tResult = tree.flatTree();

      expect(tResult).toStrictEqual(test.flattened);
    });

    expect(TEST_CASES).toHaveLength(4);
  });

  it('swapNodes test cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((test) => {
      const tResult: number[][] = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(4);
  });
});
