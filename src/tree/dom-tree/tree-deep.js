const { body } = require('./data');

function getDeepNumber(node) {
  if (!node.childNodes.length) {
    return 0;
  }

  let resList = node.childNodes.map((child) => getDeepNumber(child));

  console.log(resList);
  return Math.max(...resList) + 1;
}

console.log(getDeepNumber(body));
