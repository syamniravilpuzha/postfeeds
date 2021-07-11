var express = require('express');
var router = express.Router();
let postController = require('../controllers/post-controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *          description: ID
 *         title:
 *          type: string
 *          description: Title of the post
 *         content:
 *          type: string
 *          description: Post Contents
 *         author:
 *          type: string
 *          description: Author of the post
 *         createdDate:
 *          type: string
 *          description: Post Created Date
 *         comments:
 *          type: Array
 *          description: Comments for the post
 *       example:
 *          id: 101
 *          title: Node.js
 *          content: This program is written in Node.js
 *          author: Syam
 *          createdDate: 06/06/2021
 *          comments: [commentId: 121,authorName: Jacob,content: This is a comment]
 *
 */

/**
 * @swagger
 * tags:
 *  name: Posts
 *  description: The posts managing API
 */

/**
 * @swagger
 * /posts:
 *      get:
 *          summary: Returns the list of all the posts
 *          tags: [Posts]
 *          responses: 
 *              200:
 *                  description: The list of all posts
 *                  content:
 *                      application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Post'
 */
router.get('/',postController.getAllPosts.bind(postController));

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *      summary: Get the post by id
 *      tags: [Posts]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The Post Id
 *      responses:
 *          200:
 *              description: The post description by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 *          404:
 *              description: The post was not found
 *            
 */
router.get('/:id',postController.getPostById.bind(postController));

/**
 * @swagger
 * /posts/{id}/comments:
 *   get:
 *      summary: Get the comments by post id
 *      tags: [Posts]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The Post Id
 *      responses:
 *          200:
 *              description: Comments by post id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 *          404:
 *              description: No such post found
 *            
 */
router.get('/:id/comments',postController.getCommentsByPostId.bind(postController));
module.exports = router;