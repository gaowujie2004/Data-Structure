import { createElement } from '../index';
import type { Element } from '../index';
enum StackId {
  One = 1,
  Two = 2,
}

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

  static StackNumber = StackId;
  constructor(maxLength: number) {
    this.array = new Array<T>(maxLength);
    this.maxLength = maxLength;
    this.size = 0;
    this.top1 = -1;
    this.top2 = maxLength;
  }
  push(data: T, stackId: StackId) {
    if (this.top1 + 1 === this.top2) {
      throw new Error('满了');
    }
    // 两栈，压栈向中间靠拢
    if (stackId === StackId.One) {
      this.array[++this.top1] = data;
    }
    if (stackId === StackId.Two) {
      this.array[--this.top2] = data;
    }

    this.size++;
  }

  pop(stackId: StackId) {
    let resData: T;
    if (stackId === StackId.One) {
      if (this.top1 === -1) {
        return null;
      }

      resData = this.array[this.top1];
      this.array[this.top1] = null;
      this.top1--;
    } else if (stackId === StackId.Two) {
      if (this.top2 === this.maxLength) {
        return null;
      }

      resData = this.array[this.top2];
      this.array[this.top2] = null;
      this.top2++;
    } else {
      throw new Error('stackId param is required');
    }

    return resData;
  }
}

/**================================== 链式存储 **/
class ListStack<T> {
  public top: Element<T>; // 栈顶元素
  public size: number;
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data: T) {
    const element = createElement(data);
    element.next = this.top;
    this.top = element;
    this.size++;

    return element;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('空栈');
    }
    const popElement = this.top;
    this.top = popElement.next;
    this.size--;

    return popElement.data;
  }
}
