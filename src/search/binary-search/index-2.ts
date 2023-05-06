/**
 * @description 完善，针对重复的应该默认返回第一个重复的位置
 * @returns 返回目标值索引，找不到-1
 */
function binarySearch2<T>(array: T[], target: T) {
  let low = 0;
  let height = array.length - 1;
  let mid = 0;
  let firstIndex = -1;

  while (low <= height) {
    mid = low + ((height - low) >> 1);

    if (target < array[mid]) {
      height = mid - 1;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else {
      firstIndex = mid;
      height = mid - 1; // 细节1——要左移
    }
  }

  return firstIndex;
}

export default binarySearch2;
