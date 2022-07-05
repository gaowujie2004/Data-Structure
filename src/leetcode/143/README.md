# 143 重排链表

## recursive，递归：

重排的直观思路是，一个指针从 head，一个从 tail 分别向中间访问合并，直到中间节点，但是单链表不指向其前驱节点，所以没办法直接实现该方式。（但链表不是循环双向链表）

但如果使用递归遍历链表时，递归函数执行完成回溯到方法时，本质上实现了从后继向前访问，而如果我们利用递归函数的返回值实现从头部向后的访问，就实现了同步从 head 和 tail 向中间访问，并且节点一一对应。

作者：chinatom
链接：https://leetcode.cn/problems/reorder-list/solution/yi-ci-di-gui-by-chinatom-k2pr/
