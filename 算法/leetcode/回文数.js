// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

function isPalindrome(x) {
  x += '';
  var len = x.length, mid = len / 2;
  if (len === 1) return true;
  for (var i = 0, j = len - 1; i <= mid && j >= mid; i++, j--) {
    if (x[i] !== x[j]) return false;
  }
  return true;
}

console.log(isPalindrome(121))