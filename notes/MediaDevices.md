# MediaDevices.getUserMedia() 
> 会提示用户给予使用媒体输入的许可，媒体输入会产生一个 MediaStream ，里面包含了请求的媒体类型的轨道；  
> 返回一个 Promise 对象，成功后会 resolve 回调一个 MediaStream 对象；  
> 若用户拒绝了使用权限，或者需要的媒体源不可用，promise 会 reject 回调一个 PermissionDeniedError 或者 NotFoundError；  

### 错误信息
---
	1. AbortError［中止错误］
	   尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出NotReadableError异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。

	2. NotAllowedError［拒绝错误］
	   用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。

	3. NotFoundError［找不到错误］
	   找不到满足请求参数的媒体类型。

	4. NotReadableError［无法读取错误］
	   尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。

	5. OverConstrainedError［无法满足要求错误］
	   指定的要求无法被设备满足，此异常是一个类型为OverconstrainedError的对象，拥有一个constraint属性，这个属性包含了当前无法被满足的constraint对象，还拥有一个message属性，包含了阅读友好的字符串用来说明情况。

	6. SecurityError［安全错误］
	   在getUserMedia() 被调用的 Document 上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。

	7. TypeError［类型错误］
	   constraints对象未设置［空］，或者都被设置为false。
