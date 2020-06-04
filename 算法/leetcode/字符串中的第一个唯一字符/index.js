// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 案例:

// s = "leetcode"
// 返回 0.

// s = "loveleetcode",
// 返回 2.
//  

// 注意事项：您可以假定该字符串只包含小写字母。


function firstUniqChar(s) {
  var charSet = new Set();
  for (var i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) continue;
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) break;
    }
    if (j === s.length) return i;
    charSet.add(s[i]);
  }
  return -1;
}

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("ll"))
