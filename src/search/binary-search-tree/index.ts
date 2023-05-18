interface BinaryTreeNode<T> {
  data: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

class BinarySearchTree<T> {
  public head: BinaryTreeNode<T> = null;

  // 循环版
  find(target: T): boolean {
    if (this.head === null) return false;

    let cur = this.head;
    while (cur) {
      if (target < cur.data) {
        cur = cur.left;
      } else if (target > cur.data) {
        cur = cur.right;
      } else {
        return true;
      }
    }

    return false;
  }
  minNode() {
    if (null === this.head) {
      return null;
    }

    let cur = this.head;
    while (cur && cur.left) {
      cur = cur.left;
    }

    return cur;
  }

  maxNode() {
    if (null === this.head) {
      return null;
    }

    let cur = this.head;
    while (cur && cur.right) {
      cur = cur.right;
    }

    return cur;
  }

  // 循环版
  insert(data: T) {
    const insertNode = createNode(data);

    if (!this.head) {
      this.head = insertNode;
      return;
    }

    let cur = this.head;
    while (cur) {
      if (insertNode.data < cur.data) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = insertNode;
          return;
        }
      } else {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = insertNode;
          return;
        }
      }
    }
  }
}

function createNode<T>(data: T) {
  return {
    data,
    left: null,
    right: null,
  };
}

export default BinarySearchTree;
