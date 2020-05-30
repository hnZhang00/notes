function hammingWeight(n) {
  var count = 0;
  while (n) {
    if (n & 1) count++;
    n >>>= 1;
  }
  return count;
}

console.log(hammingWeight(-3))