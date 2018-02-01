# ES6
- ES6代码在src目录下，dist目录的js是babel转换后的es5代码。

1. `git clone https://github.com/Yittang/ES6.git`
2. npm install --save-dev babel-cli babel-preset-env
3. 去除小块注释
4. npm run build
5. 刷新页面，在控制台查看输出

- - -

或者图省事不用每一次build一下，在index.html引入的js直接改为es6的js路径
- npm install -g live-server
- live-server --port=9999    (以防你本地有项目占用了8080端口)
- 每次保存代码，页面自动刷新

