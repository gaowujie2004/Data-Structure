import BinarySearchTree from '../binary-search-tree';
import { test, expect, describe, beforeEach } from '@jest/globals';

describe('BinarySearchTree insert', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('should insert first node', () => {
    bst.insert(3);
    expect(bst.head.data).toBe(3);
  });

  test('should insert smaller', () => {
    bst.insert(3);
    bst.insert(1);
    expect(bst.head.left.data).toBe(1);
  });

  test('should insert larger', () => {
    bst.insert(3);
    bst.insert(5);
    expect(bst.head.right.data).toBe(5);
  });

  test('should insert smallest', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(1);
    expect(bst.head.left.left.data).toBe(1);
  });

  test('should insert largest', () => {
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    expect(bst.head.right.right.data).toBe(5);
  });

  test('should maintain BST order', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(4);
    expect(bst.head.data).toBe(3);
    expect(bst.head.left.data).toBe(1);
    expect(bst.head.right.data).toBe(4);
  });

  test('should not insert duplicate node', () => {
    bst.insert(3);
    bst.insert(3);
    expect(bst.head.data).toBe(3);
    expect(bst.head.left).toBeNull();
  });

  test('should insert left and right children', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(5);
    expect(bst.head.left.data).toBe(1);
    expect(bst.head.right.data).toBe(5);
  });

  test('should insert full binary tree', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(5);
    bst.insert(0);
    bst.insert(2);
    bst.insert(4);
    expect(bst.head.data).toBe(3);
    expect(bst.head.left.data).toBe(1);
    expect(bst.head.left.left.data).toBe(0);
    expect(bst.head.left.right.data).toBe(2);
    expect(bst.head.right.data).toBe(5);
    expect(bst.head.right.left.data).toBe(4);
  });

  test('should handle inserting into empty tree', () => {
    bst.insert(3);
    expect(bst.head.data).toBe(3);
  });

  test('should handle inserting when there is only left node', () => {
    bst.insert(1);
    bst.insert(3);
    expect(bst.head.data).toBe(1);
    expect(bst.head.right.data).toBe(3);
  });

  test('should handle inserting when there is only right node', () => {
    bst.insert(3);
    bst.insert(1);
    expect(bst.head.data).toBe(3);
    expect(bst.head.left.data).toBe(1);
  });
});

describe('二叉搜索树查找', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('应该找到插入的节点', () => {
    bst.insert(3);
    expect(bst.find(3)).toBe(true);
  });

  test('应该找不到未插入的节点', () => {
    expect(bst.find(3)).toBe(false);
  });

  test('应该在复杂树中找到节点', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(4);
    bst.insert(0);
    bst.insert(2);
    expect(bst.find(2)).toBe(true);
  });

  test('应该在复杂树中找不到节点', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(4);
    bst.insert(0);
    bst.insert(2);
    expect(bst.find(5)).toBe(false);
  });

  test('应该找到左子节点', () => {
    bst.insert(3);
    bst.insert(1);
    expect(bst.find(1)).toBe(true);
  });

  test('应该找到右子节点', () => {
    bst.insert(3);
    bst.insert(5);
    expect(bst.find(5)).toBe(true);
  });

  test('应该找到左孙子节点', () => {
    bst.insert(3);
    bst.insert(1);
    bst.insert(0);
    expect(bst.find(0)).toBe(true);
  });
});

describe('二次搜索树-minValue', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('有序排列', () => {
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    expect(bst.minNode().data).toBe(1);
    bst.insert(5);
    expect(bst.minNode().data).toBe(1);

    bst = new BinarySearchTree<number>();
    bst.insert(5);
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(1);
    expect(bst.maxNode().data).toBe(5);
    bst.insert(0);
    expect(bst.maxNode().data).toBe(5);
  });
});
