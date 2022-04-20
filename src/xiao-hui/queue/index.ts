import { type PNode, Node } from '../../index';

/**
 * @title 队列 —— 线性逻辑结构
 * 链式存储方式，正常的链表做一些限制
 */
class QueueListTable<T> {
  public front: PNode<T>; // 队头节点
  public rear: PNode<T>; // 队尾节点
  public size: number; // 节点个数

  constructor() {
    this.size = 0;
    // 头节点为了方便操作， this.head.next 才是第一个有效节点(队头节点)
    this.front = this.rear = {
      data: null,
      next: null,
    };
  }

  enQueue(data: T) {
    const newNode = new Node(data);
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

/**================================== TEST **/
const queue = new QueueListTable<number>();
queue.enQueue(111);
queue.enQueue(222);
queue.enQueue(333);
queue.enQueue(444);
