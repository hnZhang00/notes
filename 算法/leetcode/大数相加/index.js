function bigAdd(num1, num2) {
  if (!num1 || !num2) return NaN;
  
  var flag = '', num1Flag = num1[0] === '-', num2Flag = num2[0] === '-';
  num1 = num1.substring(num1.indexOf('-') + 1);
  num2 = num2.substring(num2.indexOf('-') + 1);

  if (num1Flag && !num2Flag) {
    return sub(num2, num1);
  }

  if (!num1Flag && num2Flag) {
    return sub(num1, num2);
  }
  
  if (num1Flag && num2Flag) {
    flag = '-';
  }

  return flag + add(num1, num2)
}

function add(num1, num2) {
  var i = num1.length - 1, j = num2.length - 1, c = 0, sum = '';
  while (i >= 0 && j >= 0) {
    var value = parseInt(num1[i--]) + parseInt(num2[j--]) + c;
    sum = (value % 10) + sum;
    c = Math.floor(value / 10);
  }

  if (j >= 0) {
    i = j;
    num1 = num2;
  }

  while (i >= 0) {
    var value = parseInt(num1[i--]) + c;
    sum = (value % 10) + sum;
    c = Math.floor(value / 10);
  }

  return (c ? c : '') + sum;
}

function sub(num1, num2) {
  var flag = '';
  if (num1.length < num2.length || (num1.length === num2.length && num1 < num2)) {
    var t = num2, num2 = num1, num1 = t;
    flag = '-';
  }

  var i = num1.length - 1, j = num2.length - 1, c = 0, sum = '';
  while (j >= 0) {
    var value = parseInt(num1[i--]) - parseInt(num2[j--]) + c;
    c = 0;
    if (value < 0) {
      value += 10;
      c = -1;
    }
    sum = (value % 10) + sum;
  }

  while (i >= 0) {
    var value = parseInt(num1[i--]) + c;
    c = 0;
    if (value < 0) {
      value += 10;
      c = -1;
    }
    sum = (value % 10) + sum;
  }

  c !== 0 && (sum = c + sum);

  return flag + sum;
}

console.log(bigAdd('99834908', '-11111111121312313111'))