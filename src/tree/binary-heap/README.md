# 二叉堆

是一种逻辑结构，用于快速的找出最值（最小、最大值）。
时间复杂度：

- 插入，O(logN);，主要有堆自我调整的逻辑
- 除最值，O(logN);， 主要有堆自我调整的逻辑
- 查看最值，O(1); 在插入和删除时，堆已经自我调整过了。

## 存储结构

使用顺序存储结构，即顺序表（C 中的数组，元素地址是连续的）

## 推论

parentIndex;
leftChildIndex = 2×parent+1
rightChildIndex = 2×parent+2

---

parentIndex = (childIndex-1)/2 ; 向下取整
