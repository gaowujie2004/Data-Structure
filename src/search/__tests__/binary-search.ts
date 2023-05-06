import binarySearch from '../binary-search';
import { test, expect, describe, beforeEach } from '@jest/globals';

describe('二分查找', () => {
  let array;

  beforeEach(() => {
    // 每个测试用例执行前重新定义array
    array = [1, 2, 3, 4, 5];
  });

  test('应该能找到目标值', () => {
    expect(binarySearch(array, 2)).toBe(1);
    expect(binarySearch(array, 4)).toBe(3);
  });

  test('不应该找到目标值', () => {
    expect(binarySearch(array, 6)).toBe(-1);
  });

  test('应该能找到重复元素中的目标值', () => {
    array = [1, 2, 2, 3, 4];
    expect(binarySearch(array, 2)).toBe(1);
  });

  test('应处理边界情况', () => {
    array = [1, 2];
    expect(binarySearch(array, 2)).toBe(1);

    array = [1];
    expect(binarySearch(array, 1)).toBe(0);
    expect(binarySearch(array, 2)).toBe(-1);

    array = [];
    expect(binarySearch(array, 1)).toBe(-1);
  });

  test('应处理不同的数据分布', () => {
    array = [1, 3, 5, 7];
    expect(binarySearch(array, 2)).toBe(-1);
    expect(binarySearch(array, 6)).toBe(-1);
    expect(binarySearch(array, 4)).toBe(-1);
  });

  test('应覆盖所有的代码路径', () => {
    array = [1, 2, 3, 4, 5];
    expect(binarySearch(array, 1)).toBe(0);
    expect(binarySearch(array, 5)).toBe(4); //覆盖 height = array.length - 1的情况

    array = [1, 3, 5];
    expect(binarySearch(array, 2)).toBe(-1); //覆盖mid的计算过程

    array = [1, 2, 3, 4, 5, 6];
    expect(binarySearch(array, 4)).toBe(3); //覆盖 low = mid + 1的情况
    expect(binarySearch(array, 3)).toBe(2); //覆盖 height = mid - 1的情况

    array = [1, 3, 5, 7];
    expect(binarySearch(array, 6)).toBe(-1); //覆盖 while (low <= height)的边界情况
    //low = 3, height = 2, mid = 2, 所以height = mid - 1后退出循环
  });
});
