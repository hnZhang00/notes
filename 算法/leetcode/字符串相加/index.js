// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

function addStrings(num1, num2) {
  var result = '', pre = 0, m = num1.length, n = num2.length;
  while (m > 0 && n > 0) {
    var value = parseInt(num1[--m]) + parseInt(num2[--n]) + pre;
    result = value % 10 + result;
    pre = Math.floor(value / 10);
  }
  if (n > 0) {
    num1 = num2;
    m = n;
  }

  while (m > 0) {
    var value = parseInt(num1[--m]) + pre;
    result = value % 10 + result;
    pre = Math.floor(value / 10);
  }

  if (pre) result = pre + result;
  return result;
}


console.log(addStrings('120', '999000'))
