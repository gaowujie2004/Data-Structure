interface DoubleNode<T> {
  data: T;
  next: DoubleNode<T>;
  prev: DoubleNode<T>;
  readonly key: string;
}

function createNode<T>(data: T, key: string) {
  return {
    data,
    next: null,
    prev: null,
    key, // 重要
  } as DoubleNode<T>;
}

/**
 * 最近最久未访问淘汰算法
 * 具体细节：最近最近未使用的使用方式是 —— 将放入的链表依次按照入队顺序形成一个链表，然后谁被访问，就将其移动到队尾；以此类推，那么队头的元素就是最近最久未访问的。
 */
class LRU<T> {
  private hashMap: Map<string, DoubleNode<T>>;
  private tail: DoubleNode<T>; // 双向循环链表
  private limit: number; // 缓存上线

  constructor(limit: number) {
    this.hashMap = new Map();
    this.tail = createNode(null, '');
    this.tail.next = this.tail.prev = this.tail;
    this.limit = limit;
  }

  public get(key: string): T {
    let node = this.hashMap.get(key);
    if (!node) return null;

    this.refreshListNode(node);
    return node.data;
  }

  public put(key: string, data: T) {
    let currentNode = this.hashMap.get(key);

    if (currentNode) {
      // 刷新 + 设置新值
      if (data !== currentNode.data) {
        currentNode.data = data;
        this.refreshListNode(currentNode);
      }
    } else {
      currentNode = createNode(data, key);

      if (this.hashMap.size >= this.limit) {
        // 满了，删除头节点
        // this.hashMap.delete(key);
        const headNodeKey = this.removeListNode(this.tail.next); // TODO 我们需要知道被删除的头节点对应的key，然后从hasMap中删除
        this.hashMap.delete(headNodeKey);
      }

      this.hashMap.set(key, currentNode);
      this.appendListNode(currentNode);
    }
  }

  public remove(key: string) {
    const currentNode = this.hashMap.get(key);
    if (!currentNode) return;

    this.removeListNode(currentNode);
  }

  private removeListNode(current: DoubleNode<T>) {
    const next = current.next;
    // prev节点
    current.prev.next = next;
    // next节点
    next.prev = current.prev;
    // current
    current.prev = null;
    current.next = null;

    return current.key;
  }

  private appendListNode(node: DoubleNode<T>) {
    // 添加到链表尾
    const oldTail = this.tail;

    // 处理新加入的尾节点
    node.prev = oldTail;
    node.next = oldTail.next;

    oldTail.next = node;
    this.tail = node;
  }

  private refreshListNode(node: DoubleNode<T>) {
    // 刷新：删除节点，然后加到尾部
    if (node === this.tail) return;

    this.removeListNode(node);
    this.appendListNode(node);
  }
}
