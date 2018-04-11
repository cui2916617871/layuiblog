var express = require("express");

var router = express.Router();

router.get("/",function(req,res,next){
    var list_li = 'layui-this'
    res.render('home',{list_li:list_li})
})

module.exports = router;