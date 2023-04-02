/**
 * 队列 —— 线性逻辑结构，是一种受限制的「线性表」
 * 其存储方式有两种：1）顺序存储；2）链式存储
 * 线性表：是线性结构的统称，指的是数据和数据的逻辑关系，并不是数据和数据的物理关系
 */

import { createElement } from '../index';
import type { Element } from '../index';
export { QueueListTable, QueueCircle };

/**================================== 链式存储 **/
class QueueListTable<T> {
  public dummyHead: Element<T>; // 虚拟头节点，dummyHead.next 才是真正的队头节点
  public tail: Element<T>; // 队尾节点
  public size: number; // 节点个数

  constructor() {
    this.size = 0;
    // 虚拟头节点：为了方便操作。this.dummyHead.next 才是第一个有效节点(队头节点)
    this.dummyHead = this.tail = createElement(null);
  }

  enQueue(data: T) {
    const enQueueNode = createElement(data);
    this.tail.next = enQueueNode; // this.tail 上一次的队尾
    this.tail = enQueueNode; // 更新队尾
    this.size++;

    return data;
  }

  deQueue() {
    if (this.dummyHead === this.tail) {
      // 空队列
      return null;
    }

    const firstNode = this.dummyHead.next; // 队头节点
    this.dummyHead.next = firstNode.next;

    if (this.tail === firstNode) {
      // todo
      // 队列中，只有一个节点，此时队头和队尾相同。
      // 要额外处理一下。
      this.tail = this.dummyHead; // 把最后一个删除了，那就成空队列了。
    }
    this.size--;

    return firstNode;
  }
}

/**================================== 循环队列（顺序存储） **/
// 针对顺序存储时，出队一个元素，为了不整体移动
// 为了避免当只有一个元素时，队头和队尾重合使处理变得麻烦，所以引入两个指
// 针，front指针指向队头元素，rear指针指向队尾元素的下一个位置，这样当front等
// 于rear时，此队列不是还剩一个元素，而是空队列。
// 这样会有一个空位
class QueueCircle<T> {
  public front: number;
  public rear: number;
  public size: number; // 元素个数，并不是数组长度
  private array: Array<T>;
  private maxLength: number;

  constructor(maxLength: number) {
    this.size = 0;
    this.front = this.rear = 0;
    this.array = new Array<T>(maxLength);
    this.maxLength = maxLength;
  }

  enQueue(data: T) {
    // 判断满
    if ((this.rear + 1) % this.maxLength === this.front) {
      throw new Error('满了');
    }
    this.array[this.rear] = data;
    this.rear = (this.rear + 1) % this.maxLength;
    this.size++;
  }

  deQueue() {
    if (this.front === this.rear) {
      throw new Error('队列为空');
    }
    const deQueueElement = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.maxLength;
    this.size--;

    return deQueueElement;
  }
}
