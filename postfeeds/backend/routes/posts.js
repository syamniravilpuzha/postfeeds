var express = require('express');
var router = express.Router();
let postController = require('../controllers/post-controller');


/* GET users listing. */
router.get('/',postController.getAllPosts.bind(postController));
router.get('/:id',postController.getPostById.bind(postController));
router.get('/:id/comments',postController.getCommentsByPostId.bind(postController));
function logRequest(request, response, next) {
    // middleware 1 eg, token validation
    next(); //Will move to next middleware. Here it will be controller function
  }
module.exports = router;