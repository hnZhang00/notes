# fetch 超时

> 利用 Promise.race
- 寓意为赛跑，数组中的 Promise 哪个结束的快，就返回哪个的结果，不论结果是成功或是失败的状态；

```
var fetchPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('fetch 成功！'), 10000);
});

var abortPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => reject('fetch 超时！'), 5000);
})

return Promise.race([
  fetchPromise(),
  abortPromise(),
]);
```

# ajax 超时设置
```
$.ajax({
  timeout: 5000,
  complete: function(xml, textStatus) {
    if (textStatus === 'timeout') {
      // 请求超时
    }
  },
});
```