function treeList(tree) {
  const retList = [];

  function dfs(node) {
    if (!node) return;

    retList.push(node);
    const children = Array.isArray(node.children) ? node.children : [node.children];
    children.forEach((child) => {
      dfs(child);
    });

    delete node.children;
  }

  dfs(tree);
  return retList;
}

const tree = {
  id: 1,
  text: '节点1',
  parentId: 0,
  children: [
    {
      id: 2,
      text: '节点1_1',
      parentId: 1,
      children: [
        {
          id: 7777,
          text: '节点1_1_1',
          parentId: 2,
        },
      ],
    },
    {
      id: 3,
      text: '节点1_2',
      parentId: 1,
    },
  ],
};

console.log(treeList(tree));
