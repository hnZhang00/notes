// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。


function moveZeroes(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== 0) continue;
    var j = i + 1;
    for (; j < nums.length; j++) {
      if (nums[j]) break;
    }
    if (nums[j] !== 0) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    if (j === nums.length - 1) break;
  }
}

var nums = [0,1,0,3,12,0,0,0,1,0,4]
moveZeroes(nums)
console.log(nums)
