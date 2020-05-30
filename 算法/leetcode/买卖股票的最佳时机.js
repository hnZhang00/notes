// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

function maxProfit(prices) {
  var buy = Number.MAX_SAFE_INTEGER, result = 0;
  for (var i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      continue;
    }
    result = Math.max(result, prices[i] - buy);
  }
  return result;
}

console.log(maxProfit([7,1,5,3,6,4]))
