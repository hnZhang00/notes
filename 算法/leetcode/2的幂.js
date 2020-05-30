function isPowerOfTwo(n) {
  while (n) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    n /= 2;
  }
  return false;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(218))
