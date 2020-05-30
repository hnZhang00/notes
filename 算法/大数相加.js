
function bigAdd(num1, num2) {
  if (!num1) return num2 || null;
  if (!num2) return num1 || null;

  const numArr1 = `${num1}`.split('.'), numArr2 = `${num2}`.split('.');
  const intNum1 = numArr1[0], floatNum1 = numArr1[1];
  const intNum2 = numArr2[0], floatNum2 = numArr2[1];

  const floatResult = add(floatNum1, floatNum2, 0, true).split('.');
  const intResult = add(intNum1, intNum2, floatResult[0]);

  const intValue = intResult.charAt(0) !== '0' ? intResult : intResult.substring(1);
  const floatValue = floatResult[1] || '';

  return intValue + floatValue;
}

function add(num1, num2, last, isFloat) {
  if (!num1) return num2 || '0';
  if (!num2) return num1 || '0';

  const num1Arr = `${num1}`.split('').reverse(), num2Arr = `${num2}`.split('').reverse();
  let firstArr, secArr;
  if (num1Arr.length > num2Arr.length) {
    firstArr = num1Arr;
    secArr = num2Arr;
  } else {
    firstArr = num2Arr;
    secArr = num1Arr;
  }
  const firstArrLength = firstArr.length, secArrLength = secArr.length;

  const result = [];
  const resultFirstNum = firstArr.reduce((a, b, index) => {
    a = parseInt(a), b = parseInt(b);
    let secNum = 0;
    if (firstArrLength - index <= secArrLength) {
      secNum = parseInt(secArr[index]) || 0;
    } else {
      secArr.unshift(0);
    }

    const value = `${a + b + secNum}`;
    if (value.length <= 1) {
      result.unshift(value);
      return 0;
    } else {
      result.unshift(value.charAt(value.length - 1));
      return value.substring(0, value.length - 1);
    }
  }, last || 0);

  return `${resultFirstNum}${isFloat ? '.' : ''}${result.join('')}`;
}