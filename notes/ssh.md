1. ssh 进入服务器
	> `ssh root@116.62.14.227` // 输入密码  
	> `ssh -i ~/my.pem root@116.62.14.227` // 密钥文件访问

2. scp 上传/下载文件
	#### 上传
	> `scp ~/Documents/bpm.zip root@116.62.14.227:/usr/lightapps` // 输入密码  
	> `scp -i ~/my.pem ~/Documents/bpm.zip root@116.62.14.227:/usr/lightapps` // 密钥文件访问  

	#### 下载
	> `scp root@116.62.14.227:/usr/lightapps/bpm.zip ~/Documents` // 输入密码  
	> `scp -i ~/my.pem root@116.62.14.227:/usr/lightapps/bpm.zip ~/Documents` // 密钥文件访问  