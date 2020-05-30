function add(num1, num2) {
  var i = num1.length - 1, j = num2.length - 1;
  var c = 0, sum = '';
  while (i >= 0 && j >= 0) {
    var value = parseInt(num1[i--]) + parseInt(num2[j--]) + c;
    sum = value % 10 + sum;
    c = Math.floor(value / 10);
  }

  if (j >= 0) {
    i = j;
    num1 = num2;
  }

  while (i >= 0) {
    var value = parseInt(num1[i--]) + c;
    sum = value % 10 + sum;
    c = Math.floor(value / 10);
  }

  return (c ? c : '') + sum;
}

add('1283789127387128937812738', '90128271837879837')