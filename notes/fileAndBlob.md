
### HTML5 file 对象和 blob 对象的互相转换
---
[https://blog.div-wang.com/2017/07/html5-file.html](https://blog.div-wang.com/2017/07/html5-file.html)


1. File => DataURL
	> 使用 FileReader 对象转换，该对象用于读取文件（读取单个对象文件，所以，不能直接读取 FileList 对象文件集合），即把文件内容读入内存。
	> var reader = new FileReader(); // 参数为 Blob 对象或 File 对象

2. FileReader 的不同读取方法
	> readAsBinaryString(Blob|File)：返回二进制字符串，该字符串每个字节包含一个 0 到 255 之间的整数。  
	> readAsText(Blob|File, opt_encoding) ：返回文本字符串。默认情况下，文本编码格式是'UTF-8'，可以通过可选的格式参数，指定其他编码格式的文本。  
	> readAsDataURL(Blob|File)：返回一个基于 Base64 编码的 data-uri 对象。  
	> readAsArrayBuffer(Blob|File) ：返回一个 ArrayBuffer（数组缓存）对象。  
	> abort()：该方法用于中止文件上传。  

3. rederAsDataURL
	```
	var reader = new FileReader();
	reader.onload = function(e) {
		// e.target.result 该属性表示目标对象的 DataURL
	}
	// 传入一个参数对象即可得到基于该参数对象的文本内容
	reader.rederAsDataURL(file);
	```

4. DataURL => Blob
	```
	let arr = this.cutAvater.split(',')
	let data = window.atob(arr[1])
	let mime = arr[0].match(/:(.*?);/)[1]
	let ia = new Uint8Array(data.length)
	for (var i = 0; i < data.length; i++) {
		ia[i] = data.charCodeAt(i)
	}
	this.blob = new Blob([ia], {type: mime})
	```

5. Blob => File
	> 利用 File Api  
	```
	let files = new window.File([this.blob], file.name, {type: file.type})
	```
		