# 浏览器输入网址到页面渲染的全过程
- 获取服务器 IP；
  - 查找缓存（浏览器缓存系统缓存路由器缓存）；
  - 查找 hosts 文件配置；
  - DNS 解析；
- TCP 链接；
- 发送 HTTP 请求；
- 服务器处理请求并返回 HTTP 报文；
- 浏览器解析渲染页面（构建 DOM 树、CSSOM 树）；
- 连接结束；

# GET / POST
- GET 产生一个 TCP 数据包，POST 产生两个 TCP 数据包；
- 对于 GET 请求，浏览器会将 http header 和 data 一并发送，服务器响应 200 OK；
- 对于 POST 请求，先发送 header，服务器响应 100 continue，浏览器在发送 data，此时服务器响应 200 OK；

# 浏览器缓存机制

> 根据响应的 header 内容来决定

> 强缓存：
  - 【200 (from cache)】
  - 不发送请求到服务器，直接从缓存获取数据；
  - 相关字段：expires，cache-control(优先级较高)；
> 协商缓存：
  - 【304 (not modified)】
  - 发送请求到服务器，确认是否可以直接从缓存获取数据；
  - 相关字段：Last-Modified/If-Modified-Since，Etag/If-None-Match；


# web 性能优化
> 降低请求量
  - 合并资源减少 HTTP 请求数；
  - minify / gzip 压缩；
  - lazyLoad  ；
> 加快请求速度
  - 预解析 DNS；
  - 减少域名数；
  - 并行加载；
  - CDN 分发；
> 缓存
  - HTTP 协商缓存；
  - 离线缓存 manifest；
  - 离线数据缓存 localStorage；
> 渲染
  - JS / CSS 优化；
  - 调整加载顺序；
  - 服务器端渲染；
  - pipeline；
