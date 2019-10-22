const path = require('path');

module.exports = {
    entry: './src/index.js',//入口文件的配置
    output: {               //输出文件or出口文件的配置
        filename: 'bundle.js',//输出文件的文件名
        path: path.resolve(__dirname, 'dist')
    }
};