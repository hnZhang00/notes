## interview

---
#### 1. 请分析以下代码执行结果
```
['1', '3', '10'].map(parseInt);
```
> parseInt('1', 0) => 1  
> parseInt('3', 1) => NaN  
> parseInt('10', 2) => 2  
---
#### 2. 请分析以下代码执行结果
```
var number = 10;
function fn() {
  console.log(this.number);
}
var obj = {
  number: 2,
  show: function(fn) {
    this.number = 3;
    fn();
    arguments[0]();
  }
};
obj.show(fn);
```
> 10  
> undefined
---
#### 3. ￼请写出 inner 的实际高度
```
  <style>
    .outer {
      width: 200px;
      height: 100px;
    }
    .inner {
      width: 60px;
      height: 60px;
      padding-top: 20%;
    }
  </style>
  <div class="outer">
    <div class="inner"></div>
  </div>
```
> 200px * 20% + 60px => 100px

---
#### 4. ￼手写一个深拷贝函数
> 低配  
```
JSON.parse(JSON.stringify(value));
```
> 高配
```
function cloneDeep(value) {
  // typeof null === 'object' -> true
  // null instanceof Object   -> false
  if (typeof value !== 'object' || !(value instanceof Object))
    return value;
  let newValue = (
    Array.isArray(value) ||
    value instanceof Array ||
    value.constructor === Array ||
    Object.prototype.toString.call(value) === '[object Array]'
  ) ? [] : {};
  for (let key in value) {
    newValue[key] = cloneDeep(value[key]);
  }
  return newValue;
};
```
---
#### 5. ￼HTTP 状态码 301 302 304 403
> ￼301  

> ￼302  

> ￼304  

> ￼403  

---
#### 6. ￼手写发布订阅模式 EventEmitter
---
#### 7. ￼手写一个多表查询的 sql 语句
---
#### 8. ￼react 高阶函数的写法
---
#### 9. ￼delete 数组的 item，数组的 length 是否会 -1
---
#### 10. ￼mongoDB 中的 BSON 是什么
---
#### 11. ￼关系型数据库和 nosql 查询效率谁高
---
#### 12. ￼使用 node app.js 开启服务，如何让它在后台运行
---
#### 13. ￼尽可能写出更多的数组副作用方法
---
#### 14. ￼实现一个周岁函数，例如 fn('2018-8-8') 输出 1，只要是过了生日就 +1
---

