class AuthController {
    constructor() {
        this.authService = require('../services/auth-service');
    }
    async createToken(req, res) {
        try {
            const body = req.body;
            console.log(req.body)
            let data = {
                "response": await this.authService.generateToken(body.username,body.password)
            };
            console.log("SUCCESS");
            res.send(data);
        }
        catch (e) {
            console.log("FAILURE");
            res.status(401).send({ "error": e });
        }
    }
}
module.exports = new AuthController();