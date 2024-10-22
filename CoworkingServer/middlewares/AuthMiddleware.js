const {verify} = require("jsonwebtoken");

exports.validateToken = (req, resp, next) => {
    const accessToken = req.cookies.token

    if (!accessToken) return resp.status(401).send("User not logged!")
    try {
        if (verify(accessToken, "SECRETJWTKEY")) {
            return next();
        } else {
            return resp.status(500).send("Something went wrong...")
        }
    } catch (err){
        return resp.status(500).send("Internal status error")
    }
}