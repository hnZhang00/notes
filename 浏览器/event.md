# 事件机制

> 事件触发的三个阶段
1. 捕获：window 往事件触发处传播，遇到注册的捕获事件会触发；
2. 目标：传播到事件触发处时触发注册的事件；
3. 冒泡：从事件触发处往 window 传播，遇到注册的冒泡事件会触发；

> 注册事件
```
document.addEventListener(type, fn[, useCapture]);
document.addEventListener(type, fn[, {
  capture: false, // 捕获(true)/冒泡(false)阶段执行
  passive: false, // 是否可以使用 stopPropagation 阻止事件传播
  once: false, // 是否只执行一次，执行后会移除监听
}]);
```

> 事件代理
- 如果一个节点中的子节点是动态生成的，那么子节点的事件应当注册到父节点上；
- 事件代理的方式相对于直接给目标注册事件来说，既节省内存，同时不需要给子节点注销事件；
```
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
<script>
  var ul = document.querySelector('#ul');
  ul.addEventListener('click', function(event) {
    console.log(event.target);
  });
</script>
<script>
  $('#ul').on('click', 'li', function(event) {
    console.log(event.target);
  });
</script>
```
