// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

function reverse(x) {
  var isNegative = x < 0;
  x = isNegative ? (x + '').substring(1) : (x + '');
  x = x.split('').reverse().join('') - 0;

  var max = isNegative ? Math.pow(2, 31) : (Math.pow(2, 31) - 1);
  if (x > max) return 0;
  if (isNegative) return x * -1;
  return x;
}

console.log(reverse(-12391241231239))