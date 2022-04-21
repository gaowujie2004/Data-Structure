import { QueueListTable } from './index';

/**================================== TEST **/
const queue = new QueueListTable<number>();
queue.enQueue(111);
queue.enQueue(222);
queue.enQueue(333);
queue.enQueue(444);
