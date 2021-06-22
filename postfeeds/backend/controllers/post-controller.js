const PostService = require('../services/post-service');
class PostController {
    constructor() {
        this.postService = PostService;
    }

    /**
     * Get All Posts
     * @param {*} req 
     * @param {*} res 
     */
    async getAllPosts(req, res) {
        try {
            let data = {
                "response": await this.postService.getAllPosts()
            };
            console.log("RESULT")
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }
    }

    /**
     * Get post by Id
     * @param {*} req 
     * @param {*} res 
     */
    async getPostById(req, res) {
        try {
            let id = req.params.id;
            let data = {
                "response": await this.postService.getPostById(id)
            };
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }
    }

    /**
     * Get comments by post id
     * @param {*} req 
     * @param {*} res 
     */
    async getCommentsByPostId(req,res){
        try {
            let id = req.params.id;
            console.log(id);
            let data = {
                "response": await this.postService.getCommentsByPostId(id)
            };
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }
    }
}
module.exports = new PostController();