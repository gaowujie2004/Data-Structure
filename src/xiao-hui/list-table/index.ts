/**
 * 单向链表
 */

class PNode {
  public data: any;
  public next: PNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class ListTable {
  public Head: PNode; // 尾指针
  public Last: PNode; // 头指针
  public size: number; // 链表长度

  constructor() {
    this.size = 0;
    this.Head = this.Last = null;
  }

  get(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('超范围');
    }

    /**
     * { A, B,  C,  D, E, F }
     *      👆🏻
     * 循环1次即可，因为是 p.next.
     */
    let p = this.Head;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }

    return p;
  }

  insert(index: number, data: any) {
    const insertNode = new PNode(data);

    if (index < 0 || index > this.size) {
      throw new Error('超出链表范围');
    }
    if (this.size === 0) {
      // 空链接
      // todo: 处理尾指针
      this.Head = this.Last = insertNode;
    } else if (index === 0) {
      /**
       * 「首插入」
       * { A,  B,  C,  D,  E,  F }
       *   👆🏻
       */
      insertNode.next = this.Head;
      this.Head = insertNode;
    } else if (index < this.size) {
      /**
       * 「中间插入」
       * index 位置处的 上一个节点 和 当前节点，
       * 示例中的： B 和 C 节点要知道
       *
       * { A,  B,  C,  D,  E,  F }
       *       👆🏻
       */

      /**
       * 再看看这里， index -> 2
       * { A,  B,    C,  D,  E,  F }
       *             👆🏻
       *
       * { A,  B,  [],    C,  D,  E,  F }
       *           新的    👆🏻
       */

      const prevNode = this.get(index - 1); // 目标节点的上一个节点 -> B
      insertNode.next = prevNode.next; // prevNode.next 就是 currentNode
      prevNode.next = insertNode;
    } else if (index === this.size) {
      /**
       * 「尾部插入」
       * { A,  B,  C,      null }
       *           👆🏻
       *          this.Last
       */
      this.Last.next = insertNode;
      this.Last = insertNode;
      // todo: 处理尾指针
    }

    this.size++;
  }

  remove(index: number) {
    let removeNode: PNode;

    if (index === 0) {
      /**
       * 「头删除」
       * { A,  B,  C,  D,  E,  F }
       *   👆🏻
       */
      removeNode = this.Head;
      this.Head = this.Head.next;
    } else if (index === this.size - 1) {
      /**
       * 「尾删除」
       * { A,  B,  C,  D,  E,  F }
       *                       👆🏻
       */
      const lastPrevNode = this.get(index - 1);

      removeNode = lastPrevNode.next;

      lastPrevNode.next = null;
      this.Last = lastPrevNode;
    } else {
      /**
       * 找到目标节点的 上一个节点
       * 和目标节点的 下一个节点
       *
       * { A, B,  C,  D, E, F }
       *          👆🏻
       */
      const removePrevNode = this.get(index - 1); // -> B

      removeNode = removePrevNode.next;

      const removeNextNode = removePrevNode.next.next; // -> D
      removePrevNode.next = removeNextNode;
    }

    this.size--;
    return removeNode;
  }

  update(index: number, newData: any) {
    this.get(index).data = newData;
  }

  traverse() {
    // let tempNode = this.Head;
    // for (let i = 0; i < this.size; i++) {
    //   console.log('-- 节点：', tempNode.data);
    //   tempNode = tempNode.next;
    // }

    let tempNode = this.Head;
    while (tempNode !== null) {
      console.log('--节点：', tempNode.data);
      tempNode = tempNode.next;
    }
  }
}

const myListTable = new ListTable();
myListTable.insert(0, 'A');
myListTable.insert(1, 'B');
myListTable.insert(2, 'C');
myListTable.insert(3, 'D');
myListTable.insert(4, 'E');
myListTable.insert(3, 'DD');

myListTable.traverse();
