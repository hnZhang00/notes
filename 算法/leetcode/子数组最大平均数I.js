function findMaxAverage(nums, k) {
  var max = -Number.MAX_SAFE_INTEGER;
  for (var i = 0; i <= nums.length - k; i++) {
    var sum = 0;
    for (var j = i; j < i + k; j++) {
      sum += nums[j];
    }
    max = Math.max(max, sum / k);
  }
  return max;
}

console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0,1,1,3,3], 4))