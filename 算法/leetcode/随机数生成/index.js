function random7() {
  return Math.floor(Math.random() * 7) + 1;
}

function random10() {
  while(true) {
    var a = random7(), b = random7();
    var value = (a - 1) * 7 + b;

    if (value <= 40) {
      return value % 10 || 10;
    }
  }
}

for (var i = 0; i < 10; i++) {
  console.log('random10', random10())
}
