// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


function intersection(nums1, nums2) {
  var nums1Map = new Map(), section = new Set();
  for (var i = 0; i < nums1.length; i++) {
    nums1Map.set(nums1[i], true);
  }
  for (var i = 0; i < nums2.length; i++) {
    if (nums1Map.has(nums2[i])) section.add(nums2[i]);
  }

  return Array.from(section);
}

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))