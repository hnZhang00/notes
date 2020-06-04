function random7() {
  return Math.floor(Math.random() * 7) + 1;
}

function random10() {
  var a, b;
  while (true) {
    a = random7(), b = random7();

    var value = (a - 1) * 7 + b;
    if (value <= 40) {
      return value % 10 || 10;
    }

    a = value % 10;
    break;
  }
  while (true) {
    b = random7();

    var value = (a - 1) * 7 + b;
    if (value <= 60) {
      return value % 10 || 10;
    }
  }
}

for (var i = 0; i < 10; i++) {
  console.log('random10', random10())
}
