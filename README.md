[TOC]

# SuperExpressBackend
这是一个具备通用能力的超级后端服务Server，用来服务
<br>
**1.高校水电费管理系统**
<br>
**2.校园就医预约系统功能**
<br>
**3.选课管理系统**

## 项目搭建

### 1.安装Express工具
https://expressjs.com/en/starter/generator.html

### 2.打开项目

### 3.了解 package.json 文件
package.json文件 是大部分 JS 项目的 必备的文件，它的作用有以下：
1) 用来声明项目名称 / 版本号 / 版本私有控制
```json
{
  "name": "superexpressbackend",
  "version": "0.0.0",
  "private": true
}
```
2) 用来搭建快速运行命令
```json
{
  "start": "node ./bin/www",
  "fastStart" : "nodemon ./bin/www & clear & npm run restart"
}
```
只要你配置了这些命令,以 fastStart 命令为例子
原本你再终端中可能要运行 (1)nodemon ./bin/www (2) clear (3) npm run restart 三个命令才能达到的作用
现在可以用 npm run fastStart 一行就可以搞定 三个步骤 
同理 你增加的新命令都可以用 npm run 新命令来去解决
3) 声明项目的依赖包
```json
{
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}
```
dependencies 也就是项目的依赖，像 express 、http-errors都是著名的社区三方库，能够快速帮助我们搭建后端服务
我们可以通过 npm install xxx 来安装三方库

OK 到这里 我们的 package.json 文件介绍完毕

## 项目目录搭建和说明
```json
{
  "bin" : "bin文件是一个运行文件 我们所有核心的代码都在里面，但是我们日常的大部分工作 不是对他进行修改",
  "public" : "是一个公共文件，用来存放外界能够访问到的一些资源，例如图片，视频等等",
  "src" : "这个是我们的核心代码文件区域，我们将在这里完成所有的代码功能",
  "src/controller" : "用来处理我们具体请求的controller",
  "src/routes" : "这个是我们的路由功能目录",
  "src/middle" : "这个是我们的中间件",
  "src/config" : "这个是我们的项目一些配置",
  "src/model" : "这个是我们项目所用到的一些数据库模型",
  "src/processor" : "这个是我们项目所用到的数据处理者",
  "src/service" : "这个是我们项目运用到的数据库服务层",
  "src/util" : "这个是我们项目运用的一些通用能力",
  "views" : "我们这个项目暂时用不到",
  "app.js" : "我们整个项目的入口文件，非常重要，用来配置路由!!!!"
 }
```
好了 到这里我们的整个项目的目录介绍完毕
这里可能涉及到一些没有遇到的名词，不要纠结。

## 项目使用到的第三方库安装以及相关说明
```json
{
  "dependencies" : {
    "bcryptjs": "^2.4.3", // 用于加密，通常用于加密用户设置的密码，然后存储在数据库中，读取的时候再解密
    "cookie-parser": "~1.4.4", // 用于解析
    "debug": "~2.6.9", // 用于debug
    "express": "~4.16.1", // express框架
    "http": "0.0.1-security", // express框架依赖
    "http-errors": "~1.6.3", // express框架依赖
    "jade": "~1.11.0", // express框架依赖
    "joi": "^17.11.0", // 参数校验
    "jsonwebtoken": "^9.0.2", // 登录态校验
    "morgan": "~1.9.1", // express框架依赖
    "nodemon": "^3.0.2", // 热更新
    "uuid": "^9.0.1", // 用于给用户生成唯一标识
    "mysql2": "^3.10.1",// mysql数据库操作层
  },
  "devDependencies": {
    // 使用homebrew安装！！！！！
    "redis": "^4.6.11", // redis缓存层 注意一定要在mac上安装了redis // https://blog.csdn.net/XH_jing/article/details/129365285
  }
}
```
// 有黄色的标识 说明可能存在安装问题

好了 到这里 我们项目的大部分的配置 以及 安装的三方库都已经结束了

## app.js 入口文件配置

整理完 App.js 文件会发现 只剩下三个板块
1.Routers - 我们写好的路由文件（所有功能点都包含在这里）
2.App -- 我们的入口App
3.logger -- 我们的项目日志

除此之外我们还有很多东西没有完善 后续我们再说

## bin/www.js 文件说明
链路说明：
1）创建了 HttpServer 实例子
2）设置和监听了 Port
3）消息传递给 App -> Express -> 路由 -> Response -> 前端 -> 展示给用户

## 正式进入开发流程

