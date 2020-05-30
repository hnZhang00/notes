
function rotate(nums, k) {
  var len = nums.length;
  for (i = 0; i < nums.length; i++) {
    if (!len) break;
    var nextIndex = (i + k) % nums.length;
    if (nextIndex === i) {
      len--;
      continue;
    }
    var previous = nums[i];
    while (true) {
      len--;
      var next = nums[nextIndex];
      nums[nextIndex] = previous;
      previous = next;
      nextIndex = (nextIndex + k) % nums.length;
      if (nextIndex === i) {
        nums[nextIndex] = previous;
        len--;
        break;
      }
    }
  }
};

var nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums)