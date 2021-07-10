//Post Service
const fs = require('fs');
let path = require('path');
class PostService {
    constructor() {
        this.postConfigPath = path.join(__dirname, "../models/posts.json");
    }

    /**
     * Get All posts
     * @returns {Promise}
     */
    getAllPosts() {
        return new Promise((resolve, reject) => {
            let posts = [];
            this.readFile(this.postConfigPath).then((data) => {
                let jsonData = JSON.parse(data);
                jsonData.map((p) => {
                    posts.push({
                        id: p.id,
                        title: p.title,
                        author: p.author,
                        createdDate: p.createdDate
                    });
                });
                resolve(posts);
            }).catch((err) => {
                console.error("File Read Error:", err);
                reject(err);
            });
        });
    }

    /**
     * Get post by id
     * @param {*} id 
     * @returns {Promise}
     */
    getPostById(id) {
        return new Promise((resolve, reject) => {
            this.readFile(this.postConfigPath).then((data) => {
                let jsonData = JSON.parse(data);
                let post = jsonData.filter((p) => {
                    return p.id == id
                });
                resolve(...post);
            }).catch((err) => {
                console.error("File Read Error:", err);
                reject(err);
            });
        });
    }

    /**
     * Get comments by post id
     * @param {*} id 
     * @returns {Promise}
     */
    getCommentsByPostId(id) {
        return new Promise((resolve, reject) => {
            this.getPostById(id).then((post) => {
                let comments = post.comments;
                resolve(comments);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    /**
     * Read file
     * @param {*} postConfigPath 
     * @returns {Promise}
     */
    readFile(postConfigPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(postConfigPath, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        });
    }

}
module.exports = new PostService();