class MyArray {
  private size: number;
  private array: number[];
  private MAX_LENGTH: number;

  constructor(maxLength: number) {
    this.MAX_LENGTH = maxLength;
    this.array = new Array(maxLength);
    this.size = 0;
  }

  /**================================== 数组插入操作 **/
  insert(index: number, data: number) {
    /**
     * [ 2, 4, 6, 8, 10 ]
     * index -> 2,  index 及其以后的元素都要整体向后移动，
     * 那么谁先移动？ 最后一个先移动 —— 符合现实。
     */
    if (this.size === this.MAX_LENGTH) {
      return false;
    }
    if (index < 0 || index > this.size) {
      return false;
    }

    for (let i = this.size - 1; i >= index; i--) {
      /**
       * [ 2, 4, 6, 8, 10, x ]
       *         👆🏻
       */

      // 把旧位置的值  ->  新位置
      this.array[i + 1] = this.array[i];
    }

    this.array[index] = data;
    this.size++;
  }

  remove(index: number) {
    /**
     * 从 index，及其以后的元素，都向前移动。
     * 那么谁先移动？当然是删除的那个了，从前往后移动。
     */

    /**
     * [ 2, 4, 6, 8, 10, x ]
     *            👆🏻
     */
    if (this.size === this.MAX_LENGTH) {
      return false;
    }
    if (index < 0 || index > this.size) {
      return false;
    }

    // todo: 注意这里的 this.size - 1;
    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.size--;
  }

  update(index: number, data: number) {
    if (this.size === this.MAX_LENGTH) {
      return false;
    }
    if (index < 0 || index > this.size) {
      return false;
    }

    this.array[index] = data;
  }

  traverse() {
    for (let i = 0; i < this.size; i++) {
      console.log('\n', this.array[i]);
    }
  }
}

const meArr = new MyArray(6);
console.log('--执行了');

meArr.insert(0, 90);
meArr.insert(1, 91);
meArr.insert(2, 92);
meArr.insert(3, 93);
meArr.insert(3, 95);

meArr.traverse();
