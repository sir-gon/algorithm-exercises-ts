/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/swap-nodes-algo.md]]
 */

import { Node } from '../../lib/Node';

// CONSTANTS
const __INITIAL_LEVEL__ = 1;
const __ROOT_VALUE__ = 1;
const __LEAF_VALUE__ = -1;
const __RADIX__ = 10;

class Tree {
  root: Node<number>;

  nodeCollector: Record<number, Node<number>[]>;

  constructor(indexes: number[][]) {
    this.root = new Node(__ROOT_VALUE__);
    this.nodeCollector = {};
    this.nodeCollector[__INITIAL_LEVEL__] = [this.root];

    this.buildTree(indexes);
  }

  buildTree(indexes: number[][]): this {
    const indexesCopy = [...indexes];
    let currentLevel = __INITIAL_LEVEL__;

    while (indexesCopy.length > 0) {
      const levelSize = Math.min(
        indexesCopy.length,
        this.nodeCollector[currentLevel]?.length
      );

      const nextLevel = currentLevel + 1;

      if (levelSize > 0) {
        this.nodeCollector[nextLevel] = [];
      }

      for (let i = 0; i < levelSize; i++) {
        const currentNode = this.nodeCollector[currentLevel][i];
        const newElement = indexesCopy?.shift() ?? [];

        if ((newElement?.[0] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
          currentNode.left = new Node(newElement[0]);
          this.nodeCollector[nextLevel].push(currentNode.left);
        }
        if ((newElement?.[1] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
          currentNode.right = new Node(newElement[1]);
          this.nodeCollector[nextLevel].push(currentNode.right);
        }
      }

      if (this.nodeCollector[nextLevel].length > 0) {
        currentLevel = nextLevel;
      }
    }

    return this;
  }

  getRoot(): Node<number> {
    return this.root;
  }

  getCollector(): Record<number, Node<number>[]> {
    return this.nodeCollector;
  }

  flatTree(): number[] {
    const flatTreeCollector: Node<number>[] = [];

    function traverseInOrderFlat(node: Node<number>): void {
      if (node?.left !== null) {
        traverseInOrderFlat(node?.left);
      }

      if (node) {
        flatTreeCollector.push(node);
      }

      if (node?.right !== null) {
        traverseInOrderFlat(node?.right);
      }
    }

    traverseInOrderFlat(this.root);

    const output: number[] = [];
    flatTreeCollector.forEach((node) => {
      output.push(node.data);
    });

    return output;
  }
}

function swapNodes(indexes: number[][], queries: number[]): number[][] {
  const tree: Tree = new Tree(indexes);
  let nodeCollector: Record<number, Node<number>[]> = tree.getCollector();
  const output: number[][] = [];

  nodeCollector = Object.fromEntries(
    Object.entries(nodeCollector).sort(
      ([a], [b]) =>
        Number.parseInt(a, __RADIX__) - Number.parseInt(b, __RADIX__)
    )
  );

  for (const query of queries) {
    for (const [level, nodeList] of Object.entries(nodeCollector)) {
      const tLevel: number = Number.parseInt(level, __RADIX__);

      if (tLevel % query === 0) {
        for (const node of nodeList) {
          // swap branches
          [node.left, node.right] = [node.right, node.left];
        }
      }
    }

    output.push(tree.flatTree());
  }

  return output;
}

export default { swapNodes, Tree, __INITIAL_LEVEL__ };
export { swapNodes, Tree, __INITIAL_LEVEL__ };
