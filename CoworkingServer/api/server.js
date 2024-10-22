const express = require("express");
const cors = require("cors")
const fileUpload = require("express-fileupload")
const userRouter = require("../routes/Users")
const coworkingRouter = require("../routes/Coworkings")
const Database = require("../database/database")
const cookieParser = require("cookie-parser")

class Server {
    constructor(host, port) {
        this.app = express()
        this.db = new Database()

        this.host = host
        this.port = port
    }

    initApi() {
        this.initUserApi();
        this.initCoworkingApi();
    }

    initUserApi() {
        this.app.use("/api/user", userRouter);
    }

    initCoworkingApi() {
        this.app.use("/api/coworking", coworkingRouter);
    }

    Start() {
        this.app.use(express.json())
        this.app.use(cors({
            origin: 'http://localhost:8080',
            credentials: true
        }))
        this.app.use(cookieParser())
        this.app.use(fileUpload({}))
        this.app.use('/assets', express.static('./assets'))
        this.initApi()
        this.app.listen(this.port, this.host, (err) => {
            if (err) {
                console.error("Cannot start server")
            } else {
                console.log(`Server is up on ${this.host}:${this.port}`);
            }
        });
    }
}

const host = "localhost";
const port = 8081;

const serverInstance = new Server(host, port);

module.exports = serverInstance;