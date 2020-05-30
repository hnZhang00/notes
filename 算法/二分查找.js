function findIndex (arr, value) {
  if (!arr || !arr.length || value === void 0) return -1;
  var low = 0, high = arr.length;

  while (low < high) {
    var mid = Math.floor((low + high) / 2);

    if (value === arr[mid]) return mid;
    if (value > arr[mid]) {
      low = mid + 1;
      continue;
    }
    high = mid;
  }
  return -1;
}

console.log(findIndex([0,1,2,3,4,5,6,7], 6))