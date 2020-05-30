// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

function removeDuplicates(nums) {
  if (nums.length <= 1) return nums;
  var now = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[now++] = nums[i];
    }
  }
  return now;
}

var nums = [1,1,2,3,3,3,4,4,5,6,6,6,6,7];
var len = removeDuplicates(nums);
for (var i = 0; i < len; i++) {
  console.log(nums[i])
}
