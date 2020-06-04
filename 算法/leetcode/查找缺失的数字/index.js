// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

// 示例 1:

// 输入: [3,0,1]
// 输出: 2
// 示例 2:

// 输入: [9,6,4,2,3,5,7,0,1]
// 输出: 8

function missingNumber(nums) {
  var n = nums.length, numsMap = {};
  nums.forEach(num => {
    numsMap[num] = true;
  });
  while (n) {
    if (!numsMap[n]) return n;
    n--;
  }
  return '';
}

console.log(missingNumber([3,0,1]))
