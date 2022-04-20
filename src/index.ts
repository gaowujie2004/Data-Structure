// import './xiao-hui/array/index';

import './xiao-hui/list-table';

export interface PNode<T> {
  data: T;
  next: PNode<T>;
}

export class Node<T> {
  public data: T;
  public next: PNode<T>;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
