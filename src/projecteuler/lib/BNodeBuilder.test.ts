import { describe, expect, it } from '@jest/globals';
import { BNode } from './BNode';
import { BNodeBuilder } from './BNodeBuilder';

const data = [[75], [95, 64]];

describe('class BNodeBuilder for binary trees', () => {
  it('tree of BNode: building tree with null value', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTree();

    expect(tree).toBeNull();
  });

  it('tree of BNode: building tree with values', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTree(data, 0, 0);
    const treeStringify = JSON.stringify(tree);

    const comparedTree = new BNode(75, new BNode(95), new BNode(64));
    const comparedTreeStringify = JSON.stringify(comparedTree);

    expect(treeStringify).toBe(comparedTreeStringify);
  });

  it('tree of BNode: building tree with invalid coordinates', () => {
    expect.assertions(2);

    // invalid coordinates
    expect(BNodeBuilder.buildBNodeTree(data, 0, 5)).toBeNull();
    expect(BNodeBuilder.buildBNodeTree(data, 5, 5)).toBeNull();
  });
});

describe('class BNodeBuilder for binary weight trees', () => {
  it('tree of BNode: building Weight tree with null value', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTreeWeight();

    expect(tree).toBeNull();
  });

  it('tree of BNode: building Weight tree with values', () => {
    expect.assertions(2);

    // with default value for rootValue = 0
    let tree = BNodeBuilder.buildBNodeTreeWeight(data, 0, 0);
    const treeStringify = JSON.stringify(tree);
    let comparedTree = new BNode(75, new BNode(170), new BNode(139));
    const comparedTreeStringify = JSON.stringify(comparedTree);

    expect(treeStringify).toBe(comparedTreeStringify);

    // with rootValue = null
    tree = BNodeBuilder.buildBNodeTreeWeight(data, 0, 0, null);
    const treeStringify2 = JSON.stringify(tree);
    comparedTree = new BNode(75, new BNode(170), new BNode(139));
    const comparedTreeStringify2 = JSON.stringify(comparedTree);

    expect(treeStringify2).toBe(comparedTreeStringify2);
  });

  it('tree of BNode: building Weight tree with invalid coordinates', () => {
    expect.assertions(2);

    // invalid coordinates
    expect(BNodeBuilder.buildBNodeTreeWeight(data, 0, 5)).toBeNull();
    expect(BNodeBuilder.buildBNodeTreeWeight(data, 5, 5)).toBeNull();
  });
});
