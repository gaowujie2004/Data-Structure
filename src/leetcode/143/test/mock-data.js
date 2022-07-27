const head = {
  val: 1,
  next: null,
};
const node2 = {
  val: 2,
  next: null,
};
const node3 = {
  val: 3,
  next: null,
};
const node4 = {
  val: 4,
  next: null,
};
const node5 = {
  val: 5,
  next: null,
};

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

module.exports = {
  data: head,
};
