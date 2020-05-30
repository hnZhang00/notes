// 冒泡
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 快排
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr[pivotIndex];
  var left = [], right = [];

  for (var i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right));
}

console.log(bubble([1,2,6,3,7,8,3,5,2,3,2,1]).toString())
