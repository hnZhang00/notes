function reverse(arr) {
  var l = 0, r = arr.length - 1;
  while (l < r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
}

console.log(reverse([1,2,3,4,5,6]))