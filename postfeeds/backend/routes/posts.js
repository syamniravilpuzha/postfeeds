var express = require('express');
var router = express.Router();
let postController = require('../controllers/post-controller');


/* GET users listing. */
router.get('/',logRequest,postController.getAllPosts.bind(postController));
router.get('/:id',logRequest,postController.getPostById.bind(postController));
router.get('/:id/comments',logRequest,postController.getCommentsByPostId.bind(postController));
function logRequest(request, response, next) {
    // middleware 1 eg, token validation
    next(); //Will move to next middleware. Here it will be controller function
  }
module.exports = router;