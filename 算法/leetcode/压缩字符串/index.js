// 给定一组字符，使用原地算法将其压缩。

// 压缩后的长度必须始终小于或等于原数组长度。

// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

// 在完成原地修改输入数组后，返回数组的新长度。

//  

// 进阶：
// 你能否仅使用O(1) 空间解决问题？


function compress(chars) {
  var write = 1, count = 1;
  for (var read = 1; read <= chars.length; read++) {
    if (chars[read] === chars[read - 1]) {
      count++;
      continue;
    }
    if (count > 1) {
      count += '';
      for (var i = 0; i < count.length; i++) {
        chars[write++] = count[i];
      }
    }
    if (chars[read] !== void 0) {
      chars[write++] = chars[read];
    }
    count = 1;
  }
  chars.splice(write)

  return chars;
}

var chars = ["a","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]
// var chars = ["a","a","b","b","b"]
compress(chars)
console.log(chars)
