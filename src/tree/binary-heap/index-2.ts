type CompareFn = (a: number, b: number) => number;

/**
 * 上浮新插入的元素，即最后一个元素
 * @param array 二叉堆
 * @param type 最小堆，最大堆
 */
function upAdjust(array: any[], type: 'minHeap' | 'maxHeap') {
  const temp = array[array.length - 1];

  let childIndex = array.length - 1;
  let parentIndex = ~~((childIndex - 1) / 2); // 向下取整
  while (childIndex > 0 && (type === 'minHeap' ? temp < array[parentIndex] : temp > array[parentIndex])) {
    // TODO 将来调整
    // 注意：JS array不存在数组下标溢出错误，目前采用的是严谨的边界

    array[childIndex] = array[parentIndex];

    // 一轮循环结尾
    childIndex = parentIndex;
    parentIndex = ~~((parentIndex - 1) / 2);
  }

  array[childIndex] = temp;
}

/**
 * 下沉父节点
 * @param array 待调整的二叉堆
 * @param parentIndex 父节点索引
 * @param length 堆的长度
 */
function downAdjust(array: any[], parentIndex: number, length: number) {
  const initParentIndex = parentIndex;
  const temp = array[parentIndex];
  let childIndex = 2 * parentIndex + 1; // 左子节点

  // 有可能到了 最后一个非叶子节点，没有右节点，故不能 childIndex+1<length;
  while (childIndex < length) {
    // TODO 注意，JS不需要，但其他语言可能会缓冲区溢出
    if (childIndex + 1 < length && array[childIndex] > array[childIndex + 1]) {
      // 右节点小
      childIndex++;
    }

    if (temp < array[childIndex]) {
      // 父节点小于 左、右节点，无需调整
      break;
    }

    array[parentIndex] = array[childIndex];

    // 一轮循环结尾
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1; // 左子节点
  }

  array[parentIndex] = temp;
}

/**
 * 将一个无需的数组，调整为最小堆
 * @param {array} 无序的数组
 */
function buildHeap(array: any[]) {
  // 从最后一个非叶子节点开始，依次对父节点做“下沉”调整
  // (array.length-2) / 2 向下取整得到最后一个非节点节点
  for (let i = ~~(array.length - 2) / 2; i--; i >= 0) {
    downAdjust(array, i, array.length);
  }
}

export {};
