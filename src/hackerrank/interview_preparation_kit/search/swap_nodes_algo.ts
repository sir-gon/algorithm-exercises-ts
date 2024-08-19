/**
 * @link Problem export functioninition [[docs/hackerrank/interview_preparation_kit/search/swap-nodes-algo.md]]
 */

import { Node } from '../../lib/Node';

// CONSTANTS
const __INITIAL_LEVEL__: number = 1;
const __ROOT_VALUE__: number = 1;
const __LEAF_VALUE__: number = -1;

export function callback_collect_nodes(
  root: Node<number>,
  collect: Record<number, Node<number>[]>,
  level: number
): void {
  if (collect?.[level] === undefined) {
    collect[level] = [root];
  } else {
    collect[level].push(root);
  }
}

export function callback_collect_flat(
  root: Node<number>,
  collect: Record<number, Node<number>[]>,
  level: number
): void {
  const _level: number = 0 * level; // set a unique key to use dict as a list

  if (collect?.[_level] === undefined) {
    collect[_level] = [root];
  } else {
    collect[_level].push(root);
  }
}

export function traverse_in_order_collector(
  root: Node<number>,
  collect: Record<number, Node<number>[]>,
  level: number,
  callbackFn: (
    root: Node<number>,
    collect: Record<number, Node<number>[]>,
    level: number
  ) => void
): Record<number, Node<number>[]> {
  if (root.left !== null) {
    traverse_in_order_collector(root.left, collect, level + 1, callbackFn);
  }

  callbackFn(root, collect, level);

  if (root.right !== null) {
    traverse_in_order_collector(root.right, collect, level + 1, callbackFn);
  }

  return collect;
}

export function build_tree(indexes: number[][]): Node<number> {
  const indexesCopy: number[][] = [...indexes];
  const root: Node<number> = new Node<number>(__ROOT_VALUE__);
  const node_collector: Record<number, Node<number>[]> = {};

  while (indexesCopy.length > 0) {
    traverse_in_order_collector(
      root,
      node_collector,
      __INITIAL_LEVEL__,
      callback_collect_nodes
    );

    const last_level: number = parseInt(
      Object.keys(node_collector)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .shift() ?? '0'
    );

    for (
      let i = 0;
      i < Math.min(indexesCopy.length, node_collector[last_level]?.length);
      i++
    ) {
      const current_node: Node<number> = node_collector[last_level][i];
      const new_element: number[] = indexesCopy.shift() ?? [];

      if ((new_element?.[0] ?? __LEAF_VALUE__) != __LEAF_VALUE__) {
        current_node.left = new Node<number>(new_element[0]);
      }
      if ((new_element?.[1] ?? __LEAF_VALUE__) != __LEAF_VALUE__) {
        current_node.right = new Node<number>(new_element[1]);
      }
    }
  }

  return root;
}

export function flat_tree(root: Node<number>): number[] {
  let node_collector: Record<number, Node<number>[]> = {};

  node_collector = traverse_in_order_collector(
    root,
    node_collector,
    __INITIAL_LEVEL__,
    callback_collect_flat
  );

  const last_level: number = parseInt(
    Object.keys(node_collector)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .shift() ?? '0'
  );

  const output: number[] = [];
  node_collector[last_level].forEach((node: Node<number>) => {
    output.push(node.data);
  });

  return output;
}

export function swapNodes(indexes: number[][], queries: number[]): number[][] {
  return [];
}

export default { swapNodes };
