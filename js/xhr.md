# XMLHttpRequest

> 用于与服务器交换数据  
> 在不重新加载页面的情况下更新网页  
> 在页面加载后向服务器请求、接收、发送数据

>属性
- readyState: 【只读】请求状态码；
  + 0: 【未初始化】尚未调用 send；
  + 1: 【载入】已调用 send，正在发送请求；
  + 2: 【载入完成】send 方法执行完成，已接收到全部响应；
  + 3: 【交互】正在解析响应内容；
  + 4: 【完成】响应内容解析完成，可在客户端调用；
- onreadystatechange: readyState 属性发生变化是触发的事件；
- response: 【只读】整个响应体；
- responseText: 【只读】DOMString，包含对请求的响应；
- responseType: 响应类型的枚举值；
- responseURL: 【只读】响应的序列化 URL；
- responseXML: 【只读】Document；
- status: 【只读】响应状态码，数字 200 等；
- statusText: 【只读】完整的响应状态文本，"200 OK"等；

> 方法
- abort: 立即终止请求；
- getAllResponseHeaders: 以字符串形式放回所有用 CRLF 分隔的响应头（*CRLF 指的是回车换行*）；
- getResponseHeader: 返回包含指定响应头的字符串；
- open: 初始化一个请求；
- overrideMimeType: 重写由服务器返回的 MIME 类型；
- send: 发送请求；
- setRequestHeader: 设置 HTTP 请求头的值；

> 事件
- onabort: 请求终止；
- onerror: 出错；
- onload: 请求成功；
- onloadend: 请求结束；
- onloadstart: 开始；
- onprogress: 进度条；
- ontimeout: 超时；

```
xhr.onreadstatechange = () => {
  let {
    readyState,
    status,
  } = xhr;
  if (readyState === 4) {
    if ((status >= 200 && status < 300) || status === 304) {
      // 成功
    } else {
      // 失败
    }
  }
};
```

```
function request(params) {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  const url = params.url || '';
  const type = params.type ? params.type.toUpperCase() : 'GET';
  const data = params.data || {};
  const headers = Object.assign({
    'Content-type': 'application/json',
  }, params.headers || {});

  if (type === 'GET' || type === 'Delete') {
    const dataString = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
    url += ((url.indexOf('?') === -1 ? '?' : '&') + dataString);
    data = null;
  }

  xhr.addEventListener('loadstart', e => {
    params.beforeSend && params.beforeSend(xhr);
  });

  xhr.addEventListener('loadend', e => {
    params.complete && params.complete(xhr, xhr.status);
  });

  xhr.addEventListener('load', e => {
    const status = xhr.status;
    if ((status >= 200 && status < 300) || status === 304) {
      let result;
      switch (xhr.responseType) {
        case 'text':
          result = xhr.responseText;
          break;
        case 'document':
          result = xhr.responseXML;
          break;
        default:
          result = xhr.response;
          break;
      }
      params.success && params.success(result, status, xhr);
    } else {
      params.error && params.error(e, xhr, status);
    }
  });

  xhr.addEventListener('error', e => {
    params.error && params.error(e, xhr, xhr.status);
  });

  xhr.open(type, url, true); // true: 异步请求, false: 同步请求,

  Object.keys(headers).forEach(key => {
    xhr.setRequestHeader(key, headers[key]);
  });
  params.timeout && (xhr.timeout = params.timeout);

  xhr.send(data);

  return xhr;
}
```
