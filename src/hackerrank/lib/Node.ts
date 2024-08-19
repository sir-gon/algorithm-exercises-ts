/* istanbul ignore file */

export class Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  data: T;

  constructor(data: T) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

export default { Node };
