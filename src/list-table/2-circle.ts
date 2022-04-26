/**================================== 循环链表，首尾相连 **/
// 为了使空链表与非空链表处理一致，我们通常设一个头结点，
// 使用「尾指针」
// 头尾相等时 => 空链表
import { PNode } from './index';
export class CircleListTable {
  private Rear: PNode; // 尾，为了方便最后一个插入
  private Head: PNode; // 头节点 - 为了方便操作，并不是第一个有效节点
  private size: number;

  constructor() {
    this.size = 0;
    this.Head = this.Rear = {
      data: null,
      next: null,
    };
  }

  test() {
    if (this.Head === this.Rear) {
      // 空链表
    }

    this.Head.next; // 第一个有效节点

    let p = this.Head;
    // 继续循环的条件
    p.next !== this.Head;
  }
}
