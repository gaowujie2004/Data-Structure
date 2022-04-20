/**
 * 大话数据结构 —— 栈（逻辑结构）
 * 顺序存储实现
 */
class StackArray<T> {
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

/**
 * 大话数据结构 —— 栈（逻辑结构）
 * 顺序存储的实现，两栈共享空间
 * ** 其实还是一个数组 **
 * ** 相比于上一个好处是：不用动态扩容了，使用这种数据结构，就是一个栈增长时，另一个栈在缩短。
 */
class StackTwo<T> {
  private maxLength: number;
  private array: Array<T>;
  public top1: number; // 栈1 栈顶指针索引
  public top2: number; // 栈2 栈顶指针索引

  constructor(maxLength: number) {
    this.array = new Array<T>(maxLength);
    this.maxLength = maxLength;
    this.top1 = -1;
    this.top2 = maxLength;
  }
  push(el: T) {
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
 * 大话数据结构 —— 栈
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

interface PNode<T> {
  data: T;
  next: PNode<T>;
}
function PNode<T = any>(data: T) {
  // 工厂函数
  return {
    data,
    next: null,
  } as PNode<T>;
}
