
https://juejin.im/post/5b01336af265da0b8a67e5c9

1. nginx 相关命令

	> nginx -s stop => 停止 nginx 服务  
	> nginx -s reload => 重启 nginx  
	> nginx -t => 检查 nginx.conf 配置
	> 每次修改完 .conf 文件就需要重启 nginx

2. nginx.conf 配置文件
	```
	worker_processes 1;
	events {
	   worker_connections 1024;
	}
	http {
		upstream firstdemo {
			server 39.106.145.33;
			server 47.93.6.93;
		}
		server {
			listen 8080;
			server_name  chd.news.so.m.qss.test.so.com ;
			location / {
				proxy_pass http://firstdemo;
			}
		}
	}
	```
	> worker_process: 工作进程数，和 CPU 核数相同
	> worker_connections: 每个进程允许的最大连接数
	> upstream 模块: 负载均衡就靠它；语法格式:  
	
	```
	upstream name {}
	upstream firstdemo {
		ip_hash;
		server 39.106.145.33;
		server 47.93.6.93;
	}
	```
	+ ip_hash: 如果第一次访问该服务器后就记录，之后再访问都是该服务器了，这样比如第一次访问是33服务器，那之后再访问也会分配为33服务器访问了；两个 server 分别对应着不同的服务器

	> server 模块
	+ 实现反向代理  
	+ listen 监督端口号  
	+ location / {} 访问根路径  
	+ proxy_pass http://firstdemo 代理到 firstdemo 里的两个服务器上  
	+ server_name 用指定域名去访问
