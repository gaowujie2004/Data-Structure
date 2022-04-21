/**
 * 链表实现的栈。
 * 数组实现的栈。
 */
export {};

class CycleQueue<T> {
  private array: T[];
  private front: number; // 队头
  private rear: number; // 队尾

  constructor(maxLength: number) {
    this.array = new Array<T>(maxLength);
    this.front = this.rear = 0;
  }

  queue(data: T) {
    /**
     * [  A, B，   ]
     */

    if ((this.rear + 1) % this.array.length === this.front) {
      throw new Error('队列已满');
    }
    this.array[this.rear] = data;
    this.rear = (this.rear + 1) % this.array.length;
  }

  deQueue() {
    // 删除队头，同时改变队头索引
    if (this.rear === this.front) {
      throw new Error('队列为空');
    }

    const deData = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.array.length;

    return deData;
  }
}
