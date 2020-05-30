// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s) {
  if (!s) return true;
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    }
    if (char === ')' && stack.pop() !== '(') return false;
    if (char === ']' && stack.pop() !== '[') return false;
    if (char === '}' && stack.pop() !== '{') return false;
  }
  return stack.length === 0;
}

console.log(isValid('({})[]'))
