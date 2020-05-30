# new

> 过程
1. 新生成一个对象
2. 链接到原型上
3. 绑定 this
4. 返回新对象

```
function create() {
  // 获得构造函数
  let Con = [].shift.call(arguments)
  if (typeof Con !== 'function') {
    return Con;
  }
  // 创建一个空对象
  let obj = new Object()
  // 链接到原型上
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}
```
