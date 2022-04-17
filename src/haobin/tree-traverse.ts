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
  // 循环的方式「先序」遍历。
  const treeStack: PNode[] = [];
  let p: PNode = node;

  treeStack.push(p);
  while (treeStack.length !== 0) {
    const tempNode = treeStack.pop();

    if (tempNode !== null) {
      console.log('--访问节点：', tempNode.data);
      treeStack.push(tempNode.right);
      treeStack.push(tempNode.left);
    }
  }
}
