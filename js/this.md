# this

> this 的指向取决于当前执行环境

- 在对象方法中，this 指向调用它所在方法的对象；
- 单独使用 this，它指向全局 global 对象；
- ￼函数使用中，this 指向函数的所属者；
- ￼严格模式下函数时没有绑定到 this 上的，这时 this 是 undefined；
- ￼在 HTML 事件中，this 指向接收事件的 HTML 元素；

```
function foo() {
  console.log(this) // -> window
}
```
```
'use strict';
function foo() {
  console.log(this) // -> undefined
}
```

```
var obj = {
  bar: 1,
  foo: function() {
    console.log(this.bar)
  }
};
obj.foo(); // -> 1 (在 obj 环境执行，this 指向 obj，this.bar 指向 obj.bar)
```

```
var foo = obj.foo;
foo(); // -> undefined (在全局环境执行，this 指向全局 global 对象，浏览器中为 window，this.bar 指向全局环境的 bar)
```

> new
```
function foo() {
  this.bar = 1;
}
var obj = new foo()
// obj -> {bar: 1}
// obj.bar -> 1
```
---
### ￼改变 this 指向：bind、call、apply
1. ￼call 接收参数列表；
2. ￼apply 接收参数数组；
3. ￼call、apply 不传入第一个参数，则默认 window；
4. ￼bind 只改变 this 指向，call、apply改变后执行函数；

```
var a = {
  value: 1
}
function getValue(name, age) {
  console.log(name, age, this.value)
}

getValue.bind(a, 'zz', 20) // -> undefined
getValue.call(a, 'zz', 20) // -> 'zz', 20, 1
getValue.apply(a, ['zz', 20]) // -> 'zz', 20, 1
```
---
> ￼实现 call  
```
Function.prototype.myCall = function(context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}
```
---
> ￼实现 apply
```
Function.prototype.myApply = function(context) {
  var context = context || window;
  context.fn = this;
  var args = arguments[1] || [];
  var result = context.fn(...args);
  delete context.fn;
  return result;
}
```
---
> ￼实现 bind
```
Function.prototype.myBind = function(context) {
  var context = context || window;
  if (typeof this !== 'function') {
    throw new TypeError('bind type should be function!');
  }
  var self = this;
  var args = [...arguments].slice(1);
  return function() {
    return self.call(context, ...args, ...arguments);
  };
}
```
```
Function.prototype.myBind2 = function(context) {
  var context  = context || window;
  if (typeof this !== 'function') {
    throw new TypeError('bind type should be function!');
  }
  var self = this;
  var args = [...arguments].slice(1);
  return function() {
    context.fn = self;
    var result = context.fn(...args, ...arguments);
    delete context.fn;
    return result;
  }
}
```
---
