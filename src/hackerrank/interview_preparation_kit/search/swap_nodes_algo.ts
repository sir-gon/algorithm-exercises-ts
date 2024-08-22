/**
 * @link Problem export functioninition [[docs/hackerrank/interview_preparation_kit/search/swap-nodes-algo.md]]
 */

import { logger as console } from '../../../logger';
import { Node } from '../../lib/Node';

// CONSTANTS
export const __INITIAL_LEVEL__: number = 1;
export const __ROOT_VALUE__: number = 1;
export const __LEAF_VALUE__: number = -1;
const __RADIX__ = 10;

export function callbackCollectNodes(
  root: Node<number> | null | undefined,
  collect: Record<number, Node<number>[]>,
  level: number
): void {
  if (root) {
    if (collect?.[level] === undefined) {
      collect[level] = [root];
    } else {
      collect[level].push(root);
    }
  }
}

export function callbackCollectFlat(
  root: Node<number> | null | undefined,
  collect: Record<number, Node<number>[]>,
  level: number
): void {
  const _level: number = 0 * level; // set a unique key to use dict as a list
  if (root) {
    if (collect?.[_level] === undefined) {
      collect[_level] = [root];
    } else {
      collect[_level].push(root);
    }
  }
}

export function traverseInOrderCollector(
  root: Node<number> | null | undefined,
  collect: Record<number, Node<number>[]>,
  level: number,
  callbackFn: (
    root: Node<number> | null | undefined,
    collect: Record<number, Node<number>[]>,
    level: number
  ) => void
): Record<number, Node<number>[]> {
  if (root?.left !== null) {
    traverseInOrderCollector(root?.left, collect, level + 1, callbackFn);
  }

  callbackFn(root, collect, level);

  if (root?.right !== null) {
    traverseInOrderCollector(root?.right, collect, level + 1, callbackFn);
  }

  return collect;
}

export function buildTree(indexes: number[][]): Node<number> {
  const indexesCopy: number[][] = [...indexes];
  const root: Node<number> = new Node<number>(__ROOT_VALUE__);
  let nodeCollector: Record<number, Node<number>[]> = {};

  while (indexesCopy.length > 0) {
    nodeCollector = {};

    traverseInOrderCollector(
      root,
      nodeCollector,
      __INITIAL_LEVEL__,
      callbackCollectNodes
    );

    const lastLevel: number = parseInt(
      Object.keys(nodeCollector)
        .sort((a, b) => parseInt(b, __RADIX__) - parseInt(a, __RADIX__))
        .shift() as string,
      __RADIX__
    );

    const levelSize = Math.min(
      indexesCopy.length,
      nodeCollector[lastLevel]?.length
    );
    for (let i = 0; i < levelSize; i++) {
      const currentNode: Node<number> = nodeCollector[lastLevel][i];
      const newElement: number[] = indexesCopy.shift() as Array<number>;

      if ((newElement?.[0] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
        currentNode.left = new Node<number>(newElement[0]);
      }
      if ((newElement?.[1] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
        currentNode.right = new Node<number>(newElement[1]);
      }
    }
  }

  return root;
}

export function flatTree(root: Node<number> | null): number[] {
  let nodeCollector: Record<number, Node<number>[]> = {};

  nodeCollector = traverseInOrderCollector(
    root,
    nodeCollector,
    __INITIAL_LEVEL__,
    callbackCollectFlat
  );

  const lastLevel: number = parseInt(
    Object.keys(nodeCollector)
      .sort((a, b) => parseInt(b, __RADIX__) - parseInt(a, __RADIX__))
      .shift() as string,
    __RADIX__
  );

  const output: number[] = [];
  nodeCollector[lastLevel].forEach((node: Node<number>) => {
    output.push(node.data);
  });

  return output;
}

export function swapNodes(indexes: number[][], queries: number[]): number[][] {
  const tree: Node<number> = buildTree(indexes);
  const output: number[][] = [];
  let nodeCollector: Record<number, Node<number>[]> = {};

  traverseInOrderCollector(
    tree,
    nodeCollector,
    __INITIAL_LEVEL__,
    callbackCollectNodes
  );

  nodeCollector = Object.fromEntries(
    Object.entries(nodeCollector).sort(
      ([a], [b]) => parseInt(a, __RADIX__) - parseInt(b, __RADIX__)
    )
  );

  let flattenedTree: number[] = flatTree(tree);

  console.debug(`Plain tree: ${flattenedTree}`);

  for (const query of queries) {
    for (const [level, nodeList] of Object.entries(nodeCollector)) {
      const tLevel: number = parseInt(level, __RADIX__);

      if (tLevel % query === 0) {
        for (const node of nodeList) {
          // swap branches
          [node.left, node.right] = [node.right, node.left];
        }
      }
    }

    flattenedTree = flatTree(tree);
    output.push(flattenedTree);
  }

  return output;
}

export default { swapNodes, __INITIAL_LEVEL__ };
