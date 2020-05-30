// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

function getMajorityElement(nums) {
  var numsMap = {}, maxCount = 0, maxCountNum;
  nums.forEach(num => {
    numsMap[num] = numsMap[num] ? numsMap[num] + 1 : 1;
    if (numsMap[num] > maxCount) {
      maxCount = numsMap[num];
      maxCountNum = num;
    }
  });

  return maxCountNum;
}

console.log(getMajorityElement([1,2,1,3,1]))