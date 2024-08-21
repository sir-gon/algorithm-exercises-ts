/**
 * @link Problem export functioninition [[docs/hackerrank/interview_preparation_kit/search/swap-nodes-algo.md]]
 */

import { logger as console } from '../../../logger';
import { Node } from '../../lib/Node';

// CONSTANTS
export const __INITIAL_LEVEL__: number = 1;
export const __ROOT_VALUE__: number = 1;
export const __LEAF_VALUE__: number = -1;

export function callback_collect_nodes(
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

export function callback_collect_flat(
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

export function traverse_in_order_collector(
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
    traverse_in_order_collector(root?.left, collect, level + 1, callbackFn);
  }

  callbackFn(root, collect, level);

  if (root?.right !== null) {
    traverse_in_order_collector(root?.right, collect, level + 1, callbackFn);
  }

  return collect;
}

export function build_tree(indexes: number[][]): Node<number> {
  const indexesCopy: number[][] = [...indexes];
  const root: Node<number> = new Node<number>(__ROOT_VALUE__);
  let node_collector: Record<number, Node<number>[]> = {};

  while (indexesCopy.length > 0) {
    node_collector = {};

    traverse_in_order_collector(
      root,
      node_collector,
      __INITIAL_LEVEL__,
      callback_collect_nodes
    );

    const last_level: number = parseInt(
      Object.keys(node_collector)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .shift() as string
    );

    const level_size = Math.min(
      indexesCopy.length,
      node_collector[last_level]?.length
    );
    for (let i = 0; i < level_size; i++) {
      const current_node: Node<number> = node_collector[last_level][i];
      const new_element: number[] = indexesCopy.shift() as Array<number>;

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

export function flat_tree(root: Node<number> | null): number[] {
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
      .shift() as string
  );

  const output: number[] = [];
  node_collector[last_level].forEach((node: Node<number>) => {
    output.push(node.data);
  });

  return output;
}

export function swapNodes(indexes: number[][], queries: number[]): number[][] {
  const tree: Node<number> = build_tree(indexes);
  const output: number[][] = [];
  let node_collector: Record<number, Node<number>[]> = {};

  traverse_in_order_collector(
    tree,
    node_collector,
    __INITIAL_LEVEL__,
    callback_collect_nodes
  );

  node_collector = Object.fromEntries(
    Object.entries(node_collector).sort(([a], [b]) => parseInt(a) - parseInt(b))
  );

  let flattened_tree: number[] = flat_tree(tree);

  console.debug(`Plain tree: ${flattened_tree}`);

  for (const query in queries) {
    for (const [level, node_list] of Object.entries(node_collector)) {
      const t_level: number = parseInt(level);

      if (t_level % queries[query] == 0) {
        for (const node of node_list) {
          // swap branches
          [node.left, node.right] = [node.right, node.left];
        }
      }
    }

    flattened_tree = flat_tree(tree);
    output.push(flattened_tree);
  }

  return output;
}

export default { swapNodes, __INITIAL_LEVEL__ };
