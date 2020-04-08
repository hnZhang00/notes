
# location

> [ http://www.hnzhang.com:8080/a/b/c/#/index ]

> window.location.href  
- http://www.hnzhang.com:8080/a/b/c

> window.location.protocol
- http:

> window.location.hostname
- www.hnzhang.com

> window.location.port
- 8080

> window.location.origin
- http://www.hnzhang.com:8080
- 在 IE 中不存在，可用 protocol hostname port 进行兼容  
- window.location.origin = window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: ''));

> window.location.hash
- #/index
- 可通过 window.loaction.hash = '#/index2' 实现 hash 路由切换，不会导致浏览器刷新；
- 监听路由改变: window.addEventListener('hashChange', () => {}, false);