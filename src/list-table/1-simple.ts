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

export class ListTable {
  public Head: PNode; // 尾指针
  public Rear: PNode; // 头结点，并不是第一个有效的节点
  public size: number; // 链表长度

  constructor() {
    this.size = 0;
    this.Head = this.Rear = {
      data: 'Head',
      next: null,
    };
  }

  insert(index: number, data: any) {
    if (index < 0 || index > this.size) {
      throw new Error('超出链表范围');
    }

    const insertNode = new PNode(data);
    const p = this.getPrev(index); // insert index prev
    insertNode.next = p.next;
    p.next = insertNode;

    // 尾指针处理
    if (this.size === 0 || index === this.size) {
      this.Rear = insertNode;
    }

    this.size++;
  }

  remove(index: number) {
    if (this.Head === this.Rear) {
      throw new Error('remove 失败，链表为空');
    }
    if (index >= this.size) {
      throw new Error('remove 失败，越界');
    }

    // { A,  B,  C,  D }
    //   x

    // { A,  B,  C,  D }
    //       x

    // { A,  B,  C,  D }
    //               x
    const removePrev = this.getPrev(index);
    const removeNode = removePrev.next;

    removePrev.next = removePrev.next.next;
    if (this.size === 1) {
      this.Rear = this.Head;
    }
    if (index === this.size - 1) {
      this.Rear = removePrev;
    }

    this.size--;
    return removeNode;
  }

  update(index: number, newData: any) {
    this.getPrev(index + 1).data = newData;
  }

  traverse() {
    // let tempNode = this.Head;
    // for (let i = 0; i < this.size; i++) {
    //   console.log('-- 节点：', tempNode.data);
    //   tempNode = tempNode.next;
    // }

    let tempNode = this.Head.next;
    while (tempNode !== null) {
      console.log('--节点：', tempNode.data);
      tempNode = tempNode.next;
    }
  }

  get(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('超范围');
    }

    if (index === this.size - 1) {
      return this.Rear;
    }

    let p = this.Head.next;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }

  private getPrev(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error('超范围');
    }

    if (index === this.size) {
      return this.Rear;
    }

    let p = this.Head;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }
}

// const myListTable = new ListTable();
// myListTable.insert(0, 'A');
// myListTable.insert(1, 'B');
// myListTable.insert(2, 'C');
// myListTable.insert(3, 'D');
// myListTable.insert(4, 'E');
// myListTable.insert(3, 'DD');

// myListTable.traverse();
