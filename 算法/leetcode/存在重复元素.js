function containsDuplicate(nums) {
  var numsMap = {};
  for (var i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]]) return true;
    numsMap[nums[i]] = 1;
  }
  return false;
}

console.log(containsDuplicate([1,2,3,1]))