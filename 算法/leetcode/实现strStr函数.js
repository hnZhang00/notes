function strStr(haystack, needle) {
  if (!haystack && !needle || haystack && !needle) return 0;
  if (!haystack && needle) return -1;

  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) continue;
    for (var j = 1; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

console.log(strStr("hello", "ll"))