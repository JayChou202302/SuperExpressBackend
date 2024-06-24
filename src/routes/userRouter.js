const express = require("express");
const router = express.Router(); // 获取router实例
// 调试结束
router.post('/helloWorld',(req,res,next)=> {
    // 返回response 'hello world'
    console.log("helloWorld");
    res.json("hello world");
});

module.exports = router;
