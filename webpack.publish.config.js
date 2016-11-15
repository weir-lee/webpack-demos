// 生产环境配置
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 提取样式文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 创建index页面

// process.env.NODE_ENV = 'production';

var config = {
    // 项目入口文件
    entry:{
        app: path.resolve(__dirname,'src/app.js'),
        // 当react作为一个node模块安装的时候
        // 我们可以直接指向它，就比如require('react')
        vendors: ['react','react-dom']
    },
    // 编译之后的输出路径
    output: {
        path: path.resolve(__dirname, 'publish'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx后缀名的文件
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                },
                exclude: [path.resolve(__dirname, 'node_modules')] //不需要走过滤器
            },
            {
                test: /\.css$/, // Only .css files
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
                //loader: 'style!css' // 同时用两个，中间用感叹号隔开loaders
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
                //loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/,
                loader: 'url?limit=8192&name=images/[name].[ext]'   // 处理小图片，以base64内联在代码中
            },
            //{
            //    test: /\.(png|jpeg|gif|jpg)$/,
            //    loader: 'file-loader?name=images/[name].[ext]'
            //}
        ]
    },
    resolve: {
      // 自动扩展文件名，意味着我们require模块可以省略不写后缀名
      // extensions第一个是空字符串的情况，对应不需要后缀的情况
        extensions: ['','.js','.jsx','.json','.scss']
    },
    // 将entry中的vendors属性引入的依赖单独打一个包
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            //title: 'webpack+react',
            template: './src/template.html',
            files:{
                //css: ['app.css'],
                //js: ['vendors.js','bundle.js']
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
}

// 动态添加插件的一个方法
if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: false
            }
        })
    );
}

module.exports = config;