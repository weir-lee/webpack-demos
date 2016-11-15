// 开发时候的配置信息

// 这是最基本的一个配置文件
// 编写配置文件，要有最基本的文件入口和输出文件配置信息等
// 里面还可以加loader和各种插件配置使用
var path = require('path');
// 引入自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // 项目入口文件
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/app.js')
    ],
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
                exclude: 'node_modules'   //node_modules文件夹不会被编译
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 同时用两个，中间用感叹号隔开loaders
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url'   // 处理图片的，图片会被编译到bundle.js文件里面
                //loader: 'url?limit=2500&name=images/[name].[ext]'   //处理大图片，&多个参数连接
            }
        ]
    },
    plugin: [
        new OpenBrowserPlugin({url:'http://localhost:8080',browser:'chrome'})
    ]
}
