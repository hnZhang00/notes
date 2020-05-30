function sub(num1, num2) {
  var flag = '';
  if (num1.length < num2.length || (num1.length === num2.length && num1 < num2)) {
    var t = num1;
    num1 = num2;
    num2 = t;
    flag = '-1';
  }

  var i = num1.length - 1, j = num2.length - 1, c = 0, sum = '';
  while (j >= 0) {
    var value = parseInt(num1[i--]) - parseInt(num2[j--]) + c;
    sum = (Math.abs(value % 10) || '') + sum;
    c = value < 0 ? -1 : 0;
  }

  while (i >= 0) {
    var value = parseInt(num1[i--]) + c;
    sum = (Math.abs(value % 10) || '') + sum;
    c = value < 0 ? -1 : 0;
  }

  c && (sum = c + sum);

  return flag + sum;
}

console.log(sub('897342891274', '8973428912002'))