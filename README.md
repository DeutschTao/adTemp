# 动态布局
## 技术栈
- node
- gulp
## 目录和文件说明
- dev 开发阶段文件夹
  - svDownload 开发项目...
- build 构建输出文件夹
  - svDownload 打包项目
    -*.xml 文件名hash
    -*.json 对应最新hash后的文件名
- server.js 本地开启静态资源服务，监听8083（IOS模拟器请求8083端口）
- vangogh_push.py 安卓模拟器需要的执行文件
## 开发和上线
### 开发
- npm install 
- 在dev下新建项目，index.xml和index.json（目前需要使用index命名，因为IOS模拟器会自动请求index.xml和index.json）
- 组件和样式开发时，可参考doc文档的注意事项 https://docs.bytedance.net/doc/4d4tB2Tvn09CZsdE9zkDBh
- 事件和json字段需要和端上同学协商
- pathName=项目名（dev下文件夹名）npm run dev 模拟器自测(启动本地服务forIOS,执行phython命令forAndrion)
### 上线（待补充）


## TODO
- 该项目中，前端目前没有主动渲染执行的能力，很多依赖端上的组件和事件，后期如果有变，本项目也要变化
- 目前还是简单版本，只能满足开发和测试的基本流程，随着开发的深入，该项目需要不断更新完善
- 目前并没有对xml文件进行打包压缩，可以跟端上商量是否对他们有影响

