// 为什么要把var替换成const呢？
// 因为var是全局变量 我们不需要这样写，js中大部分的常量都使用const修饰
// 如果是可变/局部的对象 可以使用let
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
// ---------- Config ---------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ---------- Routers ---------
// 用户的相关功能
const userRouter = require('./src/routes/userRouter');

// ---------- App --------------
app.use('/user/',userRouter);

// ---------- logger -----------
app.use(logger('dev'));

// 这里把创建的app实例传递出去在 bin/www.js 文件中使用
module.exports = app;
