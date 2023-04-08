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

/**
     A
   /   \
  B     C
 / \   /
D   E F
     /
    G
*/

/**
            A
          /   \
         B     C
        / \   / \
       D   E F   G
 */

/**================================== 数字树 **/
const A1 = createNode('1');
const A2 = createNode('2');
const A3 = createNode('3');
const A4 = createNode('4');
const A5 = createNode('5');
const A6 = createNode('6');

// A 树的根节点
export { A as TREE_A, A1 as TREE_A1 };
