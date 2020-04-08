# webpack 配置项  

## devtool
	> 若设置为 '#eval-source-map' , console.log 时，可追踪到某个文件的某一行，但会导致打包出来的文件变大。可以通过设置变量 process.env.NODE_ENV，用于区分开发、测试、生产环境，避免文件过大而造成页面加载缓慢。
---

## plugin
1. extract-text-webpack-plugin
	> 此插件在 webpack4 中不被支持，可改用extract-text-webpack-plugin@next 或者 mini-css-extract-plugin

2. mini-css-extract-plugin
	> 此插件可将文件中的 css / less 抽出，并通过 link 标签插入页面；但是编译时会报错，需要将 webpack 版本从原本的 v4.1 升至 v4.3+；现在的 extract-text-webpack-plugin 支持拆分成多个css，而目前mini-css-extract-plugin 还不支持此功能

3. mini-css-extract-plugin 在 webpack4 中的配置
	```	
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const MiniCssExtractPlugin = require("mini-css-extract-plugin");
	const devMode = process.env.NODE_ENV !== 'production';

	plugins: [
		new HtmlWebpackPlugin({
			title: 'FLOW_CHART_CONSTRUCTOR',
			filename: 'index.html',
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
	],
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	}
	```

	> 需要添加配置文件 postcss.config.js
	```
	module.exports = {
		plugins: [require('autoprefixer')({ "browsers": [ "> 1%", "last 2 versions" ] })]
	}
	```
---