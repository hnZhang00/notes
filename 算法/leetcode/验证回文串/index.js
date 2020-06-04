// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false


function isPalindrome(s) {
  if (s < 2) return true;
  var l = 0, r = s.length - 1, reg = /[0-9a-zA-Z]/;
  while (l < r) {
    var left = s[l], right = s[r];
    var lFlag = !reg.test(left), rFlag = !reg.test(right);
    if (lFlag || rFlag) {
      lFlag && l++;
      rFlag && r--;
      continue;
    }
    if (!isNaN(left)) {
      if (left !== right) return false;
    } else {
      if (left.toUpperCase() !== right.toUpperCase()) return false;
    }
    l++;
    r--;
  }
  return true;
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
