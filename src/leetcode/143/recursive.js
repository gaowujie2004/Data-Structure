function reorderList(head, tail) {
  // 如果tail为null，说明已经递归到链表尾部，这时候需要重新连接尾部节点与头部节点，故返回head
  if (tail == null) {
    return head;
  }

  // 一直递归到尾部
  // returnNode 和左边节点很像，一直向右移动。
  const returnNode = reorderList(head, tail.next);

  // 回溯到方法，returnNode即为与tail对应的正向访问节点
  // 如果returnNode是null，说明处理完成，直接返回
  // 这个return，不是用来做递归临界的，也很好理解 reorderListImpl() 后面，你在return也溢出。
  if (returnNode == null) {
    return null;
  }
  // 如果returnNode或returnNode的后继等于tail，说明完成，注意tail即为尾节点，next需要set null
  // 即中间节点
  // 这个return，不是用来做递归临界的，也很好理解 reorderListImpl() 后面，你在return也溢出。

  if (returnNode == tail || returnNode.next == tail) {
    // returnNode === tail 节点个数为奇数时
    // returnNode.next === tail 节点个数为偶数时
    tail.next = null;
    return null;
  }

  // 这个return，不是用来做递归临界的，也很好理解 reorderListImpl() 后面，你在return也溢出。
  // 将尾部遍历节点指向对应的头部遍历节点的next，正向节点指向尾部遍历节点
  tail.next = returnNode.next;
  returnNode.next = tail; // returnNode 和左边节点很像，一直向右移动。
  // 返回头部向后访问的下一节点，其实是最开始的 returnNode.next
  return tail.next;
}

const head = {
  val: 1,
  next: null,
};
const node2 = {
  val: 2,
  next: null,
};
const node3 = {
  val: 3,
  next: null,
};
const node4 = {
  val: 4,
  next: null,
};
const node5 = {
  val: 5,
  next: null,
};

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 没有返回值，递归内部处理
reorderList(head, head);
head;
