const express = require("express")
const router = express.Router()
const userApi = require("../api/user");
const {validateToken} = require("../middlewares/AuthMiddleware")

router.post('/create', async (req, resp) => {
    await userApi.CreateUser(req, resp);
})

router.get('/get', async (req, resp) => {
    await userApi.GetUsers(req, resp);
})

router.post('/login', async (req, resp) => {
    await userApi.LoginUser(req, resp)
})

router.get('/getById', validateToken, async (req, resp) => {
    await userApi.GetUserById(req, resp)
})

router.post('/logout', async(req, resp) => {
    await userApi.LogoutUser(req, resp)
})

router.get('/isAuth', validateToken, async (req, resp) => {
    resp.status(200).send("User is authorized")
})

module.exports = router;