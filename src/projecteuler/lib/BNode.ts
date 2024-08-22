import { nullable } from '../helpers';

export default class BNode<T> {
  value: nullable<T>;

  l: nullable<BNode<T>>;

  r: nullable<BNode<T>>;

  constructor(
    value: nullable<T | BNode<T>> = null,
    l: nullable<T | BNode<T>> = null,
    r: nullable<T | BNode<T>> = null
  ) {
    this.value = null;
    this.l = null;
    this.r = null;

    this.setValue(value);
    this.setLeft(l);
    this.setRight(r);
  }

  setValue(value: nullable<T | BNode<T>>): this {
    if (value instanceof BNode) {
      this.value = value.getValue();
    } else {
      this.value = value;
    }

    return this;
  }

  getValue(): nullable<T> {
    return this.value;
  }

  setLeft(left: nullable<T | BNode<T>>): undefined {
    if (left === null || left === undefined) {
      this.l = null;

      return;
    }

    if (left instanceof BNode) {
      this.l = left;
    } else {
      this.l = new BNode<T>(left, null, null);
    }
  }

  getLeft(): nullable<BNode<T>> {
    return this.l;
  }

  setRight(right: nullable<T | BNode<T>>): undefined {
    if (right === null || right === undefined) {
      this.r = null;

      return;
    }

    if (right instanceof BNode) {
      this.r = right;
    } else {
      this.r = new BNode<T>(right, null, null);
    }
  }

  getRight(): nullable<BNode<T>> {
    return this.r;
  }

  isLeaft(): boolean {
    if (!this.l && !this.r) return true;

    return false;
  }
}

export { BNode };
