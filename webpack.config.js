const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		index: "./src/js/index.js",
	},
	//入口
	output: {
		path: __dirname + "/public",
		filename: "./js/[name]-[hash].js"
	},//出口
	devServer: {
            contentBase: "./public", //本地服务器所加载的页面所在的目录
            inline: true
     },
	module: {
		rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader",//?-url
                  publicPath:'../'
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader?limit=8192&name=img/[name].[ext]'
                }]
            },
			{
				test: /\.html$/,
			    loader: "html-withimg-loader"
			},
        ]
	},
	plugins: [
	    new ExtractTextPlugin("./css/[name].css"),
		new HtmlWebpackPlugin({
			template: "./src/index.html" ,
			filename:"./index.html",
			chunks:["index"],
		}),//压缩文件
	]
}