/**
 * 静态二叉树 —— 采用链式存储方式，即链表来存储二叉树
 */
export interface PNode {
  data: any;
  left: PNode | null;
  right: PNode | null;
}

function createNode(data: any) {
  return {
    data,
    left: null,
    right: null,
  } as PNode;
}

const A = createNode('A');
const B = createNode('B');
const C = createNode('C');
const D = createNode('D');
const E = createNode('E');
const F = createNode('F');
const G = createNode('G');

A.left = B;
A.right = C;

B.left = D;
B.right = E;

C.left = F;

F.left = G;

// A 树的根节点
export { A };
