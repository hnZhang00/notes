// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

function reverse(s) {
  var len = s.length;
  if (len <= 1) return s;

  var i = 0, j = len - 1, mid = len / 2;
  for (; i <= mid && j >= mid; i++, j--) {
    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
}

console.log(reverse(['a','b','c','d']))
