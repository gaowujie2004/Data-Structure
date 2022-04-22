/**================================== 应用 **/

function fib(n: number) {
  let arr = new Array<number>(n);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < n; i++) {}
}

/**================================== 四则运算： 中缀表达式 -> 后缀表达式 **/
/**
 * 1、数字输出
 * 2、符号压栈，准备压栈的符号优先级必须是大于等于栈顶符号；
 *      否则，全部出栈，依次输出
 * 3、若准备入栈的是 ），则出栈所有，直到 （ 出栈为止，出栈的符号输出。
 */
function toInfix(str: string) {
  let resChar: string[] = [];
  for (let i = 0; i < str.length; i++) {}
}
