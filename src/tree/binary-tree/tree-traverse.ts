import { A } from './tree-data';
import type { PNode } from './tree-data';

function firstTraverseRoot(node: PNode) {
  // 1. 先遍历根节点
  // 2. 再先序遍历 左子树
  // 3. 左子树遍历完了，再先序遍历右子树

  console.log('-- 节点：', node.data);

  if (node.left !== null) {
    firstTraverseRoot(node.left);
  }

  if (node.right !== null) {
    firstTraverseRoot(node.right);
  }
}

function firstWhileRoot(node: PNode) {
  const stack = [] as PNode[];
  let treeNode = node;

  while (treeNode !== null || stack.length !== 0) {
    // 迭代访问左子节点，并入栈
    while (treeNode !== null) {
      console.log(treeNode.data);
      stack.push(treeNode);
      treeNode = treeNode.left;
    }

    // 走到这里 说明 栈顶 treeNode.left -> null
    // 若没有左子节点，则弹出栈顶节点，访问右子节点
    if (stack.length !== 0) {
      treeNode = stack.pop();
      treeNode = treeNode.right;
    }
  }
}

// 后序遍历 - 循环方式
function houWhileRoot(node: PNode) {
  const stack = [] as PNode[];
  let currentNode = node;
  let lastNode: PNode = null;

  while (currentNode !== null || stack.length !== 0) {
    while (currentNode !== null) {
      // 一直遍历 左子节点，直到没有为止，那么栈顶就是，最后的左叶子节点
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    // 此时栈顶就是，最后的左叶子节点

    /**
     * 程序流程到这里有两种可能：
     * 1、左子树遍历完了
     * 2、回溯，因为左节点遍历过了，该轮到右节点了。（重）
     */
    currentNode = stack[stack.length - 1];
    if (currentNode.right === null || currentNode.right === lastNode) {
      // 栈顶节点 左、右节点都空
      // 或者栈顶节点 左遍历过了，右也遍历过了
      console.log(currentNode.data);
      lastNode = currentNode;
      currentNode = null;
      stack.pop();
    } else {
      // current.right
      currentNode = currentNode.right;
      // 继续重复
    }
  }
}

// houWhileRoot(A);

// firstTraverseRoot(A);

// 层序遍历 —— 非递归
function cengTranerse(currentNode: PNode) {
  // 遍历当前节点，将当前节点 左、右子节点放到队列中
  let queue: PNode[] = [];
  queue.push(currentNode);

  while (queue.length !== 0) {
    // 先遍历当前节点，然后再孩子
    const node = queue.shift();
    console.log('层序遍历非递归，节点：', node.data);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

// 层序遍历 —— 递归
(() => {
  const queue: PNode[] = [];
  queue.push(A);

  function cengTranerse2() {
    const currentNode = queue.shift();
    console.log('层序遍历，递归：', currentNode.data);

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    if (queue.length !== 0) {
      cengTranerse2();
    }
  }

  cengTranerse2();
})();
