// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var targetIndex = nums.indexOf(target - nums[i]);
    if (targetIndex !== -1) {
      return [i, targetIndex];
    }
  }
  return []
}

console.log(twoSum([1, 2, 7, 11, 15], 9))