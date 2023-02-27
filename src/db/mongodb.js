const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_DB)
module.exports = {client}


