import { ListTable } from '../1-simple';

const list = new ListTable();
console.clear();

list.insert(0, 11);
list.insert(0, -11);
list.insert(2, 33);
list.insert(2, -33);
list.insert(4, 44);

list.remove(5);

list.traverse();
