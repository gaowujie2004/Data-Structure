/**
 * 队列 —— 线性逻辑结构，是一种受限制的「线性表」
 * 其存储方式有两种：1）顺序存储；2）链式存储
 * 线性表：是线性结构的统称，指的是数据和数据的逻辑关系，并不是数据和数据的物理关系
 */

import { createElement } from '../index';
import type { Element } from '../index';
export { QueueArray, QueueListTable };

/**================================== 链式存储 **/
class QueueListTable<T> {
  public front: Element<T>; // 队头节点
  public rear: Element<T>; // 队尾节点
  public size: number; // 节点个数

  constructor() {
    this.size = 0;
    // 头节点，为了方便操作， this.head.next 才是第一个有效节点(队头节点)
    this.front = this.rear = {
      data: null,
      next: null,
    };
  }

  enQueue(data: T) {
    const newNode = createElement(data);
    this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }

  deQueue() {
    if (this.front === this.rear) {
      // 空队列
      return null;
    }

    const firstNode = this.front.next; // 队头节点
    this.front.next = firstNode.next;

    if (this.rear === firstNode) {
      // todo
      // 队列中，只有一个节点，此时队头和队尾相同。
      // 要额外处理一下。
      this.rear = this.front; // 把最后一个删除了，那就成空队列了。
    }
    this.size--;
    return firstNode;
  }
}

/**================================== 顺序存储 **/
class QueueArray<T> {
  constructor() {}
}

/**================================== 循环队列（顺序存储） **/
// 针对顺序存储时，出队元素位置复用。
class QueueCircle<T> {}
