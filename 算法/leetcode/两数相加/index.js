
var twoSum = function(nums, target) {
  var numsMap = {};
  nums.forEach((num, index) => {
      if (numsMap[num]) return [numsMap[num]--, index];
      numsMap[target - num] = index + 1;
  });
  return [];
};

console.log(twoSum([2,7,11,15], 9))