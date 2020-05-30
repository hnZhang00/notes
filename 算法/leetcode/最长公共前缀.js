function longestCommonPrefix(strs) {
  if (!strs || !strs.length) return '';
  if (strs.length === 1) return strs[0];
  var first = strs[0], prefix = '';
  for (var i = 0; i < first.length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first[i]) return prefix;
    }
    prefix += first[i];
  }
  return prefix;
}


console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))