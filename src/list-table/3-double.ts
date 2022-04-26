export class DoubleListTable {
  public Head: DoubleNode; // 头结点，不是第一个有效节点
  public size: number;

  constructor() {
    this.Head = {
      data: 'Head',
      next: null,
      prev: null,
    };
    this.Head.prev = this.Head;
    this.Head.next = this.Head;
    this.size = 0;
  }

  insert(index: number, data) {
    if (index > this.size) {
      throw new Error('double 链表越界');
    }

    let insertNode = new DoubleNode(data);
    const p = this.getPrev(index); // index prevNode
    // 这两行，顺序可以变
    insertNode.prev = p;
    insertNode.next = p.next;

    // 下面两行，顺序不能变
    p.next.prev = insertNode;
    p.next = insertNode;

    this.size++;
  }

  delete(index: number) {
    if (this.Head.next === this.Head) {
      throw new Error('空链表');
    }

    // {   A,     B,   C   }
    //    prev   cur
    const deletePrev = this.getPrev(index);
    const deleteNode = deletePrev.next;

    deleteNode.next.prev = deletePrev;
    deletePrev.next = deleteNode.next;

    this.size--;
    return deleteNode;
  }

  // index 处的上一个node
  // 存在头节点
  private getPrev(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error('超范围');
    }

    if (index === this.size) {
      return this.Head.prev;
    }

    /**
     * { 头  A, B,  C,  D, E, F }
     *      👆🏻
     * 循环1次即可，因为是 p.next.
     */
    let p = this.Head;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }

    return p;
  }

  get(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('超范围');
    }

    if (index === this.size - 1) {
      return this.Head.prev;
    }

    /**
     * { 头  A, B,  C,  D, E, F }
     *      👆🏻
     * 循环1次即可，因为是 p.next.
     */
    let p = this.Head.next;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }

    return p;
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
