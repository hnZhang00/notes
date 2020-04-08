## before
---
1. 查找占用 8090 端口的进程 ID
	> lsof -i :8089
---
2. 杀掉进程
	> kill 9480
---
3. 跳出 for 循环
	```
	forLabel: for (var i=0; i<10; i++) {
		console.log(i)
		if (i>5)
			break forLabel;
	}
	```
---
4. Safari 对 date 的支持：
	> new Date('2017-08-24')	T  
	> new Date('2017/08/24')	T  
	> new Date('2017-08-24 00:00:00')	F  
	> new Date('2017/08/24 00:00:00')	T  
---
5. 若是预览的图片很小，在 photoswipe 中是不会显示放大镜的，若是高清图，则有;
---
6. 解析字符串
	> angular.fromJson() -> 把 json 字符串解析为对象/对象数组  
	> angular.toJson()
---
7. angular 直接绑定 keydown 事件，通过 return false; 禁止输入，这样是无效的。但如果通过指令，在指令中获取元素，再绑定事件，又是 OK 的
---
8. Math
	> parseInt() 	取整  
	> Math.ceil() 	向上取整  
	> Math.floor() 向下取整  
	> Math.round() 四舍五入
---
9. git
	> git branch  
	> git reset	
---
10. autoprefixer 导致问题：-webkit-box-orient 在浏览器下看不到
	```
	/* autoprefixer: off; */
	-webkit-box-orient: vertical;
	/* autoprefixer: on; */
	```
---
11. npm
	> npm i -S <=> npm i --save  
	> npm i -D <=> npm i --save-dev
---
12. ssh
	> ssh -i ~/Downloads/25rsa.pub root@172.16.1.25  
	> ssh -add -k key.pem  
	> scp -r ~/deploy-frontend.sh root@172.16.1.25:/usr/lightapps
---
13. 文件权限设置
	> chmod 777 ./*  
	> chmod +x the_file_name
---
14. IE 浏览器并不支持 src 直接是 URL 对象  
		这会导致 iframe 中的 blob 内容不展示
---
15. 文字太长显示省略号：

		<div class="divOut">
			<div class="divInner">
				<p class="text"> xxx </p>
			</div>
		</div>

		.divOut {
			display: flex;
		}
		.divInner {
			flex: 1;
			display: flex;
		}
		.text{
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

	> 如上写法是会失效的，因为子元素中的 white-space: nowrap; 会把父元素撑开。应改成如下：

		.divOut {
			display: flex;
		}
		.divInner {
			width: 0;
			flex: 1;
			display: flex;
		}
		.text{
			width: 0;
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
---
16. 数组去重
	> [ ...new Set(array) ]  
	> Array.from(new Set(array))
---
17. zoom: 0.8; // 缩放
---
18. window.addEventListener('load', function(){}, false)
---
19. 运算符优先级
	> &&  
	> ||  
	> ?:  
---
20. join
	```
	var a = [ 1, 2, 3 ];
	a.join();
	// => "1,2,3"
	```
	> join 连接符默认 ","
---
21. 原生 js 主动触发 input 事件
	```
	function setValue(){
		var input = document.getElementsByName('input')[0];
		input.focus();
		input.value='11111';
		if ('createEvent' in document) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent('input', false, true);
			input.dispatchEvent(evt);
		} else {
			// 兼容 IE
			input.fireEvent("oninput");
		}
	};
	setValue();
	```
---
22. 重命名文件  
	```
	mv info_20190117 info_20190117_async-await.md
	```
---
23. box-shadow: h-shadow v-shadow blur spread color inset;
	> h-shadow: 必需 水平阴影的位置 允许负值  
	> v-shadow: 必需 垂直阴影的位置 允许负值  
	> blur: 可选 模糊距离  
	> spread: 可选 阴影的尺寸  
	> color: 可选 阴影的颜色  
	> inset: 可选 将外部阴影（outset）改为内部阴影  
---
24. 子元素阴影超出父元素范围会被剪切
	> 解决: 删掉掉父元素的 overflow: hidden; 
---
25. animation: name duration timing-function delay iteration-count direction;
	> animation-name: 需要绑定到选择器的 keyframe 名称；  
	> animation-duration: 完成动画所花费的时间；  
	> animation-timing-funtion: 动画的速度曲线；  
	> animation-delay: 动画开始之前的延迟；  
	> animation-iteration-count: 动画播放次数；  
	> animation-direction: 是否轮流反向播放动画。  
---
26. es6 Set 实现数组去重
	```
	let a = [1, 1, 2, 3];
	Array.from(new Set(a));
	//=> [1, 2, 3]
	```
---
27. 使用命令行调用 sublime 将文件打开
	> open -a  
		open -a /Applications/Sublime\ Text.app test.txt

	> 软链接  
		ln /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl  
		subl test.txt  

	> 在~/.bashrc或~/.zshrc中添加alias  
		alias sublime='open -a /Applications/Sublime\ Text.app'  
		sublime test.txt  
---
28. angular-cli 生成 angular 项目		
	> sudo npm install -g @angular/cli@latest  
	> ng new my-app  
	> ng new my-app --skip-tests=true // 无需添加测试（无效）  
	> ng new my-app --minimal // 无需添加测试（有效）  

	##### 启动项目
	> ng serve  
	> ng serve --host 0.0.0.0  
	> ng serve --host 0.0.0.0 --open  
---
29. babel
	> babel 默认不会转 Object.assign，导致旧版浏览器（ Object 中无 assign 方法）中使用 Object.assign({}, {}) 时会报错
	```
	npm install --save babel-polyfill
	import 'babel-polyfill';
	```
---
30. android 有个兼容 https 注入 cordova 的问题: 
	> 在 crosswalk 以及 system webivew , applocal:// 无法注入  
	> 需要加多个语句 `<script src="https://xxx/cordova.min.js"></script>`  
	> (xxx/cordova.min.js为本地空的 js 文件路径)
---
31. 判断是否是数组
	> var a = [];  
	> 1> Array.isArray(a);  
	> 2> a instanceof Array;  
	> 3> a.constructor === Array;  
	> 4> Object.prototype.toString.call(a) === 'object Array';  
---
32. "0.1 + 0.2 != 0.3"
	> 因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。  
	> IEEE 754 双精度：六十四位中符号位占一位，整数位占十一位，其余五十二位都为小数位。

	> 因为 0.1 和 0.2 都是无限循环的二进制了，所以在小数位末尾处需要判断是否进位（就和十进制的四舍五入一样）。

	>我们都知道计算机表示十进制是采用二进制表示的，所以 0.1 在二进制表示为
	```
	// (0011) 表示循环
	0.1 = 2^-4 * 1.10011(0011)
	0.2 = 2^-3 * 1.10011(0011)
	```
	> 加起来的到 0.30000000000000004

	> 解决方法: parseFloat((0.1 + 0.2).toFixed(10))

	![](images/0.1.png)
---




