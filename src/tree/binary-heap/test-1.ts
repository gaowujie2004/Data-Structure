import { buildHeap } from '.';

const array1 = [5, 2, 8, 1, 4, 6, 3, 9, 7];
const expected1 = [1, 2, 3, 5, 4, 6, 8, 9, 7];

const array2 = [3, 2, 1, 4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];

const array3 = [1];
const expected3 = [1];

const array4 = [];
const expected4 = [];

buildHeap(array1);
console.log(JSON.stringify(array1) === JSON.stringify(expected1)); // true

buildHeap(array2);
console.log(JSON.stringify(array2) === JSON.stringify(expected2)); // true

buildHeap(array3);
console.log(JSON.stringify(array3) === JSON.stringify(expected3)); // true

buildHeap(array4);
console.log(JSON.stringify(array4) === JSON.stringify(expected4)); // true

import assert from 'assert';

// 测试用例
const testCases = [
  // 空数组
  {
    input: [],
    output: [],
  },
  // 一个元素的数组
  {
    input: [1],
    output: [1],
  },
  // 正常数组
  {
    input: [3, 2, 1, 5, 4, 7, 6, 8],
    output: [1, 2, 3, 5, 4, 7, 6, 8],
  },
  // 全部元素相等
  {
    input: [1, 1, 1, 1, 1, 1],
    output: [1, 1, 1, 1, 1, 1],
  },
  // 全部元素相等，但是乱序
  {
    input: [1, 1, 1, 1, 1, 1].sort(() => Math.random() - 0.5),
    output: [1, 1, 1, 1, 1, 1],
  },
  // 全部元素相等，但是倒序
  {
    input: [1, 1, 1, 1, 1, 1].reverse(),
    output: [1, 1, 1, 1, 1, 1],
  },
  // 常规数组，长度为奇数
  {
    input: [3, 2, 1, 5, 4, 7, 6],
    output: [1, 2, 3, 5, 4, 7, 6],
  },
  // 常规数组，长度为偶数
  {
    input: [3, 2, 1, 5, 4, 7, 6, 8],
    output: [1, 2, 3, 5, 4, 7, 6, 8],
  },
  // 重复元素，但是乱序
  {
    input: [3, 2, 1, 5, 4, 4, 4],
    output: [1, 2, 3, 5, 4, 4, 4],
  },
];

// 遍历测试用例
testCases.forEach(({ input, output }) => {
  // 复制一份原始数组，避免原数组被修改
  const array = input.slice();

  // 构建最小堆
  buildHeap(array);

  // 验证结果
  assert.deepStrictEqual(array, output);
});

console.log('All test cases passed!');
