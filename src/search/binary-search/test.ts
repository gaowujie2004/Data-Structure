import binarySearch from '.';

// 测试用例1：正常查找，包含目标值
const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target1 = 5;
console.log('Test case 1 result:', binarySearch(testArray1, target1) === 4); // 应该输出 4，因为 5 在索引 4 的位置

// 测试用例2：正常查找，不包含目标值
const testArray2 = [1, 2, 3, 4, 6, 7, 8, 9];
const target2 = 5;
console.log('Test case 2 result:', binarySearch(testArray2, target2) === -1); // 应该输出 -1，因为 5 不在数组中

// 测试用例3：空数组
const testArray3 = [];
const target3 = 5;
console.log('Test case 3 result:', binarySearch(testArray3, target3) === -1); // 应该输出 -1，因为空数组不包含任何元素

// 测试用例4：仅有一个元素且等于目标值
const testArray4 = [5];
const target4 = 5;
console.log('Test case 4 result:', binarySearch(testArray4, target4) === 0); // 应该输出 0，因为 5 在索引 0 的位置

// 测试用例5：仅有一个元素但不等于目标值
const testArray5 = [10];
const target5 = 5;
console.log('Test case 5 result:', binarySearch(testArray5, target5) === -1); // 应该输出 -1，因为 5 不在数组中

// 测试用例6：目标值在数组首部
const testArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target6 = 1;
console.log('Test case 6 result:', binarySearch(testArray6, target6) === 0); // 应该输出 0，因为 1 在索引 0 的位置

// 测试用例7：目标值在数组尾部
const testArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target7 = 9;
console.log('Test case 7 result:', binarySearch(testArray7, target7) === 8); // 应该输出 8，因为 9 在索引 8 的位置
