
function merge(nums1, m, nums2, n) {
  var i = m + n - 1;
  while (m && n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i--] = nums1[--m];
    } else {
      nums1[i--] = nums2[--n];
    }
  }
  while (n > 0) {
    nums1[i--] = nums2[--n];
  }
}

var nums1 = [1, 2, 3, 0, 0, 0], nums2 = [0, 0, 0, 5, 6];
merge(nums1, 3, nums2, 5)
console.log(nums1)
