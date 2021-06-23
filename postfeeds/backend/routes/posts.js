var express = require('express');
var router = express.Router();
let postController = require('../controllers/post-controller');


/* GET users listing. */
router.get('/',postController.getAllPosts.bind(postController));
router.get('/:id',postController.getPostById.bind(postController));
router.get('/:id/comments',postController.getCommentsByPostId.bind(postController));
module.exports = router;