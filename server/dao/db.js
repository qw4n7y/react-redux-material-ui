const mongojs = require('mongojs')
const config = require('config')

const connString = `mongo/${config.get("mongo.dbName")}`
const db = mongojs(connString)

module.exports = db
