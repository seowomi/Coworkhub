const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")
const {getPayloads} = require("../utils/token")

const User = require("../database/models/UserModel");

class UserApi {
    constructor() { }

    async CreateUser(req, resp) {
        try {
            const {email, full_name, password} = req.body;
            bcrypt.hash(password, 10).then(async (hashedPassword) => {

                const user = await User.create({
                    email: email,
                    fullName: full_name,
                    password: hashedPassword
                })
                resp.status(201).cookie("token",
                    sign({id: user.id, username: user.fullName}, "SECRETJWTKEY"), {
                    maxAge: 128000000,
                    httpOnly: true,
                    sameSite: "none",
                    path: "/",
                    domain: "localhost",
                    secure: true
                }).send(`User "${user.get("fullName")}" successfully created`)
            })
        } catch (err) {
            console.error(`ERROR in CreateUser: ${err.name}`)
            resp.status(400).send("Incorrect data!")
        }
    }

    async LoginUser(req, resp) {
        try{
            const {email, password} = req.body;

            const user = await User.findOne({where: {email: email}})
            if (!user) {
                resp.status(400).send("User not found!")
                return
            }

            bcrypt.compare(password, user.password).then((match) => {
                if(!match) {
                    resp.status(400).send("Wrong login and password combination!")
                    return
                }
                const accessToken = sign({id: user.id, username: user.fullName}, "SECRETJWTKEY")
                resp.status(200).cookie("token", accessToken, {
                    maxAge: 128000000,
                    httpOnly: true,
                    sameSite: "none",
                    path: "/",
                    domain: "localhost",
                    secure: true
                }).send("Successfully logged in!")
            })
        } catch (err) {
            console.error(`ERROR in LoginUser: ${err.name}`)
            resp.status(400).send("User not found!")
        }
    }

    async GetUsers(req, resp) {
        try {
            const users = await User.findAll();
            resp.status(200).send(users)
        } catch (err) {
            console.error(`ERROR in GetUsers: ${err.name}`)
            resp.status(500).send("Cannot get users!")
        }
    }

    async GetUserById(req, resp) {
        try {
            const payloads = getPayloads(req.cookies.token)
            const user = await User.findByPk(payloads.id)

            if (user) {
                resp.status(200).send({id: user.id, email: user.email, username: user.fullName})
            } else {
                resp.status(400).send("Cannot get user!")
            }
        } catch (err) {
            console.log(`ERROR in GetUserById: ${err}`)
            resp.status(400).send("Cannot get user!")
        }
    }

    async LogoutUser(req, resp) {
        try {
            resp.status(200).cookie("token", "", {
                maxAge: -1,
                httpOnly: true,
                sameSite: "none",
                path: "/",
                domain: "localhost",
                secure: true
            }).send("Successfully logout!");
        } catch (err) {
            console.log(`ERROR in LOGOUT: ${err}`)
            resp.status(500).send("Something went wrong!! Cant Logout!!")
        }
    }

    async DeleteUser(req, resp) {

    }
}

module.exports = new UserApi();