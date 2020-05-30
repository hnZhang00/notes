function contains(arr, item) {
  if (arr === void 0 || !arr.length || item === void 0) return false;
  return arr.indexOf(item) !== -1;
}

function intersection(arr) {
  var args = arguments;
  if (args.length <= 1) return arr || [];

  var section = [];
  for (var i = 0; i < arr.length; i++) {
    if (contains(section, arr[i])) continue;
    for (var j = 1; j < args.length; j++) {
      if (!contains(args[j], arr[i])) break;
    }
    if (j === args.length) {
      section.push(arr[i]);
    }
  }
  return section;
}

console.log(intersection([1,2,3,4], [4,2,5], [5, 2]))
