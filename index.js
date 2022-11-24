const { MongoClient } = require("mongodb");
require('dotenv').config();

const client = new MongoClient(process.env.DATABASE_ATLAS);

console.log("Database Successfully Connected");

module.exports = {client};