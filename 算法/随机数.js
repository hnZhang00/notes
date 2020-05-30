function rand7() {
  return Math.floor(Math.random() * 7) + 1;
}

function rand10() {
  var a = rand7(), b = rand7();
  var value = (a - 1) * 7 + b;
  if (value <= 40) {
    return value % 10 || 10;
  }
  a = value % 10;
  while (true) {
    b = rand7();
    value = (a - 1) * 7 + b;
    if (value <= 60) {
      return value % 10 || 10;
    }
  }
}

for (var i = 0; i < 100; i++) {
  console.log(rand10())
}