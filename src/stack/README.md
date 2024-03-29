# 栈（stack）

操作受限制的**线性表**。
只能在栈顶进行操作，入栈和出栈只会影响到最后一个元素，不涉及其他元素的整体移动，
所以无论是以数组还是以链表实 现，入栈、出栈的时间复杂度都是 O(1) 。
因为都是在栈顶，即链表尾部操作

压栈，入栈。
弹栈，出栈。

栈是一种逻辑数据结构，是一种运算受限制的「线性表」，他的实现有两种存储方式（实现就是指用那种存储方式）。
可以用顺序存储结构 —— 数组来实现，也可以通过链式存储结构 —— 链表来实现。
逻辑数据结构，都要依赖物理存储结构来实现。

## 两栈共享空间

关键：一个栈在缩短，另一个栈在增长。
顺序存储的实现，两栈共享空间，其实还是一个数组。
相比于「普通顺序栈」好处是：不用动态扩容了，使用这种数据结构，就是一个栈增长时，另一个栈在缩短；
