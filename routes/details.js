var express = require("express");

var router = express.Router();

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function (req, res, next) {
    const postId = req.params.postId;
    if (!postId) {
        throw new Error('该文章不存在')
    }else{
        res.render('details')
    }
})
module.exports = router;