/**================================== 二分查找 **/

/**
 * @description 已排序的顺序表（数组），因为要使用下标
 */

function binarySearch<T>(array: T[], target: T) {
  // 无符号整数
  let low = 0;
  let height = array.length - 1;
  let mid = 0;

  // 细节1. 考虑：[1,2]，查找2， 就需要low===height
  while (low <= height) {
    mid = low + ((height - low) >> 1); // 细节2.
    // mid = ~~((low + height) / 2);

    // 或者
    // mid = low + ~~((height-low) / 2)
    // 其中low+height 肯定不会溢出。 low+height可能会溢出

    if (target < array[mid]) {
      height = mid - 1; // 细节3. mid已经判断过了，不能再包含mid
    } else if (target > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1; // 没有找到
}

export default binarySearch;
