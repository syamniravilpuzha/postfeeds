var express = require('express');
var router = express.Router();
let authController = require('../controllers/auth-controller');


/* GET users listing. */
router.post('/',hello,authController.createToken.bind(authController));
/* router.get('/:id',postController.getPostById.bind(postController));
router.get('/:id/comments',postController.getCommentsByPostId.bind(postController)); */
module.exports = router;
function hello(req,res,next){
    console.log("HELLO");
    next();
}
/* app.post('/api/auth', function(req, res) {
    const body = req.body;
  
    const user = USERS.find(user => user.username == body.username);
    if(!user || body.password != 'todo') return res.sendStatus(401);
    
    var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
    res.send({token});
  }); */