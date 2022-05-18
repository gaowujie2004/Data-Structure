/**================================== 先序遍历 **/
// 递归 and 非递归

const div1 = {
  name: 'div',
  id: 'div1',
  children: [
    {
      name: 'p',
      id: 'p1',
      children: [
        {
          id: 'text1',
        },
      ],
    },
    {
      name: 'p',
      id: 'p2',
      children: [
        {
          id: 'text2',
        },
      ],
    },
    {
      name: 'p',
      id: 'p3',
      children: [
        {
          id: 'text3',
        },
      ],
    },
    {
      name: 'p',
      id: 'p4',
      children: {
        id: 'text4',
      },
    },
  ],
};

const node = {
  name: 'body',
  id: 'body',
  children: [
    div1,
    {
      name: 'span',
      id: 'span1',
    },
    {
      name: 'span',
      id: 'span2',
    },
  ],
};

/**================================== 递归 实现 **/
function dfsRecursion(root) {
  if (!root) {
    return;
  }
  // todo：遍历先输出根
  console.log(root.id);

  // 非叶子节点， 单节点, 或者空
  const children = Array.isArray(root.children) ? root.children : [root.children];
  children.forEach(dfsRecursion);
}
dfsRecursion(node);

/**================================== 循环 实现 **/
function dfsWhile(root) {
  if (!root) {
    return;
  }

  const stack = [root];
  const visitedNodes = [];
  let currentNode;
  while (stack.length) {
    currentNode = stack.pop();

    if (!currentNode) {
      continue;
    }
    if (visitedNodes.includes(currentNode)) {
      continue;
    }

    // todo: 先序遍历
    console.log(currentNode.id);

    if (!currentNode.children) {
      continue;
    }

    Array.isArray(currentNode.children) ? currentNode.children.forEach((child) => stack.push(child)) : stack.push(currentNode.children);
  }
}

console.log('\n\n\n');
dfsWhile(node);
