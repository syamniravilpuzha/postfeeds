//Post Service
const fs = require('fs');
let path = require('path');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
class PostService {
    constructor() {
        this.userConfigPath = path.join(__dirname, "../models/users.json");
    }

    /**
     * Read file
     * @param {*} postConfigPath 
     * @returns {Promise}
     */
    readFile(userConfigPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(userConfigPath, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        });
    }
    generateToken(username,password){

        return new Promise((resolve, reject) => {
            this.readFile(this.userConfigPath).then((data) => {
                let jsonData = JSON.parse(data);
                const user = jsonData.find(user => user.username == username);
                if(!user || password != 'amma'){
                    reject(err);
                }else {
                    var token = jwt.sign({userID: user.id}, 'postfeeds-app-super-shared-secret', {expiresIn: '2h'});
                    resolve(token);
                }
            }).catch((err) => {
                console.error("File Read Error:", err);
                reject(err);
            });
        });


    }

}
module.exports = new PostService();