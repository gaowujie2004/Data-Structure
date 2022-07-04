var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head.next;
  let fast = slow.next;
  while (slow !== fast && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 无环
  if (slow !== fast) {
    return null;
  }

  // 有环
  slow = head; // slow或fast都可以
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

const one = {
  data: 3,
};

const two = {
  data: 2,
};

const three = {
  data: 0,
};

const four = {
  data: -4,
};

one.next = two;
two.next = three;
three.next = four;
four.next = two;

// detectCycle(one);
let obj = { name: 'GG' };
const ref = new WeakRef(obj);

setTimeout(() => {
  obj = null;
});
setTimeout(() => {
  console.log(ref.deref());
}, 5000);
