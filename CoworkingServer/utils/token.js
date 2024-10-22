const {verify, decode} = require("jsonwebtoken")

function getPayloads(token) {
    if (!token) {
        return undefined
    }

    if (!verify(token, "SECRETJWTKEY")) {
        return undefined
    }

    return decode(token);
}

module.exports.getPayloads = getPayloads