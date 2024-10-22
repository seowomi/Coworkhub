const {Sequelize} = require("sequelize");
const initModels = require("./models/InitModels")
const User = require("./models/UserModel");
const Coworking = require("./models/CoworkingModel");

class Database {
    constructor() {
        this.sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "./database/coworkingDb.sqlite"
        })
        this.initDatabase()
        this.initModels()
    }

    initDatabase() {
        this.sequelize.sync({logging: false}).then(() => console.log("DB is up"));
    }

    initModels() {
        initModels(this.sequelize, User, Coworking)
    }
}

module.exports = Database;