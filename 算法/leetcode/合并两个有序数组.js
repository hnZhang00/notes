function merge(nums1, m, nums2, n) {
  var len = m-- + n--;
  while (len) {
    if (n < 0 || (m >= 0 && nums1[m] > nums2[n])) {
      nums1[--len] = nums1[m--];
    } else {
      nums1[--len] = nums2[n--];
    }
  }
}


var nums1 = [1,2,3,0,0,0]
var nums2 = [2,5,6]
merge(nums1, 3, nums2, 3)
console.log(nums1)