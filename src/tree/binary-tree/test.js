const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

function test(root) {
  let retArr = [];

  function impl(root, retArr) {
    if (!root) return;

    if (root.left) {
      impl(root.left);
    }
    if (root.right) {
      impl(root.right);
    }

    console.log(root.left?.val, root.right?.val);
  }

  impl(root);

  return retArr;
}

test(root);
