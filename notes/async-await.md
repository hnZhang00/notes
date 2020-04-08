# async/await

#### async 函数的含义和用法: http://www.ruanyifeng.com/blog/2015/05/async.html

> async 返回的是一个 Promise 函数  
```
const fn = async function () {}
相当于
const fn = function () {
    return new Promise((resolve, reject) => {})
}
```

> await 只能在 async 里面执行
```
const fn1 = async function () {}
const fn2 = async function () {}
const fn3 = async function () {}

const fn = async function () {
    await fn1();
    await fn2();
    await fn3();
}
fn()
```

> await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中
```
async function myFunction() {
    try {
    await somethingThatReturnsAPromise();
    } catch (err) {
    console.log(err);
    }
}
```


> 另一种写法
```
async function myFunction() {
    await somethingThatReturnsAPromise().catch(function (err){
    console.log(err);
    });
}
```

```
var rejectFn1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('rejectFn1');reject('rejectFn1')
    }, 1000)
});

var rejectFn2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('rejectFn2');reject('rejectFn2')
    }, 1000)
});

var resolveFn = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolveFn');resolveFn('resolveFn')
    }, 1000)
});

var fn = async function () {
    try {
        await rejectFn1();
        await rejectFn2();
        await resolveFn();
    } catch (err) {
        console.log('fn', err)
    }
}
fn()

执行结果：
rejectFn1
fn rejectFn1
```

> 同时执行多个 Promise
```
var resolveFn1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolveFn1');resolve('resolveFn1')
    }, 1000)
});

var resolveFn2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolveFn2');resolve('resolveFn2')
    }, 1000)
});

var resolveFn3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolveFn3');resolve('resolveFn3')
    }, 1000)
});
```

```
var fn = async function () {
    var results = await Promise.all([resolveFn1(), resolveFn2(), resolveFn3()]);
    console.log('fn', results)
}
fn()
```

> 或者
```
(async function () {
    var results = await Promise.all([resolveFn1(), resolveFn2(), resolveFn3()]);
    console.log('fn', results)
})()
```

> 执行结果：
```
resolveFn1
resolveFn2
resolveFn3
fn ["resolveFn1", "resolveFn2", "resolveFn3"]
```

