import { TREE_A } from './tree-data';
import type { PNode } from './tree-data';

/**================================== 1、先序遍历——递归 **/
function firstTraversalRootRecursion(root: PNode) {
  if (!root) return;

  console.log(root.data);
  if (root.left) {
    firstTraversalRootRecursion(root.left);
  }
  if (root.right) {
    firstTraversalRootRecursion(root.right);
  }
}

/**================================== 1、先序遍历——迭代 **/
function firstTraversalRootWhile(root: PNode) {
  if (!root) return null;

  const stack = [root];
  let currentRoot: PNode = null;
  while ((currentRoot = stack.pop())) {
    console.log(currentRoot.data);

    const { left, right } = currentRoot;
    if (right) {
      stack.push(currentRoot.right); // 先进后出
    }
    if (left) {
      stack.push(currentRoot.left); // 先进后出
    }
  }
}

/**================================== 2、中序遍历——递归 **/
function middleTraversalRootRecursion(root: PNode) {
  if (!root) return;

  if (root.left) {
    firstTraversalRootRecursion(root.left);
  }
  console.log(root.data);
  if (root.right) {
    firstTraversalRootRecursion(root.right);
  }
}

/**================================== 2、中序遍历——迭代 **/
// 先左、后根、最后右
function middleTraversalRootWhile(root: PNode) {
  if (!root) return;

  const stack = [];
  let currentRoot = root;

  while (stack.length || currentRoot) {
    while (currentRoot) {
      stack.push(currentRoot);
      currentRoot = currentRoot.left;
    }

    // 没有左子树了，那就出栈，出栈这个元素就是子根。
    currentRoot = stack.pop();
    console.log(currentRoot.data);
    /**================================== 右子树，继续判断，和递归压栈出栈对应。 **/
    currentRoot = currentRoot.right;
  }
}

/**================================== 3、后序遍历——递归 **/
function lastTraversalRootRecursion(root: PNode) {
  if (!root) return;

  if (root.left) {
    lastTraversalRootRecursion(root.left);
  }
  if (root.right) {
    lastTraversalRootRecursion(root.right);
  }
  console.log(root.data);
}

/**================================== 3、后序遍历——迭代 **/
function lastTraversalRootWhile(root: PNode) {
  if (!root) return;

  const stack = [];
  let currentRoot = root;
  let lastVisit: PNode = null;
}
