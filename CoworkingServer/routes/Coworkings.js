const express = require("express")
const router = express.Router()
const coworkingApi = require("../api/coworking");

router.post('/create', async (req, resp) => {
    await coworkingApi.CreateCoworking(req, resp);
})

router.get('/get', async (req, resp) => {
    await coworkingApi.GetCoworkings(req, resp);
})

router.get('/getFromUser', async (req, resp) => {
    await coworkingApi.GetCoworkingsFromUser(req, resp);
})

router.get('/getById/:id', async (req, resp) => {
    await coworkingApi.GetCoworkingById(req, resp);
})

router.put('/updateById/:id', async (req, resp) => {
    await coworkingApi.UpdateCoworking(req, resp);
})

router.delete('/deleteById/:id', async (req, resp) => {
    await coworkingApi.DeleteCoworking(req, resp);
})

module.exports = router;