const Coworking = require("../database/models/CoworkingModel");
const {getPayloads} = require("../utils/token");

class CoworkingApi {
    constructor() { }

    async CreateCoworking(req, resp) {
        try {
            const coworkingInfo = JSON.parse(req.body.info)
            if (req.files !== null) {
                await req.files.picture.mv(`assets/coworkings/${req.files.picture.name}`);
            }

            const payloads = getPayloads(req.cookies.token)
            if (!payloads.id) {
                resp.status(400).send("UserId not found!")
                return
            }
            coworkingInfo.owner = payloads.id;

            console.log(coworkingInfo)
            const coworking = await Coworking.create(coworkingInfo);
            resp.status(201).send(`User "${coworking.get("name")}" successfully created`);
        } catch (err) {
            console.error(`ERROR in CreateCoworking: ${err.name}`);
            resp.status(400).send("Incorrect data!");
        }
    }

    async GetCoworkings(req, resp) {
        try {
            const coworkings = await Coworking.findAll();
            resp.status(200).send(coworkings);
        } catch (err) {
            console.error(`ERROR in GetCoworkings: ${err.name}`);
            resp.status(500).send("Cannot get coworkings!");
        }
    }

    async GetCoworkingsFromUser(req, resp) {
        try {
            const payloads = getPayloads(req.cookies.token)
            if (!payloads.id) resp.status(400).send("UserId not found!")
            const coworkings = await Coworking.findAll({where: {owner: payloads.id}});
            resp.status(200).send(coworkings);
        } catch (err) {
            console.error(`ERROR in GetCoworkingsFromUser: ${err.name}`);
            resp.status(500).send("Cannot get coworkings from user!");
        }
    }

    async GetCoworkingById(req, resp) {
        try {
            const id = req.params.id;
            const coworking = await Coworking.findByPk(id);
            resp.status(200).send(coworking);
        } catch (err) {
            console.error(`ERROR in GetCoworkingById: ${err.name}`);
            resp.status(400).send("This coworking does not exist");
        }
    }

    async UpdateCoworking(req, resp) {
        try {
            const id = req.params.id;
            const coworking = await Coworking.findByPk(id);
            const coworkingInfo = JSON.parse(req.body.info)
            if (req.files !== null) {
                await req.files.picture.mv(`assets/coworkings/${req.files.picture.name}`);
            }

            coworking.name = coworkingInfo.name;
            coworking.description = coworkingInfo.description;
            coworking.address = coworkingInfo.address;
            coworking.price = coworkingInfo.price;
            coworking.type = coworkingInfo.type;
            coworking.picture = coworkingInfo.picture;
            await coworking.save();

            resp.status(200).send(coworking);
        } catch (err) {
            console.error(`ERROR in UpdateCoworking: ${err.name}`);
            resp.status(400).send("Coworking not updated")
        }
    }

    async DeleteCoworking(req, resp) {
        try {
            const id = req.params.id;
            await Coworking.destroy({where: {id: id}})
            resp.status(200).send("Coworking successfully deleted!")
        } catch (err) {
            console.error(`ERROR in DeleteCoworking: ${err.name}`);
            resp.status(500).send("Internal server error")
        }
    }
}

module.exports = new CoworkingApi();