var express = require("express");

var router = express.Router();

// GET /posts/:postId 单独一篇的文章页
router.get('/', function (req, res, next) {
    res.render('details')
})
module.exports = router;