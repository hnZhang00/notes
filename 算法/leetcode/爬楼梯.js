// 爬楼梯

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 迭代的方式实现动态规划
function climbStairs(n) {
  var fib = new Array(n + 1);
  fib[0] = 1, fib[1] = 1;
  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// 递归
function climbStairs2(n) {
  var dp = new Array(n + 1);
  return climbStairsDeep(n, dp);
}
function climbStairsDeep(n, dp) {
  if (n <= 1) return 1;
  if (dp[n] !== void 0) return dp[n];
  dp[n] = climbStairsDeep(n - 1, dp) + climbStairsDeep(n - 2, dp);
  return dp[n];
}