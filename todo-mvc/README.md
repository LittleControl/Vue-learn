# todo-mvc

> A Vue.js project

## 目前还是存在的问题

### 2019.10.24

#### 关于多余div的问题

就是因为最后一个AllFooter实际上是一个静态页面,所以可以不用Vue来管理,我就直接把页面内嵌入index.html,然后Vue的组件就没有多余的div了

### 2019.10.23

- 跨级通信问题(就是底部筛选按钮的高亮问题)
- 静态资源文件(项目基本的css和js文件)不知道该怎么放,或者说在什么时候什么地方引入,我现在是直接在index.html页面引入
- 感觉项目结构还是有点不合理
- 还有一个问题就是因为Vue的组件模板必须有一个根节点,这样最后就有一个多余的div包裹,不知道怎么去除

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
