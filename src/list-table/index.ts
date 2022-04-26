export { ListTable } from './1-simple';
export class PNode {
  public data: any;
  public next: PNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}
