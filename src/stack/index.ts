import { createElement } from '../index';
import type { Element } from '../index';

/**
 * 大话数据结构 —— 栈（逻辑结构）
 * 顺序存储实现
 */
class ArrayStack<T> {
  private maxLength: number;
  private array: Array<T>;
  public top: number; // 栈顶元素指针

  constructor(maxLength: number) {
    this.array = new Array<T>(maxLength);
    this.maxLength = maxLength;
    this.top = -1;
  }
  push(el: T) {
    if (this.top === this.maxLength - 1) {
      return new Error('栈满了');
    }

    this.array[++this.top] = el;
  }

  pop() {
    if (this.top === -1) {
      throw new Error('空栈');
    }

    const resData = this.array[this.top];
    this.array[this.top] = null;
    this.top--;

    return resData;
  }
}

/**================================== 顺序存储：两栈共享空间 **/
class SharedStack<T> {
  public top1: number; // 栈1 栈顶指针索引
  public top2: number; // 栈2 栈顶指针索引
  public size: number;
  private array: Array<T>;
  private maxLength: number;

  constructor(maxLength: number) {
    this.array = new Array<T>(maxLength);
    this.maxLength = maxLength;
    this.size = 0;
    this.top1 = -1;
    this.top2 = maxLength;
  }
  push(data: T) {
    if (this.top1 + 1 === this.top2) {
      throw new Error('满了');
    }
  }

  pop() {
    if (this.top === -1) {
      throw new Error('空栈');
    }

    const resData = this.array[this.top];
    this.array[this.top] = null;
    this.top--;

    return resData;
  }
}

/**
 * 链式存储
 */
class ListStack<T> {
  public top: PNode<T>; // 链表的 第一个节点
  public size: number;
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(el: PNode<T>) {
    el.next = this.top;
    this.top = el;
    this.size++;

    return el;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('空栈');
    }
    const popElement = this.top;
    this.top = popElement.next;
    this.size--;

    return popElement;
  }
}
