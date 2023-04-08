import { createElement } from '../index';
import type { Element } from '../index';

enum StackId {
  One = 1,
  Two = 2,
}

export { ArrayStack, SharedStack, ListStack, ListTableStack };

/**================================== 顺序存储：数组实现**/
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
      // 紧挨着就已经满了
      return null;
    }
    // 两栈，压栈向中间靠拢
    if (stackId === StackId.One) {
      this.array[++this.top1] = data;
    }
    if (stackId === StackId.Two) {
      this.array[--this.top2] = data;
    }

    this.size++;
    return data;
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

class ListTableStack<T> {
  protected top: Element<T>;
  protected size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  public push(data: T) {
    const element = createElement(data);
    element.next = this.top;

    this.top = element;
    this.size++;
    return data;
  }

  public pop() {
    if (this.top === null) {
      return null;
    }

    const oldTopNode = this.top;
    this.top = oldTopNode.next;

    this.size--;
    return oldTopNode.data;
  }

  public peek() {
    return this.top ? this.top.data : null;
  }

  get length() {
    return this.size;
  }
}

/**================================== 优点：相当于链式栈，生成的指令会少几个，但需要注意，可能要动态扩容 **/
class ArrayStack2<T> {
  private maxLength: number;
  private size: number;
  private topIndex: number;
  private array: Array<T>;

  constructor(maxLength: number) {
    this.maxLength = maxLength;
    this.size = 0;
    this.topIndex = -1; // 标识这是初始化，说明是个空栈
    this.array = new Array(maxLength);
  }

  push(data: T) {
    if (this.topIndex + 1 === this.maxLength) {
      // TODO 考虑动态扩容
      return null;
    }

    this.array[++this.topIndex] = data;
    this.size++;
    return data;
  }

  pop() {
    if (this.topIndex === -1) {
      return null;
    }
    let resData: T;
    resData = this.array[this.topIndex];
    this.array[this.topIndex--] = null; // 不设置为null不太好，如果数组成员是对象，就得及时释放。
    this.size--;
  }

  get getSize() {
    return this.size;
  }
}

enum STACK_ID {
  Left,
  Right,
}
class SharedStack2<T> {
  private leftIndex: number; // 栈1，栈顶索引
  private rightIndex: number; // 栈2，栈顶索引
  private array: Array<T>;
  private size: number;
  private maxLength: number;

  static StackID = STACK_ID;

  constructor(maxLength) {
    this.leftIndex = -1; // 标识初始栈1，栈顶索引
    this.rightIndex = maxLength; // 标识初始栈2 栈顶索引
    this.array = new Array(maxLength);
    this.size = 0;
    this.maxLength = maxLength;
  }

  push(data: T, stackId: STACK_ID): T | null {
    // leftIndex、rightIndex 向中间靠拢
    if (this.leftIndex + 1 === this.rightIndex) {
      return null;
    }

    if (stackId === STACK_ID.Left) {
      this.array[++this.leftIndex] = data;
    } else {
      this.array[++this.rightIndex] = data;
    }

    return data;
  }

  pop(stackId: STACK_ID): T | null {
    // 边界提前退出
    if ((stackId === STACK_ID.Left && this.leftIndex === -1) || (stackId === STACK_ID.Right && this.rightIndex === this.maxLength)) {
      return null;
    }

    this.size--;
    let resData: T;
    if (stackId === STACK_ID.Left) {
      resData = this.array[this.leftIndex];
      this.array[this.leftIndex] = null; // GC回收
      this.leftIndex--;
    } else {
      resData = this.array[this.rightIndex];
      this.array[this.rightIndex] = null;
      this.rightIndex++;
    }

    return;
  }
}
