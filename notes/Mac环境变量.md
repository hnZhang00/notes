
### 1. 记录一下令人稍稍头痛的环境变量的配置问题
	主要是想试试 alias，可以简便命令行输入

	在mac 的 ~ 目录下找到 .bash_profile 文件
		find .bash_profile

	可以直接在 iterm 中 
		vi ~/.bash_profile
	这样就能去修改一下 shell 的相关配置了

	alias nrd='npm run dev'

	之后只需在 iterm 中执行 nrd 就可以达到 npm run dev 的效果

	但是我使用的是 zsh ，也就是每次打开 iterm 并不会去加载 bash_profile 文件，需要手动
		source ~/.bash_profile
	这就很不友好了吧

	可以在 ~/.zshrc 文件最后追加
		source ~/.bash_profile
	这样就完美解决了
	nice～

		
