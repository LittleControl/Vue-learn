const path = require('path');

module.exports = {
    entry: './src/js/index.js',//入口文件的配置
    output: {               //输出文件or出口文件的配置
        filename: 'bundle.js',//输出文件的文件名
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                //这里正则表达式不可以使用字符串!!!
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};