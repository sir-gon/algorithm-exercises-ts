import { nullable } from '../helpers';
import { BNode } from './BNode';

export default class BNodeBuilder<T = number> extends BNode<T> {
  static buildBNodeTree<T = number>(
    dataTree: nullable<T[][]> = null,
    i = 0,
    j = 0
  ): nullable<BNode<T>> {
    if (!dataTree) return null;

    if (dataTree[i]?.[j]) {
      const resultNode = new BNode(dataTree[i][j]);

      if (dataTree[i + 1] && dataTree[i + 1][j] && dataTree[i + 1][j + 1]) {
        // Next left coordinates: [i + 1][j]
        resultNode.setLeft(BNodeBuilder.buildBNodeTree(dataTree, i + 1, j));

        // Next rigth coordinates: [i + 1][j + 1]
        resultNode.setRight(
          BNodeBuilder.buildBNodeTree(dataTree, i + 1, j + 1)
        );
      }

      return resultNode;
    }
    return null;
  }

  static buildBNodeTreeWeight(
    dataTree: nullable<number[][]> = null,
    i = 0,
    j = 0,
    rootValue: nullable<number> = 0,
    leafCollector: nullable<number[]> = null
  ): nullable<BNode<number>> {
    if (!dataTree) return null;

    if (dataTree[i]?.[j]) {
      const resultNode = new BNode<number>(dataTree[i][j] + (rootValue ?? 0));

      if (dataTree[i + 1] && dataTree[i + 1][j] && dataTree[i + 1][j + 1]) {
        // Next left coordinates: [i + 1][j]
        resultNode.setLeft(
          BNodeBuilder.buildBNodeTreeWeight(
            dataTree,
            i + 1,
            j,
            resultNode.getValue(),
            leafCollector
          )
        );

        // Next rigth coordinates: [i + 1][j + 1]
        resultNode.setRight(
          BNodeBuilder.buildBNodeTreeWeight(
            dataTree,
            i + 1,
            j + 1,
            resultNode.getValue(),
            leafCollector
          )
        );
      }

      if (resultNode.isLeaft()) {
        const value = resultNode.getValue();
        if (leafCollector && value != null) {
          leafCollector.push(value);
        }
      }

      return resultNode;
    }
    return null;
  }
}

export { BNodeBuilder };
