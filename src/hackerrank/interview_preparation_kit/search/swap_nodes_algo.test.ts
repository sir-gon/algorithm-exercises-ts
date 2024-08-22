import { describe, expect, it } from '@jest/globals';

import { buildTree, flatTree, swapNodes } from './swap_nodes_algo';
import TEST_CASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('test_buildTree_empty', () => {
    expect.assertions(1);

    const tInput: number[][] = [];
    const tToTest = buildTree(tInput);
    const tResult = flatTree(tToTest);
    const expected = [1];

    expect(tResult).toStrictEqual(expected);
  });

  it('test_build_malformed_tree', () => {
    expect.assertions(1);

    const tInput: number[][] = [[], []];
    const tToTest = buildTree(tInput);
    const tResult = flatTree(tToTest);
    const expected = [1];

    expect(tResult).toStrictEqual(expected);
  });

  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const tToTest = buildTree(test.nodes);
      const tResult = flatTree(tToTest);

      expect(tResult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const tResult: number[][] = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    });
  });
});
