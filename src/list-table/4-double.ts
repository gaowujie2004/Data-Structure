export class DoubleListTable {
  public Head: DoubleNode; // 头结点，不是第一个有效节点
  public first: DoubleNode;
  public tail: DoubleNode;
  public size: number;

  constructor() {
    this.first = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(newNode: DoubleNode) {
    // first
    // tail
    // size
    if (!this.first) {
      // 创建
      this.first = newNode;
      this.tail = newNode;
    } else {
      // 添加
      newNode.next = this.first;

      this.first.prev = newNode;
      this.first = newNode;
    }

    this.size++;
  }

  remove(curr: DoubleNode) {
    if (curr === this.first) {
      // 头
      this.first = curr.next;
      curr.prev = null;
    } else if (curr === this.tail) {
      // 尾
    } else {
      // 中间
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }

    this.size--;
  }

  removeLast() {
    this.size--;
  }
}

class DoubleNode {
  public data: any;
  public prev: DoubleNode;
  public next: DoubleNode;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
