// 双数组实现链表（线性表链式存储）
function twoArray() {
  const data = []; // data 数组存储数据
  const next = []; // next 数组存储指针， 存储下一个数据的 数组索引

  // 往index后面添加一个pos节点，数据是val
  function addNode(index, pos, val) {
    next[pos] = next[index];

    next[index] = pos;

    data[pos] = val;
  }

  const head = 3;
  data[head] = 'a';
  addNode(head, 5, 'b');
  addNode(5, 7, 'c');
  addNode(7, 2, 'd');
  addNode(2, 1, 'e');
  addNode(7, 4, 'f');

  // 遍历
  let p = head,
    ret = '';
  while (p) {
    ret += `${data[p]} -> `;
    p = next[p];
  }
  console.log(p);
}

/**
 * 3     5     7    4      2      1
 * a ->  b  -> c -> f  ->  d  ->  e
 *
 *
 *
 * data[ head ]   data[  next[head] ]   才是前驱后序的关系。
 * data[ next[0] ]    data[  next[ next[0] ]   ]
 *
 *
 *
 * 链是通过 next[head]  链接起来的
 */
